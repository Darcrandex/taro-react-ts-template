import Taro from '@tarojs/taro'
import type { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage'

// 基于 Taro.setStorageSync 实现 atom 接口
export const taroStorage: SyncStorage<any> = {
  getItem: (key: string) => Taro.getStorageSync(key),
  setItem: (key: string, value: any) => Taro.setStorageSync(key, value),
  removeItem: (key: string) => Taro.removeStorageSync(key)
}
