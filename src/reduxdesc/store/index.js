import { configureStore } from '@reduxjs/toolkit'
import couterSlice from './couterSlice.js'

export default configureStore({
  reducer: {
    counterReducer: couterSlice
  },
})