/**
 * @name TabBar
 * @description 自定义底部导航组件
 * @description 使用官方的自定义底部导航方案，仍然会出现第一次切换 tab 时的闪烁问题，因此直接使用自定义组件的方案
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import { SafeArea } from '@nutui/nutui-react-taro'
import Taro, { useRouter } from '@tarojs/taro'
import './styles.less'

const tabs = [
  { title: 'Home', path: '/pages/(tabs)/home/index' },
  { title: 'Me', path: '/pages/(tabs)/me/index' }
]

export default function TabBar() {
  const router = useRouter()
  const currPath = router.path

  return (
    <>
      <footer className='bg-white tab-bar'>
        <nav className='flex'>
          {tabs.map(({ title, path }) => (
            <div
              key={path}
              className={cls('flex-1 py-2 text-center', currPath === path ? 'text-primary' : 'text-gray-900')}
              onClick={() => Taro.switchTab({ url: path })}
            >
              <span>{title}</span>
            </div>
          ))}
        </nav>

        <SafeArea position='bottom' />
      </footer>
    </>
  )
}
