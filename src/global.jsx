import "@/styles"
import { Head } from "minista"
import Header from "./layouts/Header"
import Content from "./layouts/Content"

export default (props) => {
  const { children } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Dmitry Stupin | Frontend Developer</title>
        <script src="/src/main.js" type="module" defer />
        <script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js"
          type="module"
        />
      </Head>
      <Header />
      <Content>{children}</Content>
    </>
  )
}
