import { Post } from '@/apis/types/post'
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { getPostAction } from '@store/actions/postActions'

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
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<PostState>): void => {
    builder.addCase(
      getPostAction.fulfilled,
      (state: PostState, action: PayloadAction<Post[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const postReducer = postSlice.reducer
