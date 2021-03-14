// import Link from 'next/link';
import Layout from '../components/Layout';
import Error from './_error';
// import fetch from 'isomorphic-unfetch'; // not needed on latest version of node
import { Component, component } from 'react';

// const About = () => (
//   <Layout title="About">
//     {/* <Link href="/">
//       <a >Go to home</a>
//     </Link> */}
//     <p>Nextjs handson</p>
//     <img src="/static/logo.png" alt="logo image" width="200"/>
//   </Layout>
// );



// export default About;

export default class About extends Component {

  // will run only on client side not server side so wont work.
  // componentDidMount(){
  //   fetch('https://api.github.com/users/tolalitnegi')
  //   .then(resp=>resp.json())
  //   .then(data=>console.log('....data', data));
  // }

  // provided by next? , for server side 
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/tolalitnegi');
    const statusCode = res.statusCode>200 ? res.statusCode : false;
    const data = await res.json();
    return {user: data, statusCode};
  }




  render() {
    const {user, statusCode} = this.props;
    if(statusCode){
      return (<Error />)
    }
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <p>Nextjs handson</p>
        <img src="/static/logo.png" alt="logo image" width="200" />
        <img src={user.avatar_url} alt="Lalit" width="200" />
      </Layout>
    );
  }
}
