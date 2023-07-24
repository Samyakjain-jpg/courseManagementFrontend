import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/bg.png'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack direction={["column", "row"]} height="100%" justifyContent={["center", "space-between"]} alignItems='center' spacing={["16", "56"]}>
          <VStack width={"full"} alignItems={["center", "flex-end"]}>
            <Heading children="Learn form the exprert" size={"2xl"} />
            <Text children='Find Valuable Contact At Resonable Price' />
            <Link to="/courses" />
            <Button size={"lg"} colorScheme='red' >Explore Now</Button>
          </VStack>

          <Image className='vetor-graphics' boxSize={"md"} src={bg} objectFit={"contain"} />
        </Stack>
      </div>
      <Box padding={"8"} bg={"blackAlpha.800"}>
        <Heading children="OUR PARTNERS" textAlign={"center"} fontFamily="body" color={"red.500"} />
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className='container2'>
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  )
}

export default Home
