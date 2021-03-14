
import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
  <Layout title="My Blog">
    <ul>
      <li>
        <Link href="/post?title=React"><a>React Post</a></Link>
      </li>
      <li>
        <Link href="/post?title=Angular"><a>Angular</a></Link>
      </li>
      <li>
        <Link href="/post?title=TypeScript"><a>TypeScript</a></Link>
      </li>
      <li>
        <Link href="/post?title=GraphQl"><a>Graphql</a></Link>
      </li>
    </ul>
  </Layout>
)