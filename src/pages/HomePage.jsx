// src/pages/HomePage.jsx
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box p="10" minH="100dvh" bg="white">
      <Box
        minH="calc(100dvh - 5rem)"
        bgImage={{
          base: "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('/hero-960.webp')",
          md: "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('/hero-1920.webp')",
        }}
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="6"
      >
        <VStack gap="6" maxW="3xl" textAlign="center">
          <Heading
            as="h1"
            color="gray.100"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.3"
          >
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </Heading>

          <Text color="gray.300" fontSize={{ base: "md", md: "lg" }}>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default HomePage;
