/**
 * @name Me
 * @description
 * @author darcrand
 */

import TabBar from '@/components/TabBar'
import TopNav from '@/components/TopNav'

export default function Me() {
  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='Me' />

        <div className='flex-1'></div>

        <TabBar />
      </section>
    </>
  )
}
