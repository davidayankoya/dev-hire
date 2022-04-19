import { combineReducers } from 'redux'
import freelancersReducer from './freelancersReducer'

const rootReducer = combineReducers({
    freelancers: freelancersReducer,
})

export default rootReducer