import {
  IconButton,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Box,
  Heading,
  SimpleGrid,
  Button,
  DrawerFooter,
  useDisclosure,
  Link,
  useMediaQuery,
  Spacer,
  Flex,
} from "@chakra-ui/react";

import { TypeAnimation } from "react-type-animation";
import { HiOutlineHome, HiOutlineLightBulb, HiOutlineSquares2X2, HiOutlineUser } from "react-icons/hi2";
import avatarLogo from "public/img/man45.jpg";
import Image from "next/image";
import namy from "styles/image.module.css";
export default function NavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLagerThan768] = useMediaQuery("(min-width: 768px)");
  const gotoFooter = (e) => {
    e.preventDefault();
    window.addEventListener("click", () => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: "smooth",
      });
    });
  };
  return (
    <>
      <Flex justify="space-evenly" shadow="md" align="center" p="1.2em">
        <Box>
          <Image
            
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
            style={{ fontSize: "1em", color: "black" }}
          />
        </Heading>
        <Spacer />
        {isLagerThan768 ? (
          ""
        ) : (
          <IconButton icon={<HiOutlineSquares2X2 />} onClick={onOpen} />
        )}

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          placement="top"
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton onClick={onClose} />

            <DrawerHeader>
              <Box>
                <Heading>@namycodes</Heading>
              </Box>
            </DrawerHeader>

            <DrawerBody>
              <Box>
                <SimpleGrid gap={4}>
                  <Button colorScheme="white" color="black" shadow="md">
                    <HiOutlineHome />
                    Home
                  </Button>
                  <Button onClick={gotoFooter} colorScheme="white" shadow="md" color="black">
                    <HiOutlineUser /> Profile
                  </Button>
                  <Button colorScheme="white" color="black" shadow="md">
                    <HiOutlineLightBulb />
                    Projects
                  </Button>
                </SimpleGrid>
              </Box>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
