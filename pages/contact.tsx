import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function FirstPost() {
  console.log("CONTACT.TSX");
  return (
    <Layout home={false}>
      <Head>
        <title>CONTACT</title>
      </Head>
      <h1>Contact</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}