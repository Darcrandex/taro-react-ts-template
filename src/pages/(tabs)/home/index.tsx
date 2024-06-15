/**
 * @name Home
 * @description
 * @author darcrand
 */

import TabBar from '@/components/TabBar'
import TopNav from '@/components/TopNav'
import Taro from '@tarojs/taro'

export default function Home() {
  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='Home' />

        <div className='flex-1'>
          <ul className='m-4 space-y-4'>
            <li onClick={() => Taro.navigateTo({ url: '/packages/(post)/pages/[id]/index' })}>post 001</li>
            <li>post 002</li>
            <li>post 003</li>
          </ul>
        </div>

        <TabBar />
      </section>
    </>
  )
}
