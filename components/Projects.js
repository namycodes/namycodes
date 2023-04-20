import {
  SimpleGrid,
  CardBody,
  CardFooter,
  Divider,
  Card,
  Heading,
  VStack,
  // Image,
  HStack,
  Code,
  LinkBox,
  
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle,useRef,useEffect,useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import image from 'styles/image.module.css'
const Projects = forwardRef((props, ref) => {
  
  const projectRef = useRef()
  
  useImperativeHandle(ref, () => ({
    gotoProjects() {
      window.addEventListener('click', () => {
        window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior:'smooth'
    })
      })

      window.removeEventListener('click', () => {
        window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior:'smooth'
    })
      })
      
    }
    
  }))
  const [projects,setProjects] = useState([])

  useEffect(()=>{
    async function getData() {
      const response = await fetch('../api/projects')
      const data = await response.json()
      setProjects(data)
    }
    getData()
  },[])

  return (
    <>
      <Heading ref={projectRef} py="12px" px={{ lg: "10rem", sm: "3rem", base: "2rem" }}>
        Projects
        <Divider />
      </Heading>

      <SimpleGrid
        px={{ lg: "10rem", md: "3rem", base: "2rem" }}
        columns={{ lg: "4", md: "2", base: "1" }}
        spacing={{ lg: 10, base: 6 }}
        minChildWidth="250px"
      >
        {
          projects.map((project) => {
            return (
              <Card
                w={{lg:"15rem",base:'`18rem',md:'16rem'}}
                h={{ base: "16rem", lg: "15rem" }}
                key={project.id}
                
              >
                <Image
                  src={require(`../public/img/${project.image}`)}
                  className={image.img}
                  alt="image"
                />
                <CardBody pb="2rem" mb="2rem">
                  <h3>{project.name}:</h3>
                  <Divider />
                  <Link className={image.link} href={project.link}>visit site</Link>
                </CardBody>

               
              </Card>
            );
          })
        }
      </SimpleGrid>
    </>
  );
})



Projects.displayName = 'Projects'
export default Projects