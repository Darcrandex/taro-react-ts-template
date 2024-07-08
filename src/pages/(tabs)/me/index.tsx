/**
 * @name Me
 * @description
 * @author darcrand
 */

import TabBar from '@/components/TabBar'
import TopNav from '@/components/TopNav'
import { useUserInfo } from '@/stores/useUserInfo'
import { Button, Image } from '@nutui/nutui-react-taro'
import { useMutation } from '@tanstack/react-query'
import * as R from 'ramda'

export default function Me() {
  const [info, setInfo] = useUserInfo()

  const loginAction = useMutation({
    mutationFn: async () => {
      setInfo({
        id: Math.random().toString(),
        name: 'darcrand'
      })
    }
  })

  const logoutAction = useMutation({
    mutationFn: async () => {
      setInfo(null)
    }
  })

  return (
    <>
      <section className='flex flex-col h-screen'>
        <TopNav title='Me' />

        <div className='flex-1'>
          {R.isNotNil(info) ? (
            <>
              <div>
                <Image className='mx-auto my-4' width={120} src={info?.avatar} mode='widthFix' />
              </div>
              <h2 className='m-4 text-center text-2xl'>{info?.name}</h2>
              <p className='text-center'>
                <Button onClick={() => logoutAction.mutate()}>logout</Button>
              </p>
            </>
          ) : (
            <>
              <p className='text-center m-4'>
                <Button type='primary' onClick={() => loginAction.mutate()}>
                  login
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
