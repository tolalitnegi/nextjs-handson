
import Layout from '../components/Layout';
import Link from 'next/link';

/**
 * To pass a query param or a path param slug value
 * for path para two options
 *  <Link href="/post?title=React"><a>React Post</a></Link>
 * could be
 *  <Link as="react-post" href="/post?title=React"><a>React Post</a></Link>
 * final url will be /post/react-post
 *  
 */
export default () => (
  <Layout title="My Blog">
    <ul>
      <li>
        <Link as="react-post" href="/post?title=ReactPost"><a>React Post</a></Link>
      </li>
      <li>
        <Link as="angular-post" href="/post?title=Angular"><a>Angular</a></Link>
      </li>
      <li>
        <Link as="typescript-post" href="/post?title=TypeScript"><a>TypeScript</a></Link>
      </li>
      <li>
        <Link as="graphql-post" href="/post?title=GraphQl"><a>Graphql</a></Link>
      </li>
    </ul>
  </Layout>
)