import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router";

// WORLDWISE wordmark – spaced uppercase letters (the only uppercase text,
// per DESIGN.md). Shared by the home page nav and the app sidebar.
function Logo({ onClick }) {
  return (
    <Link
      asChild
      color="white"
      fontSize="lg"
      fontWeight="500"
      letterSpacing="0.3em"
      textTransform="uppercase"
      _hover={{ textDecoration: "none" }}
    >
      <NavLink to="/" onClick={onClick}>
        WorldWise
      </NavLink>
    </Link>
  );
}

export default Logo;
