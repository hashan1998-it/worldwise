import { Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

function Sidebar() {
  return (
    <Flex
      as="aside"
      direction="column"
      align="center"
      flexBasis={{ md: "50rem" }}
      flexShrink="0"
      maxW={{ md: "50%" }}
      bg="carbon"
      color="white"
      px={{ base: "6", md: "12" }}
      pt={{ base: "6", md: "12" }}
      pb={{ base: "4", md: "8" }}
      gap="8"
    >
      <Logo />

      <Text fontSize="sm" color="whiteAlpha.800">
        App navigation
      </Text>

      <Text
        as="footer"
        mt="auto"
        fontSize="xs"
        color="whiteAlpha.600"
      >
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </Text>
    </Flex>
  );
}

export default Sidebar;
