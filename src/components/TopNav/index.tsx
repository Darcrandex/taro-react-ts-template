/**
 * @name TopNav
 * @description 自定义顶部导航组件
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import Taro from '@tarojs/taro'

export type TopNavProps = { title?: string; className?: string }

export default function TopNav(props: TopNavProps) {
  const { screenWidth } = Taro.getWindowInfo()
  const menuRect = Taro.getMenuButtonBoundingClientRect()
  const spacing = screenWidth - menuRect.right
  const canGoback = Taro.getCurrentPages().length > 1

  return (
    <>
      <header className={cls('bg-primary', props.className)}>
        <div style={{ height: menuRect.top - spacing }}></div>

        <div className='flex items-center' style={{ height: menuRect.height, padding: spacing }}>
          <aside style={{ width: menuRect.width }}>
            {canGoback && <span onClick={() => Taro.navigateBack()}>Back</span>}
          </aside>

          <span className='flex-1 text-center text-gray-900'>{props.title}</span>

          <aside style={{ width: menuRect.width }}></aside>
        </div>
      </header>
    </>
  )
}
