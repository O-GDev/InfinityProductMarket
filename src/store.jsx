import { configureStore } from '@reduxjs/toolkit'
import subPlan from './reducers/subplan'

export default configureStore({
  reducer: {
    subplan: subPlan,
  },
})