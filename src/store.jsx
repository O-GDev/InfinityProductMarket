import { combineReducers, combineSlices, configureStore } from '@reduxjs/toolkit'
import subPlan from './reducers/subplan'
import accessToken  from './reducers/loggedInUsers'


const allReducers = combineSlices(subPlan,accessToken)
export default configureStore({
  reducer: allReducers})

