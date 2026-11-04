import { Box, Text } from "@chakra-ui/react";

function Map() {
  return (
    <Box
      as="section"
      aria-label="Map"
      flex="1"
      minH={{ base: "60dvh", md: "auto" }}
      bg="graphite"
      position="relative"
    >
      {/* The real map (Leaflet) replaces this placeholder later */}
      <Text
        position="absolute"
        top="2"
        left="50%"
        transform="translateX(-50%)"
        fontSize="xs"
        color="whiteAlpha.800"
      >
        Map
      </Text>
    </Box>
  );
}

export default Map;
