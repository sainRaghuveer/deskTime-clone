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
    Box,
    HStack,

    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import {BiTime} from "react-icons/bi"
import {SiWheniwork} from "react-icons/si"
import {AiOutlineTool} from "react-icons/ai"
import {ImOffice} from "react-icons/im"
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function HomeContent() {
    return (
      <Container maxW={'6xl'} py={12} backgroundColor={"#eceded"}>
        <Heading marginTop={"20px"} margin={"auto"} width={"70%"} textAlign={"center"}>A universal platform for running anything from small businesses to large enterprises</Heading>
        <Text marginBottom={"20px"} margin={"auto"} width={"60%"} textAlign={"center"}>From a powerful time tracker to project management, human resource planning, and running an office. Everything is fully customizable and can be turned on and off for the whole company or specific users.</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop={"30px"}>
          <Stack spacing={4}>
          <Box marginTop={"40px"}  columns={{ base: 1, md: 2 }} lineHeight={"30px"} textAlign={"left"}>
                <Box >
                <HStack>
                <BiTime color={'green'}/>
                <Heading fontSize={"19px"}> No more manual time trackers</Heading>
                </HStack>
                  <Text fontSize={"16px"} marginLeft={"25px"}>
                  Fully automatic start and end times, no manual entry, and no human error – the automatic time tracker starts up as soon as you open the computer and stops when you close it.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                    <SiWheniwork color={'green'}/>
                <Heading fontSize={"19px"}>Oversee work progress</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                With URL and document title tracking it's easy to always be informed about your team's overall progress and habits during work hours.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                    <AiOutlineTool color={'green'}/>
                <Heading fontSize={"19px"}>Optimize your resources</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                Estimate project costs, assign hourly rates, issue invoices, and control expenses. Project management is easy when you have a birdseye view of all ongoing processes.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                  <ImOffice color={'green'}/>
                <Heading fontSize={"19px"}>Run your office smoothly</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                DeskTime isn't just a time tracker. You can assign shifts and oversee absences, stay informed about remote workers and run a hybrid office all on one platform.
                  </Text>
                </Box>
               </Box>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://desktime.com/static/web/new-homepage/universal-platform/universal-platform.webp'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }