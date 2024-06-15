import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useLaunch } from '@tarojs/taro'
import { PropsWithChildren } from 'react'

import './app.less'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5 * 1000 * 60,
      staleTime: 1 * 1000 * 60,
      refetchOnWindowFocus: false
    }
  }
})

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default App
