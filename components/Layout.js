import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = url => { // showing the spinner / loader on route change 
  // which url we are going to
  console.log(url);
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default ({ children, title }) => (
  <div className="root">
    <Head> {/* access to html head and related links can be also accessed via pages/_document.js */}
      <title>next js handson</title>
      <link rel="text/stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />


    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contactus"><a>Contact Us</a></Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>


    <style jsx>
      {
        `
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        font-size: 24px;
        background: indigo;
      }
      header a {
        color: white;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lighgrey;
      }

      footer {
        padding: 20px;
      }
      `
      }
    </style>

    <style global jsx>
      {`
      body {
        margin: 0 auto;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}
    </style>
  </div>
)