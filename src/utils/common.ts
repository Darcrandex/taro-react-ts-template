/**
 * 异步等待
 * @param ms 等待时间
 */
export async function sleep(ms: number = 1000) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}
