import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text className='m-4 text-rose-500 text-xl translate-y-3'>Hello world!</Text>
    </View>
  )
}
