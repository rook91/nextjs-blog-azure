import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

// https://portalpacjenta.luxmed.pl/PatientPortal/NewPortal/terms/index?
// cityId=3&
// serviceVariantId=6621&
// languageId=10&
// searchDateFrom=2022-11-05&
// searchDateTo=2022-11-18&
// searchDatePreset=14&
// processId=247ba02f-9613-43d3-b47f-16715c0706b7&
// nextSearch=false&
// searchByMedicalSpecialist=false


// 'ASP.NET_SessionId=dsbkehrpypy2jbeemwt0bzh1'


const checkService = () => {
  document.cookie = 'ASP.NET_SessionId=dsbkehrpypy2jbeemwt0bzh1;';

  fetch('https://portalpacjenta.luxmed.pl/PatientPortal/NewPortal/terms/nextTerms?cityId=3&serviceVariantId=6621&languageId=10&searchDateFrom=2022-12-03&searchDateTo=2022-12-16&searchDatePreset=14&processId=ced92790-394f-463d-b4f9-d578b0c9a8ff&nextSearch=true&searchByMedicalSpecialist=false', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    credentials: 'include',
    headers: {
      'Cache': 'no-cache',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log("-----------------R1---------------");
    console.log(response.status);
    // return response.json();
    return response.text();
  })
  .then((data) => {
    console.log("---------------R2-----------------");
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
}

export default function FirstPost() {
  console.log("PORTAL PACJENTA.TSX");
  // checkService();
  return (
    <Layout home={false}>
      <Head>
        <title>PORTAL PACJENTA</title>
      </Head>
      <h1>PORTAL PACJENTA</h1>
      <h2>
        <button onClick={checkService}>
            Activate check
        </button>
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}