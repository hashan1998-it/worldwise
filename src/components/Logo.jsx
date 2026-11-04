import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router";

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
