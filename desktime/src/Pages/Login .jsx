import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container,
  } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import { Link as RouterLink,Navigate,useNavigate } from "react-router-dom";
import { useState,useContext, useEffect } from "react";
import {AuthContext} from '../Context/AuthContext';
import Navbar from "../Components/Navbar";

  
  export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tok, setTok] = useState("");
  const {newState, login, logout} = useContext(AuthContext);
  const [status, setStatus] = useState(false)
  const navigate = useNavigate();

  const handleSubmit=((e)=>{
    e.preventDefault();
    setStatus(true);
    getToken();
  });

  const getToken=()=>{

    const obj={
      email:email,
      password:password
    }

    return fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    }).then((res)=>res.json())
    .then((res)=>{
      setTok(res.token)
      login(res.token)})
    .catch((error)=>{
      console.log("error",error)
    })

  }
 console.log(email,password) 
 console.log(tok)
 console.log(newState.isAuth)

 if(newState.isAuth && tok){
  return <Navigate to="/main"></Navigate>
}

    return (
      <>
        <Navbar/>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to DivineTime</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            
            boxShadow={'lg'}
            p={8}
            as={"form"}
            onSubmit={handleSubmit}
            >
            <Stack spacing={4}>
              <FormControl id="email" >
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                placeholder='EMAIL'
                name="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                placeholder='PASSWORD'
                name="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                type="submit"
                  bg={'#4ea819'}
                  color={'white'}
                  _hover={{
                    bg: '#447c28',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        
      </Flex>
      <Footer/>
      </>
    );
  }