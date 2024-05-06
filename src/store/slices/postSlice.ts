import { Post } from '@/apis/types/post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const postSliceName = 'post'

type PostState = {
  data: Post[]
}

const initialState: PostState = {
  data: [],
}

const postSlice = createSlice({
  name: postSliceName,
  initialState: initialState,
  reducers: {
    setPostData: (state, { payload }: PayloadAction<Post[]>) => {
      state.data = payload
    },
  },
})

export const { setPostData } = postSlice.actions
export const postReducer = postSlice.reducer
