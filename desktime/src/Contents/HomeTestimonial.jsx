import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
  

export default class HomeTestimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Heading w={"70%"} margin={"auto"}> More than 18 000 companies worldwide trust DeskTime with their business </Heading>
        <Slider {...settings}>
          <div>
            <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                With DeskTime I am able to see how productive my employees are and how much work time they spend on work time they spend on work-related application- that's something many others time tracking software don't have.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://desktime.com/static/web/testimonial-images/toms.png'
              }
              name={'Tomes Panders'}
              title={'CEO at Setupad'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                We started using DeskTime for our whole team when we moved from office to Work From Home. DeskTime helped us to form few work from home policies for our teams to work effectively. In the very first week, we started seeing a rise in overall productivity and accountability.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://desktime.com/static/web/testimonial-images/vinay-krishna-gupta.jpeg'
              }
              name={'Vinay Krishna Gupta'}
              title={'Co-Founder & CEO at Antino Labs'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              We started using DeskTime for our whole team when we moved from office to Work From Home. DeskTime helped us to form few work from home policies for our teams to work effectively. In the very first week, we started seeing a rise in overall productivity and accountability.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://desktime.com/static/web/testimonial-images/alsam-hasib.png'
              }
              name={'Alsam Hasib'}
              title={'Managing Director at HasTech IT'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
              We started using DeskTime for our whole team when we moved from office to Work From Home. DeskTime helped us to form few work from home policies for our teams to work effectively. In the very first week, we started seeing a rise in overall productivity and accountability.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://desktime.com/static/web/testimonial-images/keshav-goyal.jpg'
              }
              name={'Keshav Goya;'}
              title={'CEO at Apporio Infolabs'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
          <div>
          <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>          
        </Stack>
      </Container>
    </Box>
          </div>
        </Slider>
      </div>
    );
  }
}


const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
    //   pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        // pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        // transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

// function WithSpeechBubbles() {
//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.700')}>
//       <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
//         <Stack spacing={0} align={'center'}>
//           <Heading>Our Clients Speak</Heading>
//           <Text>We have been working with clients around the world</Text>
//         </Stack>
//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           spacing={{ base: 10, md: 4, lg: 10 }}>
//           <Testimonial>
//             <TestimonialContent>
//               <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
//               <TestimonialText>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
//                 neque sed imperdiet nibh lectus feugiat nunc sem.
//               </TestimonialText>
//             </TestimonialContent>
//             <TestimonialAvatar
//               src={
//                 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
//               }
//               name={'Jane Cooper'}
//               title={'CEO at ABC Corporation'}
//             />
//           </Testimonial>          
//         </Stack>
//       </Container>
//     </Box>
//   );
// }