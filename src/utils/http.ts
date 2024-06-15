import { TOKEN_KEY } from '@/constant/common'
import Taro from '@tarojs/taro'
import QueryString from 'qs'
import * as R from 'ramda'

// 用于允许 POST 请求时携带 query 参数
type RequestOption = Taro.request.Option & { query?: Record<string, any> }

const urlWithQuery = (url: string, query?: Record<string, any>) => {
  if (R.isNil(query) || R.isEmpty(query)) return url
  const queryStr = QueryString.stringify(query)
  return `${url}?${queryStr}`
}

function taroRequestAsync<T>(options: Taro.request.Option) {
  const token = Taro.getStorageSync(TOKEN_KEY)
  const baseUrl = process.env.TARO_APP_BASE_URL || ''

  return new Promise<T>((resolve, reject) => {
    const optionsWithDefaults = {
      ...options,
      url: `${baseUrl}${options.url}`,
      header: {
        'Content-Type': 'application/json',
        token,
        ...options.header
      }
    }

    Taro.request<T>(optionsWithDefaults)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const http = {
  get<T>(url: string, query?: RequestOption['query'], options?: Omit<RequestOption, 'url' | 'data' | 'query'>) {
    const removeNil = R.isNotNil(query) && R.isNotEmpty(query) ? query : null
    return taroRequestAsync<T>({ url, method: 'GET', data: removeNil, ...options })
  },

  delete<T>(url: string, query?: RequestOption['query'], options?: Omit<RequestOption, 'url' | 'data' | 'query'>) {
    const removeNil = R.isNotNil(query) && R.isNotEmpty(query) ? query : null
    return taroRequestAsync<T>({ url, method: 'DELETE', data: removeNil, ...options })
  },

  post<T>(url: string, data?: RequestOption['data'], options?: Omit<RequestOption, 'url' | 'data'>) {
    return taroRequestAsync<T>({ url: urlWithQuery(url, options?.query), method: 'POST', data, ...options })
  },

  put<T>(url: string, data?: RequestOption['data'], options?: Omit<RequestOption, 'url' | 'data'>) {
    return taroRequestAsync<T>({ url: urlWithQuery(url, options?.query), method: 'PUT', data, ...options })
  },

  patch<T>(url: string, data?: RequestOption['data'], options?: Omit<RequestOption, 'url' | 'data'>) {
    return taroRequestAsync<T>({ url: urlWithQuery(url, options?.query), method: 'PATCH', data, ...options })
  }
}
