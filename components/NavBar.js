import {
  Box,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  Button,
  Link,
  Avatar,
} from "@chakra-ui/react";

import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";
import avatarLogo from 'public/img/man45.jpg'
import Image from 'next/image'
import NavMobile from "./NavMobile";
import namy from "styles/image.module.css";
import {useState} from 'react'
export default function NavBar() {
  const [isLagerThan768] = useMediaQuery("(min-width: 768px)");
  const [large,setLarge] = useState(false)
  const growImage = () => {
    setLarge(true)
  }

  const gotoFooter=(e)=>{
    e.preventDefault()
    window.addEventListener('click', () => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      })
    })

    window.removeEventListener('click',() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      })
    })
  }

  return (
    <>
      {isLagerThan768 ? (
        <Flex justify="space-evenly" shadow="md" align="center" p="1.2em">
          <Box>
            <Image
              onClick={growImage}
              src={avatarLogo}
              className={namy.namy}
              alt="namycodes"
            />
          </Box>
          <Heading as="h4">
            <TypeAnimation
              sequence={["@namycodes", 1000, "@Emmanuel", 2000]}
              repeat={Infinity}
              speed={50}
              style={{ fontSize: "1em"}}
            />
          </Heading>
          <Spacer />

          <Box className="draw">
            <Button colorScheme="white" color="black" shadow="md">
              <Link>
                <HiOutlineHome />
              </Link>
            </Button>
            <Button
              onClick={gotoFooter}
              colorScheme="white"
              shadow="md"
              color="black"
            >
              <Link color="black">
                <HiOutlineUser />
              </Link>
            </Button>
            <Button colorScheme="white" color="black" shadow="md">
              <Link>
                <HiOutlineLightBulb />
              </Link>
            </Button>
          </Box>
        </Flex>
      ) : (
        <NavMobile />
      )}
    </>
  );
}
