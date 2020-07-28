import React from "react"
import App from "next/app"

class MyApp extends App {
  componentDidMount() {
    /*const isLocal = localStorage.getItem("theme")
    const isDark = window.matchMedia("(prefers-color-scheme: dark)")

    if (isLocal) {
      document.body.setAttribute("data-theme", isLocal)
    } else if (isDark.matches) {
      document.body.setAttribute("data-theme", "dark")
    } else {
      document.body.setAttribute("data-theme", "light")
    }*/
  }
  render() {
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router
    return (
      <div className="app">
        <main className="app-main">
          <Component {...pageProps} />
        </main>
      </div>
    )
  }
}

export default MyApp
