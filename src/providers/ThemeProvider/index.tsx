/**
 * @name ThemeProvider
 * @description nutui 主题容器
 * @author darcrand
 */

import '@nutui/nutui-react-taro/dist/styles/themes/default.css'
import { PropsWithChildren } from 'react'
import './theme.css'

export default function ThemeProvider(props: PropsWithChildren) {
  return <>{props.children}</>
}
