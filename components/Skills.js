import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Card,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  ListItem,
  List,
  Divider,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import bg from 'public/img/skillsBg.svg'

export default function Skills() {
    const [isLagerThan680] = useMediaQuery('(min-width:680px)')
    let direction = ''
  return (
      <>
          <Box bgImage={bg} bgRepeat="no-repeat" bgPosition="right" bgAttachment="inherit">
      <Container mt={{md:'8px',sm:'11px',lg: '13px'}} mb="13px" maxW="4xl" py="20px" px="35px">
        <Heading>skills</Heading>
        <Divider />
              {isLagerThan680 ? (direction = "row"): (direction = "column")}
              
              <Stack direction={direction} py="20px">
            <Box>
              <Card w={{base:'16rem',md:'22rem',lg: 'sm'}} shadow="lg">
                <CardHeader>
                  <Text>Web Dev</Text>
                </CardHeader>

                <CardBody>
                  <Box>
                    <List>
                      <ListItem>HTML & CSS</ListItem>
                      {/* <ListItem>Vanilla JavaScript</ListItem> */}
                      <ListItem>TailWind CSS</ListItem>
                      <ListItem>React JS</ListItem>
                      <ListItem>Next JS</ListItem>
                      <ListItem>Node JS</ListItem>
                      <ListItem>Mongo DB</ListItem>
                      {/* <ListItem>Django</ListItem> */}
                    </List>
                  </Box>
                </CardBody>
                <Divider />
                <CardFooter>UI: Chakra UI</CardFooter>
              </Card>
            </Box>

            <Box>
              <Card w={{base:'16rem',md:'22rem',lg: 'sm'}} shadow="lg">
                <CardHeader>
                  <Text>Mobile Dev</Text>
                </CardHeader>

                <CardBody>
                  <Box>
                    <List>
                      <ListItem>Flutter</ListItem>
                      <ListItem>React Native</ListItem>
                    </List>
                  </Box>
                </CardBody>
                <Divider />
                <CardFooter>other skills: C++,Python</CardFooter>
              </Card>
            </Box>
          </Stack>
              </Container>
              </Box>
    </>
  );
}
