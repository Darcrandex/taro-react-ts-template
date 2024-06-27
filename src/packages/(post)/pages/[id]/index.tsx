/**
 * @name PostDetail
 * @description
 * @author darcrand
 */

import TopNav from '@/components/TopNav'
import { http } from '@/utils/http'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from '@tarojs/taro'

export default function PostDetail() {
  const id = useRouter().params.id as string
  const { data } = useQuery({
    enabled: !!id,
    queryKey: ['post', id],
    queryFn: () => http.get<AppSchema.PostItem>(`/posts/${id}`),
    select: (res) => res.data
  })

  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='PostDetail' />

        <div className='flex-1'>
          <h1 className='m-4 text-center text-2xl'>{data?.title}</h1>
          <h2 className='m-4 text-center text-gray-300'>#{data?.id}</h2>

          <article className='m-4 indent-2'>{data?.body}</article>
        </div>
      </section>
    </>
  )
}
