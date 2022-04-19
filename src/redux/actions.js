import axios from 'axios'


//Freelancer actions
const fetchFreelancersBegin = () => {
    return {
        type: 'FETCH_FREELANCERS_BEGIN',
    }
}
const fetchFreelancersSuccess = freelancers => {
    return {
        type: 'FETCH_FREELANCERS_SUCCESS',
        payload : freelancers
    }
}
const fetchFreelancersError = error => {
    return {
      type: 'FETCH_FREELANCERS_ERROR',
      payload: error,
    }
}
const initFetchFreelancers = () => {
    return dispatch => {
        dispatch(fetchFreelancersBegin())
        return axios.get(
          'https://api.terawork.com/service-categories/sellers-services/computer-software-development'
        )
        .then(response => {
            dispatch(fetchFreelancersSuccess(response.data.data['service_search_results']['hits']))
        })
        .catch(error => {
            dispatch(fetchFreelancersError(error))
        })
    }
}
const fetchStoreFreelancers = () => {
    return {
        type: 'FETCH_STORE_FREELANCERS'
    }
} 

const addFavorite = (id) => {
    return {
        type: 'ADD_FAVORITE',
        payload: id
    }
}


//Currency actions
const fetchCurrenciesBegin = () => {
  return {
    type: 'FETCH_CURRENCIES_BEGIN',
  }
}
const fetchCurrenciesSuccess = (currencies, conversions) => {
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    payload: {currencies: currencies, conversions: conversions},
  }
}
const fetchCurrenciesError = error => {
  return {
    type: 'FETCH_CURRENCIES_ERROR',
    payload: error,
  }
}
const fetchCurrencies = () => {
  return dispatch => {
    dispatch(fetchCurrenciesBegin())
    return axios.get("https://api.terawork.com/resources/")
      .then((response) => {
        dispatch(
          fetchCurrenciesSuccess(response.data.data['currencies'], response.data.data['net_conversions'])
        );
      })
      .catch((error) => {
        dispatch(fetchCurrenciesError(error));
      });
  }
}
const changeCurrency = (selling, buying) => {
    return {
        type: 'CHANGE_CURRENCY',
        payload : {selling: selling, buying: buying}
    }
}

export {
  fetchFreelancersBegin,
  fetchFreelancersSuccess,
  fetchFreelancersError,
  initFetchFreelancers,
  fetchStoreFreelancers,
  addFavorite,
  fetchCurrenciesBegin,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
  fetchCurrencies,
  changeCurrency,
}
