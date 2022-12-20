import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    InputLeftAddon,
    Select,
    Textarea,
    useDisclosure,
    InputLabel
  } from '@chakra-ui/react'

  import { useState } from "react";
import {React,useRef} from "react"
import { AddIcon } from '@chakra-ui/icons'
import { Timer } from '../Pages/MainPage'
  function MainDrawer({ handleAddTodo }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [project, setProject] = useState("");
    const [task, setTask] = useState("");
    const [des, setDes] = useState("");


    console.log(project)
    return (
      <>
        <Button leftIcon={<AddIcon />}  onClick={onOpen}>
          
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
        //   initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Web Timer
            </DrawerHeader>
            <Box margin={"auto"} textAlign={"center"}>
            {<Timer/>}
            </Box>
            <DrawerBody>
              <Stack spacing='24px'>
                {/* <Box>
                  <FormLabel htmlFor='username'>Description</FormLabel>
                  <Input
                    // ref={firstField}
                    id='description'
                    placeholder='Description'
                  />
                </Box> */}
                <Box>
                  
                  <Input
                    // ref={firstField}
                    color={"black"}
                    id='project'
                    placeholder='Project'
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='username'>Task</FormLabel>
                  <Input
                    // ref={firstField}
                    id='task'
                    placeholder='Task'
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </Box>
  
                {/* <Box>
                  <FormLabel htmlFor='url'>Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type='url'
                      id='url'
                      placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box> */}
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                  <Select id='owner' defaultValue='Raghuveer Sain'>
                    <option value='segun'>Raghuveer Sain</option>
                    <option value='kola'>Bitu</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' as={"input"}
                  placeholder='Dscription'
                  type="text"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px' justifyContent={"space-between"}>
              <Button bg={"red"} variant='outline' mr={3} onClick={onClose}>
                DELETE
              </Button>
              <Button colorScheme='blue' bg={"#4ea819"} onClick={() => handleAddTodo(project,task,des)}>UPDATE</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MainDrawer;



// const AddTodo = ({ handleAddTodo }) => {
// //   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         placeholder="ADD TODO"
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={() => handleAddTodo(text)}>ADD TODO</button>
//     </div>
//   );
// };

// export {AddTodo};
