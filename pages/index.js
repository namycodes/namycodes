import Head from "next/head";
import MobileView from "../components/mobile";
import { useMediaQuery } from "@chakra-ui/react";
import App from "components/HomeDesktop";
import { useState, useEffect, createContext } from "react";
export default function Home() {
  const [mobile, setMobile] = useState(undefined);

  
  
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 768 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return typeof mobile !== "undefined" ? (
    mobile ? (
      <>
        <Head>
          <title>namycodes</title>
          <meta
            name="description"
            content="Software engineer portfolio @namycodes web developer app developer react developer next js developer node js developer"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/img/man45.jpg" />
        </Head>
        <MobileView />
      </>
    ) : (
      <>
        <Head>
          <title>namycodes</title>
          <meta
            name="description"
            content="Software engineer portfolio @namycodes web developer app developer react developer next js developer node js developer"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/img/man45.jpg" />
        </Head>
        <App />
      </>
    )
  ) : null;
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4000/projects')
//   const data = await response.json()
//   return {
//     props: {
//       projects: data,
//     },
//     revalidate: 10000
//   }
// }

export const homeContext = createContext();
