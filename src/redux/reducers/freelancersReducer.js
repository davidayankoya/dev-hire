const initialState = {
	freelancers: [],
	freelancersLoading: false,
	freelancersError: null,
	currencies: [],
    currenciesLoading: false,
    currenciesError: null,
	conversions: [],
	exchange: [],
}

export default function freelancersReducer (state = initialState, action) {

    switch (action.type) {
		case 'FETCH_FREELANCERS_BEGIN':
			return {
				...state,
				freelancersLoading: true,
				freelancersError: null,
			}
		case 'FETCH_FREELANCERS_SUCCESS':
			return {
				...state,
				freelancers: action.payload.map(e => {
					return { ...e, favorite: false, price: e['_source']['starting_from'], currency: e['_source']['currency_name']}
				}),
				freelancersLoading: false,
				freelancersError: null,
			}
		case 'FETCH_FREELANCERS_ERROR':
			return {
				...state,
				freelancersLoading: false,
				freelancersError: action.payload,
			}
		case 'FETCH_STORE_FREELANCERS':
			return {
				...state,
				freelancersLoading: false,
			}
		case 'ADD_FAVORITE': {
			let newState = state
			let newFreelancers = newState.freelancers.map(e => {
				if (e['_source']['cust_id'] === action.payload) {
					e.favorite = !e.favorite
				}
				return e
			})
			return {
				...newState,
				freelancers: newFreelancers,
				freelancersError: null,
			}
        }
            
		//Currencies
		case 'FETCH_CURRENCIES_BEGIN':
			return {
				...state,
				currenciesLoading: true,
				currenciesError: null,
			}
		case 'FETCH_CURRENCIES_SUCCESS':
			return {
				...state,
				currencies: action.payload.currencies,
				conversions: action.payload.conversions,
				currenciesLoading: false,
				currenciesError: null,
			}
		case 'FETCH_CURRENCIES_currenciesError':
			return {
				...state,
				currenciesLoading: false,
				currenciesError: null,
			}
		case 'CHANGE_CURRENCY':
			let newState = state
			let rate = newState.conversions.find(e => e['currency_id'] === 1 && e['buying_currency_id'] === action.payload.buying)
			let multiplier = Number(rate['net_rate'])
			let freelancersInNewCurrency = newState.freelancers.map((e, i) => {
                e['price'] = ((Number(e['_source']['starting_from']) * Number(multiplier)).toFixed(2)).toString()
                e['currency'] = newState.currencies.find(e => e['id'] === action.payload.buying)['symbol']
				return e
			})
			return {
				...state,
				freelancers: freelancersInNewCurrency,
				exchange: [action.payload.selling, action.payload.buying],
				currenciesError: null,
			}
		default:
			return state
	}
}