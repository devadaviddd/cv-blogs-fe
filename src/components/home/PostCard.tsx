import { Post } from '@/apis/types/post'

interface IPostCard {
  post: Post
}

export default function PostCard(props: IPostCard) {
  return (
    <div className="flex flex-col items-center min-h-[13rem] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5">
      <img
        className="object-cover w-full rounded-t-lg min-h-[13rem] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={props.post.image}
        alt=""
      />

      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.post.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.post.description}
        </p>
      </div>
    </div>
  )
}
