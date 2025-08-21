/**
 * @name IconFont
 * @description 自定义图标
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import { Icon } from '@taroify/icons'
import { IconProps } from '@taroify/icons/shared'

export default function IconFont(props: IconProps & { name: string }) {
  const { className, name, ...restProps } = props

  return <Icon classPrefix='iconfont' name={name} className={cls(name, className)} {...restProps} />
}
