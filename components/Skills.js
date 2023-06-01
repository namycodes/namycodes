import {
  Box,
  Container,
  Heading,
  Divider,
  useMediaQuery,
  Flex,
  Text,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import bg from "public/img/skillsBg.svg";
import Image from "next/image";
import logo from "styles/logo.module.css";
import { useEffect, useState } from "react";

export default function Skills() {
  const [logos, setLogos] = useState([]);
  

  useEffect(() => {
    async function getLogos() {
      const response = await fetch("api/logos");
      const data = await response.json();
      setLogos(data);
    }
    getLogos();
  }, []);

  return (
    <>
      
      <Box
        bgImage={bg}
        bgRepeat="no-repeat"
        bgPosition="right"
        bgAttachment="inherit"
      >
        <Container
          mt={{ md: "8px", sm: "11px", lg: "13px" }}
          mb="13px"
          maxW="6xl"
          py="20px"
          pl={{lg:"4em",sm:'3em'}}
        >
          <Heading>Skill Stack</Heading>
          <Divider />
          
          <Box pt="2rem">
            <Flex wrap="wrap" rowGap="1.5rem" columnGap="1.5rem">
              {logos.map((log) => {
                return (
                  <>
                    <Box key={log.id}>
                      <Tooltip label={log.name}>
                        <Image
                          className={logo.lg}
                          src={require(`public/${log.logo}`)}
                          alt={log.name}
                        />
                      </Tooltip>
                    </Box>
                  </>
                );
              })}
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}
