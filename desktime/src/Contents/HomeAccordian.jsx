import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Heading,
    
  } from '@chakra-ui/react'

const HomeAccordian=()=>{
    return(
        <Container maxW={"5xl"}>
        <Box marginTop={"50px"} marginBottom={"50px"} width={"100%"}>
            <Heading w={"70%"} margin={"auto"} textAlign={'center'}>Things worth knowing about using a time tracker</Heading>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem marginTop={"20px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How does using a time tracker improve productivity?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    This self-analysis will motivate both you and your employees to do better and avoid any unnecessary and unproductive actions like those well-known “fast and easy” 5-minute jobs many of us are often asked to do. Employees who track time can note how much these extra jobs actually take up their day and be able to make better decisions on whether it's worth interrupting their workflow.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem marginTop={"20px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Can implementing DeskTime prevent burnout?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes! Using a time tracker can help highlight overachievers and spot team members who are struggling or might need some extra help. This is a great way to catch and prevent burnout, as well as rethink resource distribution.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem marginTop={"20px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Is my team's privacy safe when using a time tracker?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    First thing’s first – DeskTime is not an employee monitoring or spy tool, but it’s no secret that some might use this kind of software in ways that aren’t employee-friendly. Managers have the right to know how their employees get the job done, but it's imperative to also value your team's time and privacy. That's why DeskTime even has a Private time feature that disables the time tracker for when you have to take care of non-work-related tasks during office hours.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem marginTop={"20px"} marginBottom={"20px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How to communicate using a time tracker with your team?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You have to remember that using time trackers is a two-way street of communication, so it’s best to lead by example. Yes, it gives managers an overview of what their employees are doing during the workday, but it’s also a tool to help employees show their progress and ask for help if needed. Be transparent and honest about implementing a time tracker and take the time to show its benefits. For example, DeskTime lets you set break reminders, encourage private time, and eliminate overworking so your team members feel rested, valued, and safe.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>
</Container>
    )
}

export default HomeAccordian;