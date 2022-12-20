import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Container,HStack,Stack,Text,ListIcon,ListItem, List, color, Checkbox,Button, Heading } from "@chakra-ui/react";
import {AiFillCheckCircle} from "react-icons/ai"
import { FiCircle } from "react-icons/fi";
import { useReducer } from "react";
import MainDrawer from "../Components/MainDrawer";
import {AiFillDelete} from "react-icons/ai"


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

const ProjectProductiveGraph=()=>{

       //todo list
       const [state, dispatch] = useReducer(reducer, []);
    
       const handleAddTodo = (task,project,des) => {
         const newTodo = {
           id: Math.random() + Date.now() + task,
           title: task,
           project:project,
           description:des,
           status: false
         };
         //
         dispatch(addTodo(newTodo));
       };
     
       const handleDelete = (id) => {
         dispatch(deleteTodo(id));
       };
     console.log(state)

    return(
        <>
        <MainDrawer handleAddTodo={handleAddTodo} />
        <Container
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <Box
            w={{base:"1xl",md:"1xl",xl:"5xl","2xl":"7xl"}}
            backgroundColor={"#ffffff"}
            >
                <Text color={"gray"} textAlign={"left"}>PROJECTS</Text>
                <Box width={"1xl"} display={"flex"} flexDirection={"left"} textAlign={"center"}>
                <Heading  height={"50px"} fontSize={"20px"}>Total Projects:- {state.length}</Heading>
                </Box>
                {state.map((todo) => (
                    <Box>
                        
                        <List key={todo.id} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} bg={"#e7ecf1"} marginTop={"5px"}>
                        <ListItem>{todo.project}</ListItem>
                        <ListItem>{todo.title}</ListItem>
                        <ListItem>{todo.description}</ListItem>
                        <ListIcon bg={"#e7ecf1"} onClick={() => handleDelete(todo.id)} as={AiFillDelete}></ListIcon>
                        </List>
                        <br/>
                        </Box>
                    ))} 
            </Box>
            
        </Container>
        </>
    )
}

export default ProjectProductiveGraph;

  