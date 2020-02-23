import "./_app.scss"

import App from "next/app"
import Router from "next/router"

// Workaround for https://github.com/zeit/next-plugins/issues/282
if (process.env.NODE_ENV !== "production") {
  Router.events.on("routeChangeComplete", () => {
    const path = "/_next/static/css/styles.chunk.css"
    const chunksNodes = document.querySelectorAll(`link[href*="${path}"]:not([rel=preload])`)
    if (chunksNodes.length) {
      const timestamp = new Date().valueOf()
      const node: any = chunksNodes[0]
      node.href = `${path}?ts=${timestamp}`
    }
  })
}

export default class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}
