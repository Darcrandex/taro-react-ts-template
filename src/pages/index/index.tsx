import { useMsg } from '@/stores/useMsg'
import { sleep } from '@/utils/common'
import { http } from '@/utils/http'
import { Comment, Fabulous, Heart, Notice } from '@nutui/icons-react-taro'
import { Button } from '@nutui/nutui-react-taro'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import './index.css'

export default function Index() {
  const [msg, setMsg] = useMsg()
  const queryClient = useQueryClient()

  const { isFetching } = useQuery({
    queryKey: ['topics'],
    queryFn: async () => {
      await sleep(1000)
      const res = await http.get('https://cnodejs.org/api/v1/topics')
      return res.data
    },
  })

  return (
    <>
      <h1 className='mb-10 text-center text-3xl font-bold text-emerald-400'>taro react template</h1>

      <section className='ui-card'>
        <p className='ui-title'>NutUI</p>

        <article className='flex items-center gap-4'>
          <Button>Click</Button>
          <Button type='primary'>Me</Button>

          <Fabulous size={24} />
          <Comment size={24} />
          <Heart size={24} />
          <Notice size={24} />
        </article>
      </section>

      <section className='ui-card'>
        <p className='ui-title'>tailwindcss</p>

        <article>
          <span className='font-extrabold text-emerald-400 italic'>font-extrabold text-emerald-400 italic</span>
        </article>
      </section>

      <section className='ui-card'>
        <p className='ui-title'>react-query fetching</p>

        <article>
          <Button onClick={() => queryClient.invalidateQueries({ queryKey: ['topics'] })} loading={isFetching}>
            fetch
          </Button>
        </article>
      </section>

      <section className='ui-card'>
        <p className='ui-title'>jotai + taro storage</p>
        <article>
          <p className='mb-2'>msg: {msg}</p>
          <Button onClick={() => setMsg(`hello ${Math.random().toString().slice(2, 8)}`)}>set msg</Button>
        </article>
      </section>
    </>
  )
}
