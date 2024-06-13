import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  access_token:"",
}
export const accessToken = createSlice({
  name: 'acc_token',
  initialState,
  reducers: {
    tokens: (state, action) => {
      state.access_token = action.payload
    },
  },
})

export const { tokens } = accessToken.actions

export default accessToken.reducer 