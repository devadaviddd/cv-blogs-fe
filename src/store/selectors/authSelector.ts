import { RootState } from '../store'
import { authSliceName } from '../slices/authSlice'

export const userSelector = (state: RootState) => state[authSliceName].user
export const isLoginSelector = (state: RootState) =>
  state[authSliceName].isLogin
