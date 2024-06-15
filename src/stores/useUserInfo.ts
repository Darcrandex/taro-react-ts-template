import { taroStorage } from '@/utils/atom-taro-storage'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type UserInfo = {
  id: string
  name: string
  avatar?: string
}

const stateAtom = atomWithStorage<UserInfo | null>('userInfo', null, taroStorage)

export function useUserInfo() {
  return useAtom(stateAtom)
}
