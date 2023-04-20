import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Code,
  Text,
  IconButton,
  HStack,
  Stack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
// import bg from "public/img/keyboard.jpg";
import { TypeAnimation } from "react-type-animation";
import { ImGithub, ImInstagram, ImLinkedin, ImYahoo2 } from "react-icons/im";
import Skills from "components/Skills";
import Projects from "components/components/Projects";
import Footer from "components/Footer";
import { useRef } from "react";
import container from "styles/Mobile.module.css";
import Image from 'next/image'
import namy from 'styles/image.module.css'

export default function MobileView() {
  const btnStyle = {
    
    color: "white",
    transform:"translateY(7rem) translateX(0rem)",
    ":hover": {
      filter:"blur(1px)",
      bg:'black'
    }
    
  };
  const code = {
    transform:'translateX(0rem)'
  }

  const focusRef = useRef();
  const projectRef = useRef();
  return (
    <>
      <Container
        maxW={{ lg: "lg", md: "md", base: "5xl" }}
        h={{ base: "40rem", lg: "30rem" }}
        className={container.img}
        p={{ lg: "20px", md: "80px", base: "20px" }}
        pt="5rem"
        mr={{ base: "6px" }}
      >
        <Container mt="10px">
          <HStack>
            <IconButton bg="white" shadow="md" icon={<ImGithub />} />
            <IconButton bg="white" shadow="md" icon={<ImInstagram />} />
            <IconButton bg="white" shadow="md" icon={<ImYahoo2 />} />
            <IconButton bg="white" shadow="md" icon={<ImLinkedin />} />
          </HStack>
        </Container>
        <SimpleGrid>
          <Heading
            color="white"
            fontSize={{ base: "20px" }}
            w={{ base: "18rem" }}
          >
            My name is Emmanuel
          </Heading>
          {/* <Code> */}

          <TypeAnimation
            sequence={[
              "I am a Python Dev",
              2000,
              "I am a Software Dev",
              2000,
              "I am a Next JS Dev",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: "18px", color: "white" }}
          />
          {/* </Code> */}
          <Box maxW="md">
            <Text align="justify" color="white">
              I am a Web developer and mobile App developer with extensive
              experience for over 3years in project making.My expertise is to
              create and design Websites and Mobile Apps using well known
              frameworks and languages.
            </Text>
          </Box>

          <Box
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="bottom"
            className={container.hero}
            py="50px"
          >
            
            <Stack
              direction={{ base: "row", md: "row", lg: "row" }}
              overscrollBehavior="none"
              left={{ base: "10rem", md: "8rem", lg: "12rem" }}
            >
              <Button
                onClick={() => {
                  focusRef.current.gotoFooter();
                }}
                sx={btnStyle}
                w={{ base: "9rem" }}
                variant="outline"
              >
                Hire me
              </Button>
              <Tooltip label="my projects">
                <Button
                  onClick={() => {
                    projectRef.current.gotoProjects();
                  }}
                  w={{ base: "9rem" }}
                  sx={btnStyle}
                  variant="outline"
                >
                  My works
                </Button>
              </Tooltip>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      <Skills />
      <Projects ref={projectRef} />
      <Footer ref={focusRef} />
    </>
  );
}
