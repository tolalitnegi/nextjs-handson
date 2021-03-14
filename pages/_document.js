import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {

    return (
      <html>
        <Head>
          <meta name="description" content="A handson site lalit" />
          <meta charset="UTF-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="text/stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body {
             font-family: 'Oswald', sans-serif;
            }
          `}</style>
        </body>
      </html>
    )
  }
};

export default MyDocument;