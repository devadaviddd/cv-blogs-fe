import { AxiosError } from 'axios'
import BackendServer from '../servers/be-server'
import { Post } from '../types/post'

export default class PostService {
  static async getPosts(): Promise<Post[] | AxiosError> {
    try {
      const res = await BackendServer.get('post')
      const posts = res.data
      return posts
    } catch (error) {
      return error as AxiosError
    }
  }
}
