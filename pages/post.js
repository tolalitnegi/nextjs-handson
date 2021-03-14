
import Layout from '../components/Layout';

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>lorem ipsum... {url.query.title}</p>
  </Layout>
)

export default Post;