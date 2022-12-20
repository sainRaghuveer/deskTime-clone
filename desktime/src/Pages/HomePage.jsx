import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
    AspectRatio,
    Input,
    Button,
    HStack,
    Grid,
    GridItem
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import {Link as RouterLink} from "react-router-dom"
import Footer from '../Components/Footer';
import HomeTestimonial from '../Contents/HomeTestimonial';
import {IoIosRocket} from "react-icons/io"
import {BsFileBarGraph} from "react-icons/bs"
import {MdTask} from "react-icons/md"
import {AiFillFire} from "react-icons/ai"
import HomeAccordian from '../Contents/HomeAccordian';
import HomeContent from '../Contents/HomeContent';
import HomeInfo from '../Contents/HomeInfo';
import HomeWorkLife from '../Contents/HomeWorkLife';
import HomeGreen from '../Contents/HomeGreen';
import Navbar from "../Components/Navbar"

  
  export default function Home() {
    return (
      <>
      <Navbar/>
      <Container maxW={'6xl'} py={12} textAlign={"left"} marginBottom={"30px"} width={"90%"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginBottom={"40px"}>
          <Stack spacing={5}>
            <Heading>The ultimate all-in-one time tracker for your business</Heading>
            <Text color={'#475056'} fontSize={'18px'}>
            A time tracker with additional workforce management features that will help you develop a high-performing team that smashes goals every time.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
                <Box>
                <Input w={"45%"} placeholder={"Your Work Email"}/>
               <RouterLink to="/signup"> <Button w={"45%"} backgroundColor={"#4ea819"} color={"white"} fontSize={"20px"}>Start Free Trial</Button></RouterLink>
                </Box>
              <Text color={'#475056'} fontSize={'18px'} lineHeight={"8px"}>Try free for 14 days. No credit card required.</Text>
              <Text color={'#475056'} fontSize={'18px'}>By signing up, you agree to our <RouterLink to="#">terms</RouterLink>  and <RouterLink to="#">privacy policy</RouterLink>.</Text>

            </Stack>
          </Stack>
          <Flex>
          <Box width={["50%","50%","100%"]}>
          <iframe w={["50%","50%","100%"]} width="560" height="315" src="https://www.youtube.com/embed/sgmDvqlSMF4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid display={"flex"} justifyContent={"center"} alignItems={"center"} width={"80%"} margin={"auto"}columns={{ base: 1, md: 2 }}>
          <Stack>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(3, 1fr)",xl:"repeat(4, 1fr)","2xl":"repeat(5, 1fr)"}} gap={6}>
              <GridItem>
          <Image src='https://desktime.com/static/web/clients/customer-sixt-logo-white.svg'></Image>
          </GridItem>
          <GridItem>
          <Image src='https://desktime.com/static/web/clients/customer-mapon-logo-white.svg'></Image>
          </GridItem>
          <GridItem>
          <Image src='https://desktime.com/static/web/clients/customer-montway-logo-white.svg'></Image>
          </GridItem>
          <GridItem>
          <Image src='https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg'></Image>
          </GridItem>
          <GridItem>
          <Image src='https://desktime.com/static/web/clients/customer-printful-logo-white.svg'></Image>
          </GridItem>
          </Grid>
          </Stack>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginBottom={"40px"}>
          <Stack spacing={5}>
            <Heading>Use time tracker software to boost productivity by 30%</Heading>
            <Text color={'#475056'} fontSize={'18px'}>
            There are numerous ways how DivineTime improves the day-to-day work for managers and employees alike. Here are just a few reasons why the DivineTime time tracker is a great choice for your team.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
               <Box marginTop={"40px"} display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gap={"50px"} columns={{ base: 1, md: 2 }} >
                <Box>
                <HStack>
                <IoIosRocket color={'green'}/>
                <Heading fontSize={"19px"}> Skyrocket effectiveness</Heading>
                </HStack>
                  <Text fontSize={"16px"}>
                  Know who's doing what and how it's going all the while eliminating distractions.
                  </Text>
                </Box>
                <Box>
                  <HStack>
                    <BsFileBarGraph color={'green'}/>
                <Heading fontSize={"19px"}>Minimize business losses</Heading>
                </HStack>
                <Text fontSize={"16px"}>
                Get precise insights into projects to determine profitability and allocate resources.
                  </Text>
                </Box>
                <Box>
                  <HStack>
                    <MdTask color={'green'}/>
                <Heading fontSize={"19px"}>Automate team management</Heading>
                </HStack>
                <Text fontSize={"16px"}>
                Organize shifts, absences, and booking-related questions all in one place.
                  </Text>
                </Box>
                <Box>
                  <HStack>
                  <AiFillFire color={'green'}/>
                <Heading fontSize={"19px"}>Avoid burnout</Heading>
                </HStack>
                <Text fontSize={"16px"}>
                Take care of your team and eliminate overworking with break reminders and private time.
                  </Text>
                </Box>
               </Box>
            </Stack>
          </Stack>
          <Flex marginLeft={"100px"}>
          <Box>
          <Image src='https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp'></Image>
          </Box>
          </Flex>
        </SimpleGrid>
        
      </Container>
      <HomeContent/>
      <HomeTestimonial/>
      <HomeWorkLife/>
      <HomeInfo/>
      <HomeAccordian/>
      <HomeGreen/>
      <Footer/>
      </>
      
    );
  }

  //https://youtu.be/sgmDvqlSMF4?list=TLGGEClHjokj1vQxNTEyMjAyMg