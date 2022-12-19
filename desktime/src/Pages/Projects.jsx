import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Heading,
  Input,
  Grid,
  GridItem,
  Button,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {FaDesktop, FaPlay, FaStop} from "react-icons/fa"
import {GrProjects} from "react-icons/gr"
import {AiFillSchedule} from "react-icons/ai"
import {TbBrandBooking} from "react-icons/tb"
import {SlCalender} from "react-icons/sl"
import {GoReport} from "react-icons/go"
import {FaFileExport} from "react-icons/fa"
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import SkeletonContent from '../Components/Skeleton';
import MainPageFooter from '../Components/MainPageFooter';
import Cards from '../Components/Cards';
import { useEffect, useRef, useState } from "react";
import {ProductiveApp,UnProductiveApp,NeutralApp,ProductiveGraph,ProductiveCategories} from '../Contents/MainProductiveApp';
import {GrPowerReset} from "react-icons/gr"
import MainDrawer from '../Components/MainDrawer';
import {Link as RouterLink} from "react-router-dom"
import { useReducer } from "react";


const LinkItems = [
  { name: <RouterLink to="/main"> 'My DivineTime'</RouterLink>, icon: FaDesktop },
  { name: 'Projects', icon: GrProjects },
  { name: 'Work Schedules', icon: AiFillSchedule },
  { name: 'Booking', icon: TbBrandBooking },
  { name: 'Absence Calendar', icon: SlCalender },
  { name: 'Reports', icon: GoReport },
  { name: 'Exports', icon: FaFileExport },
  { name: 'Settings', icon: FiSettings }
];

export default function Projects({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      
    </Box>
    {/* <SkeletonContent/> */}
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
    bg={"#262c30"}
      transition="3s ease"
      color={"gray"}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Image src="https://i.ibb.co/0t5G6JR/Untitled-design-removebg-preview.png" alt="Untitled-design-removebg-preview" border="0" boxSize={"40px"}/>
        <Text color={"white"} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        DivineTime
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <>
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
    
    </>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <>
    
    <Flex
    position={"-webkit-sticky"} pos={"sticky"} top={0} 
    zIndex={"100"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
        
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      
    <Image src="https://i.ibb.co/0t5G6JR/Untitled-design-removebg-preview.png" alt="Untitled-design-removebg-preview" border="0" boxSize={"40px"}/>
        <Text color={"white"} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        DivineTime
        </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
            <Box> 
                <Input placeholder='Search'/>
            </Box>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/112657812?v=4'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Raghuveer Sain</Text>
                  <Text fontSize="xs" color="gray.600">
                    Raghuveer Sain Company
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
    <Grid
    templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(3, 1fr)","2xl":"repeat(4, 1fr)"}} gap={2}
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    backgroundImage={"https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"}
    backgroundRepeat="none"
    >{
        data?.map((el)=>{
            return(
                <GridItem key={el.title}>
                    {<Cards
                    title={el.title}
                    time={el.time}
                    unit={el.unit}
                    details={el.details}
                    />}
                </GridItem>
            )
        })
    }
    </Grid>
    <ProductiveGraph/>
    {/* <ProductiveApp/>
    <UnProductiveApp/>
    <NeutralApp/>
    <ProductiveCategories/> */}
    <MainPageFooter/>
    <Box
    border={"1px solid black"}
    borderRadius={"10px"}
    w={"170px"}
    height={"110px"}
    bg={"white"}
    pos={"fixed"}
    left={"30px"}
    bottom={"60px"}
    textAlign={"center"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    >
        <List>
            <ListItem>
                {/* <ListIcon color={"#5fb92a"} as={FaPlay}></ListIcon> */}
                <Timer />
                <Todo/>
            </ListItem>
        </List>
    </Box>
    </>
  );
};


const data=[
    {title:"ARRIVAL TIME",time:"-",unit:"",details:"MORE DETAILS"},
    {title:"LEFT TIME",time:"-",unit:"",details:"MORE DETAILS"},
    {title:"PRODUCTIVE TIME",time:0,unit:"s",details:"MORE DETAILS"},
    {title:"DESK TIME",time:0,unit:"s",details:"MORE DETAILS"},
]


const fixTimeString = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  const formTimeToString = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 60 / 60) % 60;
  
    const outputString = `${fixTimeString(hours)}:${fixTimeString(
      minutes
    )}:${fixTimeString(seconds)}`;
    return outputString;
  };

  const Timer = () => {
    const [timer, setTimer] = useState(0);
    let ref = useRef(null);
  
    useEffect(() => {
      const cleanup = () => {
        stopTimer();
      };
      return cleanup;
    }, []);
  
    const startTimer = () => {
        <MainDrawer/>

      if (ref.current !== null) {
        return;
      }
      ref.current = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= -1) {
            clearInterval(ref.current);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    };
    const stopTimer = () => {
      //timer should stop
      clearInterval(ref.current);
      ref.current = null;
    };
  
    const resetTimer = () => {
      console.log("name");
      //stop the timer
      stopTimer();
      //reset it back to default value or 0
      setTimer(0);
    };
  
    return (
      <div color={'white'}>
        <h3 color={'white'}>{formTimeToString(timer)}</h3>
        <Button  as={FaPlay} onClick={startTimer} ></Button>
        <Button as={FaStop} onClick={stopTimer}>STOP</Button>
        <Button as={GrPowerReset} onClick={resetTimer}>RESET</Button>
      </div>
    );
  };

export {Timer}


// import AddTodo from "./AddTodo";

const addTodo = (payload) => ({
  type: "ADD_TODO",
  payload
});

const deleteTodo = (payload) => ({
  type: "DELETE_TODO",
  payload
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

function Todo() {
  //todo list
  const [state, dispatch] = useReducer(reducer, []);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Math.random() + Date.now() + text,
      title: text,
      status: false
    };
    //
    dispatch(addTodo(newTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <MainDrawer handleAddTodo={handleAddTodo} />
      <div>
        {state.map((todo) => (
          <div>
            <li key={todo.id}> {todo.title}</li>
            <button onClick={() => handleDelete(todo.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}

export  {Todo};
