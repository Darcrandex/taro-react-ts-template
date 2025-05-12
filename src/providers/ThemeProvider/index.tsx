/**
 * @name ThemeProvider
 * @description 主题容器
 * @author darcrand
 */

import { PropsWithChildren } from 'react'
import './theme.css'

export default function ThemeProvider(props: PropsWithChildren) {
  return <>{props.children}</>
}
