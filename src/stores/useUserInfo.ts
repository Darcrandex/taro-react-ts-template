import { taroStorage } from '@/utils/atom-taro-storage'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const stateAtom = atomWithStorage<API.UserInfo | null>('userInfo', null, taroStorage)

export function useUserInfo() {
  return useAtom(stateAtom)
}
