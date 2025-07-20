import "@/styles"
import { Head } from "minista"
import Header from "./layouts/Header"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Dmitry Stupin | Frontend Developer</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
    </>
  )
}
