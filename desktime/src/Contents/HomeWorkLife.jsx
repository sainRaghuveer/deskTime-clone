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
  
  export default function HomeWorkLife() {
    return (
      <Container maxW={'6xl'} py={12} marginTop={"-100px"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop={"30px"}>
        <Flex marginTop={"100px"}>
            <Image
            w={"500px"}
            h={"600px"}
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://desktime.com/static/web/new-homepage/seamless-workflow/seamless-workflow.webp'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
          <Box marginTop={"40px"}  columns={{ base: 1, md: 2 }} lineHeight={"30px"} textAlign={"left"}>
            <Heading>A seamless workflow and healthy work-life balance for every employee</Heading>
                <Box >
                <HStack>
                <BiTime color={'green'}/>
                <Heading fontSize={"19px"}>Flexible schedule</Heading>
                </HStack>
                  <Text fontSize={"16px"} marginLeft={"25px"}>
                  Time tracking is proof-of-work and DeskTime's time tracker gives you just that – you can plan your schedule independently, while your manager can simply follow your progress no matter where you are and when you choose to work.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                    <SiWheniwork color={'green'}/>
                <Heading fontSize={"19px"}>Regular break reminders</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                Our time tracker uses the Pomodoro timer that will keep a cautious eye on your workload and remind you to take regular breaks so you don't lose focus all the while maintaining healthy habits and mental well-being.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                    <AiOutlineTool color={'green'}/>
                <Heading fontSize={"19px"}>Private time</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                DeskTime's Private time feature disables the website and time tracker for when you have to take care of non-work-related tasks during office hours. Employees can feel safe knowing their privacy is protected.
                  </Text>
                </Box>
                <Box marginTop={"20px"}>
                  <HStack>
                  <ImOffice color={'green'}/>
                <Heading fontSize={"19px"}>No more unbilled hours</Heading>
                </HStack>
                <Text fontSize={"16px"} marginLeft={"25px"}>
                Employee time is pure gold when it comes to resource planning. DeskTime's time tracker even lets you add time spent offline like in meetings, brainstorms, or on work calls so no billable hours go unnoticed.
                  </Text>
                </Box>
               </Box>
               <Text>All the features can be turned on and off to suit eveyone's needs</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }