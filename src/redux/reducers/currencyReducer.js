/* const initialState = {
    currencies: [],
    conversions: [],
    exchange: [],
    currenciesLoading: false,
    error: null
}

export default function currenciesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CURRENCIES_BEGIN':
            return {
                ...state,
                currenciesLoading: true,
                error: null
            };
        case 'FETCH_CURRENCIES_SUCCESS':
            return {
                ...state,
                currencies: action.payload.currencies,
                conversions: action.payload.conversions,
                currenciesLoading: false,
                error: null
            };
        case 'FETCH_CURRENCIES_ERROR':
            return {
                ...state,
                currenciesLoading: false,
                error: null
            }   
        case 'CHANGE_CURRENCY':
            let newState = state
            let rate = newState.conversions.find(e => (e['currency_id'] === action.payload.selling && e['buying_currency_id'] === action.payload.buying))
            let multiplier = rate['net_rate']
            let freelancersInNewCurrency = newState.freelancers.map((e, i) => {
                e['_source']['starting_from'] = (e['_source']['starting_from'] * multiplier)
                return e
            })
            return {
                ...state,
                freelancers: freelancersInNewCurrency,
                exchange: [action.payload.selling, action.payload.buying],
                error: null
            }
        default : return state
    }} */