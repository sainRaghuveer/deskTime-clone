import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Container,HStack,Stack,Text,ListIcon,ListItem, List, color, Checkbox } from "@chakra-ui/react";
import {AiFillCheckCircle} from "react-icons/ai"
import { FiCircle } from "react-icons/fi";

const ProductiveGraph=()=>{

    return(
        
        <Container
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"170px"}
            backgroundColor={"#ffffff"}
            >
                <Text color={"gray"} textAlign={"left"}>PRODUCTIVE GRAPH</Text>
            </Box>
            
        </Container>
    
    )
}

const ProductiveApp=()=>{

    return(
        
        <Container
        marginTop={"20px"}
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#5fb92a"}
            >
                <Text color={"white"} textAlign={"left"}>PRODUCTIVE APPS</Text>
            </Box>
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ffffff"}
            >
                <Text color={"5fb92a"}>No Data Collected</Text>
            </Box>
        </Container>
    
    )
}

const UnProductiveApp=()=>{

    return(
        
        <Container
        marginTop={"20px"}
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ff6600"}
            >
                <Text color={"white"} textAlign={"left"}>UNPRODUCTIVE APPS</Text>
            </Box>
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ffffff"}
            >
                <Text color={"5fb92a"}>No Data Collected</Text>
            </Box>
        </Container>
    
    )
}

const NeutralApp=()=>{

    return(
        
        <Container
        marginTop={"20px"}
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#999da1"}
            >
                <Text color={"white"} textAlign={"left"}>NEUTRAL APPS</Text>
            </Box>
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ffffff"}
            >
                <Text color={"5fb92a"}>No Data Collected</Text>
            </Box>
        </Container>
    
    )
}

const ProductiveCategories=()=>{

    return(
        
        <Container
        marginTop={"20px"}
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ffffff"}
            >
                <Text color={"gray"} textAlign={"left"}>CATEGORIES</Text>
            </Box>
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            h={"70px"}
            backgroundColor={"#ffffff"}
            >
                <Stack>
                    
                        <List>
                        <HStack>
                    <ListItem>
                    <ListIcon color={"#1b3a7a"} as={ CheckCircleIcon} />
                    E-mail
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="#e21965" />
                    Social Media
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="#079cbd" />
                    Office apps
                    </ListItem>
                    <ListItem>
                    <ListIcon as={ AiFillCheckCircle} color="#f4ac1c" />
                    Entertainment
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="#97429d" />
                    News
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="#8990aa" />
                    Undefined
                    </ListItem>
                    </HStack>
                    </List>
                    
                </Stack>
            </Box>
            
        </Container>
    
    )
}

export {ProductiveApp,UnProductiveApp,NeutralApp,ProductiveGraph,ProductiveCategories};