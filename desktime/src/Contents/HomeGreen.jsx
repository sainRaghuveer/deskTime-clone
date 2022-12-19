
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Input,
  HStack,
} from '@chakra-ui/react';

export default function HomeGreen() {
  return (
    <>

      <Container maxW={'9xl'} bg={"#4ea819"} >
        <Stack
          as={Box}
          textAlign={'center'}
          margin={"auto"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading color={"white"} w={{base:'100%',md:"45%"}} margin={"auto"}>
           Want to get the most out of your time?
           Try DeskTime for free!
          </Heading>
          
          <Stack margin={"auto"}>
            <HStack margin={"auto"}>
            <Input w={"60%"} placeholder={"Your Work Email"} backgroundColor={"white"}/>
            <Button w={"60%"} color={"white"} bg={"#4ea819"} border={"1px solid white"}>START FREE TRIAL</Button>
            </HStack>
            {/* <Text fontSize={"15px"} color={"white"} w={{base:'100%',md:"45%"}} margin={"auto"}>
          Try free for 14 days. No credit card required.
          By signing up, you agree to our terms and privacy policy.
          </Text> */}
          </Stack>
          
          
          
        </Stack>
      </Container>
    </>
  );
}
