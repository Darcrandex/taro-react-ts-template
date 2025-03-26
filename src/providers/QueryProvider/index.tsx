/**
 * @name QueryProvider
 * @description
 * @author darcrand
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'abort-controller/polyfill'

// 注入 AbortController
globalThis.AbortController = window.AbortController

const queryClient = new QueryClient()

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
