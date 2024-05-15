import GetPostApi from '@/apis/GetPostApi'
import HomeLayout from '@/layouts/HomeLayout'

export function loader() {
  return () => GetPostApi()
}

export default function IndexPage() {
  return <HomeLayout />
}


