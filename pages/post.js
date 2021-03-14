
import Layout from '../components/Layout';
import {withRouter} from 'next/router';

// const Post = ({ url }) => ( // url is depricated
const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>lorem ipsum... {router.query.title}</p>
  </Layout>
)

export default withRouter(Post);