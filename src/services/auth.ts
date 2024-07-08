export const authService = {
  login: async (data: { username: string }) => {
    console.log('api login', data)
    const token = `token_${data.username}`

    return { token }
  },
  logout: () => {
    console.log('api logout')
  }
}
