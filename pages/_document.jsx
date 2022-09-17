import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='bg'>
      <Head>
        <meta name="description" content="Минерални торове. Агро Торове 77 ООД предлага азотни, фосфорни, листни и комбинирани торове. Високо качество. Официален дистрибутор на Agropolychim" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Petromir Petrov" />
        <link rel="icon"  href="favicon.ico"/>
        {/* <link href='https://css.gg/close.css' rel='stylesheet' />
        <link href='https://css.gg/menu.css' rel='stylesheet' /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
