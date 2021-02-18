// import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    {/* <Link href="/">
      <a >Go to home</a>
    </Link> */}
    <p>Nextjs handson</p>
    <img src="/static/logo.png" alt="logo image" width="200"/>
  </Layout>
);

export default About;