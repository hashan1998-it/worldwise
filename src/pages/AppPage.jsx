import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppPage() {
  return (
    <Flex
      as="main"
      direction={{ base: "column", md: "row" }}
      minH="100dvh"
      h={{ md: "100dvh" }}
      bg="white"
    >
      <Sidebar />
      <Map />
    </Flex>
  );
}

export default AppPage;
