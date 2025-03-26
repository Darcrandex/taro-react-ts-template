import { useLaunch } from '@tarojs/taro'
import { PropsWithChildren } from 'react'

import './app.css'
import QueryProvider from './providers/QueryProvider'
import ThemeProvider from './providers/ThemeProvider'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  return (
    <>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </>
  )
}

export default App
