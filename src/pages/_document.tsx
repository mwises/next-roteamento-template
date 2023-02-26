import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior: "smooth"}} lang="pt-br">
      <Head/>
      <body style={{padding: "0", margin: "0"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
