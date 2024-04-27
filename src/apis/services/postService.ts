import BackendServer from '../servers/be-server'
import { Post } from '../types/post'

class PostService {
  static async getPosts(): Promise<Post[] | Error> {
    const response = await BackendServer.get('post')
    const data = response.data
    return data
  }
}

export default PostService
