import { Post } from '@/apis/types/post'
import { RootState } from '../store'
import { postSliceName } from '../slices/postSlice'

export const postSelector = (state: RootState): Post[] =>
  state[postSliceName].data
