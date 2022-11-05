import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const fetchFUT23 = () => {
  fetch("https://utas.mob.v1.fut.ea.com/ut/game/fifa23/club", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'X-UT-SID': '30b88bf6-7a11-4257-8e9e-820a856825ef',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      "count": 91,
      "sort": "desc",
      "sortBy": "value",
      "start": 0,
      "type": "player"
  }) // body data type must match "Content-Type" header
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("--------------------------------");
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
}

export default function Home({ allPostsData } : { allPostsData:any }) {
  // fetchFUT23();
  console.log("INDEX.TSX");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>13-KROTNY MISTRZ POLSKI</p>
        
        <h2>
        <Link href="/contact">
          <a>Link to contact</a>
        </Link>
        <Link href="/portalPacjenta">
          <a>Link to Portal Pacjenta</a>
        </Link>
      </h2>

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: { id:string, date:string, title:string }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}