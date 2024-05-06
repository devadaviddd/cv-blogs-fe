import { configureStore } from '@reduxjs/toolkit'
import { postReducer, postSliceName } from './slices/postSlice'

export const store = configureStore({
  reducer: {
    [postSliceName]: postReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

