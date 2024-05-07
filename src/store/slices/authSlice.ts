import { User } from '@/apis/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const authSliceName = 'auth'

type AuthState = {
  user?: User
  isLogin: boolean
}

const initialState: AuthState = {
  isLogin: false,
}

const authSlice = createSlice({
  name: authSliceName,
  initialState: initialState,
  reducers: {
    setAuthSession: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
    },
    setIsLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogin = payload
    },
  },
})

export const { setAuthSession, setIsLogin } = authSlice.actions
export const authReducer = authSlice.reducer
