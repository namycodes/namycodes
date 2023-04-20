import {
  Grid,
  GridItem,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Code,
  Button,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import svg from "public/img/namycool.svg";
import Image from "next/image";
import bg from "public/img/keyboard.jpg";
import { TypeAnimation } from "react-type-animation";
import { ImGithub, ImInstagram, ImLinkedin, ImYahoo2 } from "react-icons/im";
import Skills from "./Skills";
import Projects from "components/components/Projects";
import Footer from "./Footer";
import { useRef, useContext } from "react";
import container from "styles/Mobile.module.css";
import MobileView from "components/mobile";
import { homeContext } from "components/pages";
import namy from 'styles/image.module.css'
import Link from "next/link";
export default function Home() {
  const hireBtn = {
    color: "white",
    ":hover": {
      color: "white",
      bg: "pink.400",
    },
  };

  const focusRef = useRef();
  const projectRef = useRef();
  return (
    <>
      <Box>
        <Grid
          templateColumns="repeat(6,1fr)"
          className={container.img}
          align="center"
        >
          <GridItem colSpan={4}>
            <Box position="relative" top="12rem">
              <VStack>
                <Container size="xl">
                  <Heading color="white">My name is Emmanuel</Heading>
                  {/* <Code> */}{" "}
                  <TypeAnimation
                    sequence={[
                      "I am a Python Developer",
                      2000,
                      "I am a Software Developer",
                      2000,
                      "I am a Full Stack Next JS Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    style={{
                      fontSize: "18px",
                      color: "white",
                      backgroundColor: "none",
                    }}
                  />
                  {/* </Code> */}
                  <Box maxW="md">
                    <Text align="justify" color="white">
                      I am a Web developer and mobile App developer with
                      extensive experience for over 3years in project making.My
                      expertise is to create and design Websites and Mobile Apps
                      using well known frameworks and languages.
                    </Text>
                  </Box>
                  <Stack
                    direction="row"
                    py="10px"
                    position="relative"
                    left="2rem"
                  >
                    <Button
                      onClick={() => {
                        focusRef.current.gotoFooter();
                      }}
                      variant="outline"
                      sx={hireBtn}
                    >
                      Hire me
                    </Button>
                    <Button
                      onClick={() => {
                        projectRef.current.gotoProjects();
                      }}
                      variant="outline"
                      sx={hireBtn}
                    >
                      My works
                    </Button>
                  </Stack>
                </Container>
              </VStack>
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box
              p="30px"
              borderTopLeftRadius="10rem"
              borderBottomLeftRadius="10rem"
              bg="white"
              h="35rem"
            >
              <Image src={svg} right="50px" position="relative" alt="svg" />

              <Container mt="10px">
                <HStack>
                  <IconButton bg="white" shadow="md" icon={<ImGithub />} />
                  <IconButton bg="white" shadow="md" icon={<ImInstagram />} />
                  <IconButton bg="white" shadow="md" icon={<ImYahoo2 />} />
                  <IconButton bg="white" shadow="md" icon={<ImLinkedin />} />
                </HStack>
              </Container>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Skills />
      <Projects ref={projectRef} />
      <Footer ref={focusRef} />
    </>
  );
}
