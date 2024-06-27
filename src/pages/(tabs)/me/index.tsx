/**
 * @name Me
 * @description
 * @author darcrand
 */

import TabBar from '@/components/TabBar'
import TopNav from '@/components/TopNav'
import { useUserInfo } from '@/stores/useUserInfo'
import { Button } from '@nutui/nutui-react-taro'
import * as R from 'ramda'

export default function Me() {
  const [info, setInfo] = useUserInfo()

  const onLogin = () => {
    setInfo({ name: 'darcrand', id: '001' })
  }

  const onLogout = () => {
    setInfo(null)
  }

  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='Me' />

        <div className='flex-1'>
          {R.isNotEmpty(info) ? (
            <>
              <h2 className='m-4 text-center text-2xl'>{info?.name}</h2>
              <p className='text-center'>
                <Button onClick={onLogout}>退出登录</Button>
              </p>
            </>
          ) : (
            <>
              <p className='text-center m-4'>
                <Button type='primary' onClick={onLogin}>
                  立即登录
                </Button>
              </p>
            </>
          )}
        </div>

        <TabBar />
      </section>
    </>
  )
}
