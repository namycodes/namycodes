import { ChakraProvider } from '@chakra-ui/react'
import NavBar from 'components/NavBar'

export default function App({ Component, pageProps }) {
 
  return (
    <>
      <ChakraProvider>
        <NavBar/>
          <Component {...pageProps} />
        
      </ChakraProvider>
    </>
  );
}
