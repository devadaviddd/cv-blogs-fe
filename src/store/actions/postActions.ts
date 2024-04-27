import GetPostApi from '@/apis/GetPostApi'
import { Post } from '@/apis/types/post'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export const getPostAction = createAsyncThunk<
  Post[],
  Record<string, string>,
  { rejectValue: AxiosError }
>('getPosts', async (_, thunkApi) => {
  try {
    const data = GetPostApi()
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error as AxiosError)
  }
})
