import { useState } from "react";
import { Box, Flex, HStack, IconButton, Link, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router";
import Logo from "./Logo";

const links = [
  { to: "/pricing", label: "Pricing" },
  { to: "/products", label: "Product" },
  { to: "/login", label: "Login" },
];

function navItemStyles(tone) {
  const onDark = tone === "dark";
  return {
    display: "inline-flex",
    alignItems: "center",
    minH: "32px",
    px: "4",
    py: "1",
    fontSize: "sm",
    fontWeight: "500",
    rounded: "control",
    color: onDark ? "white" : "carbon",
    textDecoration: "none",
    transition: "background-color {durations.tesla}, color {durations.tesla}",
    _hover: {
      textDecoration: "none",
      bg: onDark ? "whiteAlpha.200" : "ash",
    },
    _currentPage: { bg: onDark ? "whiteAlpha.200" : "ash" },
  };
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {isOpen ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function NavItems({ tone, onNavigate }) {
  return links.map((link) => (
    <li key={link.to}>
      <Link asChild {...navItemStyles(tone)} onClick={onNavigate}>
        <NavLink to={link.to}>{link.label}</NavLink>
      </Link>
    </li>
  ));
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="nav" position="relative" px={{ base: "4", md: "10" }} py="4">
      <Flex align="center" justify="space-between" minH="48px">
        <Logo onClick={() => setIsOpen(false)} />

        <HStack
          as="ul"
          gap="1"
          listStyleType="none"
          display={{ base: "none", md: "flex" }}
        >
          <NavItems tone="dark" />
        </HStack>

        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          variant="ghost"
          color="white"
          rounded="control"
          transition="background-color {durations.tesla}"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.300" }}
          _expanded={{ bg: "whiteAlpha.200" }}
          display={{ base: "inline-flex", md: "none" }}
          onClick={() => setIsOpen((open) => !open)}
        >
          <MenuIcon isOpen={isOpen} />
        </IconButton>
      </Flex>

      {isOpen && (
        <VStack
          as="ul"
          position="absolute"
          top="100%"
          left="4"
          right="4"
          listStyleType="none"
          align="stretch"
          gap="1"
          p="3"
          bg="white"
          rounded="control"
          display={{ base: "flex", md: "none" }}
        >
          <NavItems tone="light" onNavigate={() => setIsOpen(false)} />
        </VStack>
      )}
    </Box>
  );
}

export default NavigationBar;
