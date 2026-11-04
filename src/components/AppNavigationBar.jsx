import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router";


const tabs = [
  { to: "cities", label: "Cities" },
  { to: "countries", label: "Countries" },
];


function AppNavigationBar() {
  return (
    <HStack
      as="nav"
      aria-label="App navigation"
      gap="1"
      p="1"
      bg="whiteAlpha.100"
      rounded="control"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.to}
          asChild
          minW="28"
          h="9"
          px="4"
          justifyContent="center"
          fontSize="sm"
          fontWeight="500"
          color="whiteAlpha.800"
          rounded="control"
          textDecoration="none"
          transition="background-color {durations.tesla}, color {durations.tesla}"
          _hover={{ textDecoration: "none", color: "white" }}
          _currentPage={{ bg: "graphite", color: "white" }}
        >
          <NavLink to={tab.to}>{tab.label}</NavLink>
        </Link>
      ))}
    </HStack>
  );
}

export default AppNavigationBar;
