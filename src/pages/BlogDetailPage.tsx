import AuthorCard from '@/components/blogDetail/AuthorCard'
import StaticalCard from '@/components/blogDetail/StaticalCard'
import BlogDetailLayout  from '@/layouts/BlogDetailLayout'
import {Divider, Stack } from '@mui/material'

export default function BlogDetailPage() {
  return (
    <BlogDetailLayout >
      <Stack direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1} 
        className='absolute right-[-26%] w-1/4 h-full bg-[#E0EAF0]'>
          <AuthorCard/>
          <StaticalCard/>
      </Stack>
      <div className='absolute right-0 top-0 block rounded-full p-[0.5rem] border-[#414446] border-2 bg-white z-10 '>
      </div>
      <div className='absolute right-0 top-0 block  p-[0.5rem] h-full  border-2   '>
        <Divider  flexItem className="absolute m-auto left-0 right-0 p-0 top-0 bg-[#414446] h-full w-1"  ></Divider>
      </div>


      <div className='absolute right-0 bottom-0 block  rounded-full p-[0.5rem] border-[#414446] border-2 bg-white'>

      </div>
    </BlogDetailLayout>
  )
}

