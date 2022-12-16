import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Image
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {BsApple} from "react-icons/bs"
import {DiLinux} from "react-icons/di"
import {TfiMicrosoftAlt} from "react-icons/tfi"

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function HomeInfo() {
  return (
    <Box py={12} maxW={"6xl"} margin={"auto"} textAlign={'left'}>
      <VStack spacing={2} textAlign="center">
        <Heading width={"70%"} as="h1" fontSize="4xl">
        A single time tracker for desktops and mobile phones
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Whether in the office or on the go – use DivineTime to keep track of your and your team's time.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12} width={"100%"}>
            <Image src='https://desktime.com/static/web/new-homepage/desktop/desktop.webp'/>
            <Text fontWeight="500" fontSize="26px" textAlign={"left"} >
            DivineTime for desktops
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
            <ListItem>
                <HStack marginBottom={"20px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                <DiLinux/>
                <BsApple/>
                <TfiMicrosoftAlt/>
                </HStack>
              Requires download and installation
                </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Fully automated time tracker
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
                App, URL & Document title tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Project and task tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Screenshots 
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                
                Idle and Private time
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full"variant="outline">
                LEARN MORE
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
                <Image src='https://desktime.com/static/web/new-homepage/mobile/mobile.webp'/>
              <Text fontWeight="500" fontSize="2xl">
              DivineTime for mobile phones
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
              <ListItem>
              <HStack marginBottom={"20px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                <DiLinux/>
                <BsApple/>
                <TfiMicrosoftAlt/>
                </HStack>
              Requires download and installation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Manual time tracker
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Workday overview
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Project and task tracking
                </ListItem>
                
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" variant="outline">
                  LEARN MORE
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Image src='https://desktime.com/static/web/new-homepage/webtimer/webtimer.webp'/>
            <Text fontWeight="500" fontSize="2xl">
            Web time tracker
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                Supported on all popular browsers
              </ListItem>
              <ListItem color={"#4ea819"}>
              No software installation necessary
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Manual time tracker
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Workday overview
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Project and task tracking
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" variant="outline">
                LEARN MORE
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}