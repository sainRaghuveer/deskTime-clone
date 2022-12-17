import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as RouterLink,Navigate,useNavigate } from "react-router-dom";
import {useContext, useEffect } from "react";
import {AuthContext} from '../Context/AuthContext';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar"
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
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
        console.log(res)
        setTok(res.token)
        })
      .catch((error)=>{
        console.log("error",error)
      })
  
    }
   console.log(email,password) 
   console.log(tok)
  
   if(tok){
    return <Navigate to="/login"></Navigate>
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up for a FREE DivineTime trial
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
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
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" 
                    
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" 
                    
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                placeholder='EMAIL'
                name="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                  placeholder='PASSWORD'
                  name="password" 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouterLink to="/login" color={'blue.400'}>Login</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
      </>
    );
  }