// src/pages/HomePage.jsx
import { Box, VStack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router";
import NavigationBar from "../components/NavigationBar";

function HomePage() {
  return (
    <Box
      as="main"
      position="relative"
      minH="100dvh"
      display="flex"
      flexDirection="column"
      bgImage={{
        base: "url('/hero-960.webp')",
        md: "url('/hero-1920.webp')",
      }}
      bgSize="cover"
      bgPosition="center"
      // Flat dark scrim (no gradient) so white text stays readable on the photo
      _before={{
        content: '""',
        position: "absolute",
        inset: "0",
        bg: "rgba(23, 26, 32, 0.7)",
      }}
    >
      {/* zIndex 2 keeps the open mobile menu above the hero content */}
      <Box position="relative" zIndex="2">
        <NavigationBar />
      </Box>

      <Flex
        position="relative"
        zIndex="1"
        flex="1"
        align="center"
        justify="center"
        px="6"
      >
        <VStack gap="5" maxW="2xl" textAlign="center">
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: "28px", md: "40px" }}
            fontWeight="500"
            lineHeight="1.2"
          >
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </Heading>

          <Text color="whiteAlpha.800" fontSize="md" lineHeight="1.5">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </Text>

          <Button
            asChild
            mt="3"
            w="200px"
            h="40px"
            bg="brand.500"
            color="carbon"
            fontSize="sm"
            fontWeight="500"
            rounded="control"
            transition="background-color {durations.tesla}"
            _hover={{ bg: "brand.600" }}
          >
            <Link to="/app">Start tracking now</Link>
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}

export default HomePage;
