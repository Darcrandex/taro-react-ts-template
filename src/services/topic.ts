import { http } from '@/utils/http'

export const topicService = {
  pages: () => http.get<Array<API.PostItem>>('/posts'),

  detail: (id: string) => http.get<API.PostItem>(`/posts/${id}`)
}
