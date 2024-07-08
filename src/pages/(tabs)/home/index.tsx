/**
 * @name Home
 * @description
 * @author darcrand
 */

import TabBar from '@/components/TabBar'
import TopNav from '@/components/TopNav'
import { topicService } from '@/services/topic'
import { useQuery } from '@tanstack/react-query'
import Taro from '@tarojs/taro'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['post', 'pages'],
    queryFn: () => topicService.pages(),
    select: (res) => res.data
  })

  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='Home' />

        <div className='flex-1 overflow-auto'>
          <ul className='m-4 space-y-4'>
            {data?.map(({ id, title }) => (
              <li
                key={id}
                className='text-lg text-gray-800 p-2 rounded-lg bg-gray-100'
                onClick={() => Taro.navigateTo({ url: `/packages/(post)/pages/[id]/index?id=${id}` })}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        <TabBar />
      </section>
    </>
  )
}
