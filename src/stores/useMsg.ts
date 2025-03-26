import { taroStorage } from '@/utils/atom-with-taro-storage'
import { useAtom } from 'jotai/react'
import { atomWithStorage } from 'jotai/utils'

const msgAtom = atomWithStorage<string>('msg', 'hello', taroStorage)

export function useMsg() {
  return useAtom(msgAtom)
}
