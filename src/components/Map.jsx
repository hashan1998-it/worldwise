import { Box, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <Box
      as="section"
      aria-label="Map"
      flex="1"
      minH={{ base: "60dvh", md: "auto" }}
      bg="graphite"
      position="relative"
    >
      <Text
        position="absolute"
        top="2"
        left="50%"
        transform="translateX(-50%)"
        fontSize="xs"
        color="whiteAlpha.800"
      >
        {lng && lat && `Position: ${lat},${lng}`}
      </Text>
    </Box>
  );
}

export default Map;
