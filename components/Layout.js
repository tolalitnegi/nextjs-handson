import Link from 'next/link';

export default ({ children, title }) => (
  <div className="root">
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