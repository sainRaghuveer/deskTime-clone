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
    useDisclosure
  } from '@chakra-ui/react'

 
import {React,useRef} from "react"
import { AddIcon } from '@chakra-ui/icons'
import { Timer } from '../Pages/MainPage'
  function MainDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
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
                  <FormLabel htmlFor='username'>Project</FormLabel>
                  <Input
                    // ref={firstField}
                    id='project'
                    placeholder='Project'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='username'>Task</FormLabel>
                  <Input
                    // ref={firstField}
                    id='task'
                    placeholder='Task'
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
                    <option value='kola'>Kola Tioluwani</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px' justifyContent={"space-between"}>
              <Button bg={"red"} variant='outline' mr={3} onClick={onClose}>
                DELETE
              </Button>
              <Button colorScheme='blue' bg={"#4ea819"}>UPDATE</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MainDrawer;