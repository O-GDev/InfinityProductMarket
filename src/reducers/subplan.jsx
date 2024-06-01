import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  sub:"",
}
export const subPlan = createSlice({
  name: 'subplan',
  initialState,
  reducers: {
    subscription: (state, action) => {
      state.sub = action.payload
    },
    // prepare: (text) =>{
    //   const id = nanoid()
    //   return{payload: {id, text}}
    // }
  },
})

export const { subscription } = subPlan.actions

export default subPlan.reducer 