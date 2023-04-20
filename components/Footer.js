import {
  Box,
  FormControl,
  Container,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Button,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import {} from "react-icons/hi2";
import webDev from "public/img/webDev.svg";
import Image from 'next/image'

const Footer = forwardRef((props, ref) => {
  const btnRef = useRef();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [message,setMessage] = useState('')

  useImperativeHandle(ref, () => ({
    gotoFooter() {
      window.addEventListener("click", () => {
        window.scrollTo({
          top: btnRef.current.offsetTop,
          behavior: "smooth",
        });

       
      });
       window.removeEventListener("click", () => {
         window.scrollTo({
           top: btnRef.current.offsetTop,
           behavior: "smooth",
         });
       });
    },
  }));


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('../api/auth', {
      method: "POST",
      body: JSON.stringify({name,email,contact,message}),
      headers: {
        "Content-type":"application/json"
      }
    })
    const data = await response.json()
    console.log(data)
    setName('')
    setEmail('')
    setMessage('')
    setContact('')
    return data
  }



  return (
    <>
      <Stack
        ref={btnRef}
        direction={{ base: "column", md: "column", sm: "column", lg: "row" }}
        mt="4rem"
        px={{ lg: "5rem", md: "5rem", base: "0.5rem" }}
      >
        <Container mt="20px" maxW="4xl" pb="12px">
          <Box my="12px">
            <Heading as="h3">Why hire me?</Heading>
            <Text align="justify">
              I am very passionate and dedicated to my work. I have acquired the
              skills and knowledge to make your project a success. One thing i
              love is to work as a team, solve problems and i enjoy every step
              of software development, from discussion to concept and execution.
              I find the most success in seeing the finished product do
              everything for you tht it was created to do.
            </Text>
            <Heading>What type of Work?</Heading>
            <Text>
              I can work both remote and Full/part time
              <Image src={webDev} alt="webdev" />
            </Text>
          </Box>
        </Container>

        <Container mt="20px" maxW="4xl" pb="12px">
          <Heading>Hire me</Heading>
          <Box maxW="680px" my="12px">
            <form method="POST">
              <FormControl mb="12px" isRequired>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormHelperText>
                  Please enter your name or company name
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="contact">Contact:</FormLabel>
                <Input
                  type="number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <FormHelperText>
                  Please enter your mobile or tel number
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText>
                  Please enter your email or company email
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="message">message:</FormLabel>
                <Textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <FormHelperText>Please enter your message</FormHelperText>
              </FormControl>

              <Button
                borderTopLeftRadius="10rem"
                borderBottomRightRadius="10rem"
                color="white"
                width={{ base: "18rem", lg: "35rem" }}
                onClick={handleSubmit}
                type="submit"
                bg="red.300"
              >
                Send
              </Button>
            </form>
            
          </Box>
        </Container>
      </Stack>
    </>
  );
});
Footer.displayName = 'Footer'
export default Footer;
