export default function (context) {
  // userAgentプロパティをコンテキストに追加します
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  console.log(context.userAgent)
}
