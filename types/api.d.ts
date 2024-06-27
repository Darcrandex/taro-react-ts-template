// 全局定义项目中使用的类型

declare namespace API {
  //  post
  type PostItem = {
    id: number
    title: string
    body: string
    userId: number
  }

  type UserInfo = {
    id: string
    name: string
    avatar?: string
  }
}
