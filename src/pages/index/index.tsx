import { useMsg } from '@/stores/useMsg'
import { sleep } from '@/utils/common'
import { http } from '@/utils/http'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Cell, Field, Form, Input, Toast } from '@taroify/core'
import { ChatOutlined } from '@taroify/icons'

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
        <p className='ui-title'>Taroify UI</p>
        <article>
          <Button color='primary'>click</Button>
          <Button icon={<ChatOutlined />} variant='outlined'>
            click
          </Button>
        </article>

        <p className='ui-title'>Form Demo</p>
        <BasicForm />
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

function BasicForm() {
  const onSubmit = (event: any) => {
    Toast.open(JSON.stringify(event.detail.value))
  }

  return (
    <Form onSubmit={onSubmit}>
      <Toast id='toast' />
      <Cell.Group inset>
        <Form.Item name='username' rules={[{ required: true, message: '请填写用户名' }]}>
          <Form.Label>用户名</Form.Label>
          <Form.Control>
            <Input placeholder='用户名' />
          </Form.Control>
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: '请填写密码' }]}>
          <Form.Label>密码</Form.Label>
          <Form.Control>
            <Input password placeholder='密码' />
          </Form.Control>
        </Form.Item>
        <Field
          name='text'
          label={{ align: 'left', children: '文本' }}
          rules={[{ required: true, message: '请填写文本' }]}
        >
          <Input placeholder='请输入文本' />
        </Field>
      </Cell.Group>
      <div style={{ margin: '16px' }}>
        <Button shape='round' block color='primary' formType='submit'>
          提交
        </Button>
      </div>
    </Form>
  )
}
