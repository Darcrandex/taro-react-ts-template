/**
 * @name Index
 * @description
 * @author darcrand
 */

import IconFont from '@/components/IconFont'
import { useSafeArea } from '@/hooks/useSafeArea'
import { useCounter } from '@/stores/counter'
import { $cloud } from '@/utils/cloud'
import { cls } from '@/utils/cls'
import { useQuery } from '@tanstack/react-query'
import { Button, Divider } from '@taroify/core'
import { useLoad } from '@tarojs/taro'
import { delay } from 'es-toolkit'
import { PropsWithChildren } from 'react'

const icons = [
  'icon-zhuanshufuwu',
  'icon-play',
  'icon-hot-for-ux',
  'icon-all',
  'icon-assessed-badge',
  'icon-coupon',
  'icon-money-exchange-settlement',
  'icon-top-raning',
]

export default function Index() {
  useLoad(() => {
    console.log('load', process.env.TARO_APP_ID)
  })

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['home', 'msg'],
    staleTime: 0,
    queryFn: async () => {
      console.log('get data')

      await delay(2000)

      return {
        msg: `hello world, ${Math.random().toString().slice(2, 8)}`,
      }
    },
  })

  const [count, setCount] = useCounter()
  const { bottom } = useSafeArea()

  const callCloudFn = async () => {
    const res1 = await $cloud('/api/env')
    const res2 = await $cloud('/api/test', { a: 1, b: 2, c: 'str', d: false, e: ['a', 'b'] })
    console.log('云函数 res1 ===>', res1)
    console.log('云函数 res2 ===>', res2)
  }

  return (
    <>
      <Block title='Tailwindcss'>
        <p className='rounded-lg bg-rose-50 p-4 text-rose-500'>rounded-lg bg-rose-50 p-4 text-rose-500</p>
      </Block>

      <Block title='数据请求'>
        <p className={cls('mb-4 transition-all', isFetching && 'opacity-50')}>msg: {data?.msg}</p>
        <Button size='small' shape='round' color='primary' onClick={() => refetch()}>
          {isFetching ? 'loading...' : 'refetch'}
        </Button>
      </Block>

      <Block title='本地状态管理'>
        <div className='flex items-center'>
          <Button size='small' shape='round' onClick={() => setCount((c) => c - 1)}>
            <IconFont name='icon-reduce' size={24} />
          </Button>
          <span className='w-20 text-center'>{count}</span>
          <Button size='small' shape='round' onClick={() => setCount((c) => c + 1)}>
            <IconFont name='icon-add' size={24} />
          </Button>
        </div>
      </Block>

      <Block title='taroify 组件库'>
        <div className='flex gap-2'>
          <Button size='small' color='primary'>
            主要按钮
          </Button>
          <Button size='small' color='info'>
            信息按钮
          </Button>
          <Button size='small' color='success'>
            成功按钮
          </Button>
        </div>

        <Divider />
        <ol className='grid grid-cols-4 gap-4 text-sky-400'>
          {icons.map((v) => (
            <li key={v} className='text-center'>
              <IconFont name={v} size={32} />
            </li>
          ))}
        </ol>
      </Block>

      <Block title='云函数'>
        <Button size='small' onClick={callCloudFn}>
          调用云函数
        </Button>

        <p className='mt-4 text-sm text-gray-500'>打开调试器查看日志</p>
      </Block>

      <Block title='安全区域'>
        <p>安全区域底部高度: {bottom}</p>
      </Block>

      <div className='bg-emerald-200' style={{ paddingBottom: bottom }}></div>
    </>
  )
}

function Block(props: PropsWithChildren<{ title: string }>) {
  const { title, children } = props
  return (
    <>
      <h2 className='mx-4 mt-8 mb-4 font-bold'>{title}</h2>
      <section className='m-4 rounded-lg bg-white p-4'>{children}</section>
    </>
  )
}
