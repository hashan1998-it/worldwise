import { IconButton, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import { formatDate } from "../utils/formatDate";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <LinkBox
      as="li"
      display="flex"
      alignItems="center"
      gap="4"
      px="5"
      py="3"
      bg="whiteAlpha.100"
      rounded="control"
      transition="background-color {durations.tesla}"
      _hover={{ bg: "whiteAlpha.200" }}
      css={{
        "&:has(a:focus-visible)": {
          outline: "2px solid",
          outlineColor: "brand.400",
        },
      }}
    >
      <Text as="span" fontSize="2xl" lineHeight="1" aria-hidden="true">
        {emoji}
      </Text>

      <Text as="h3" flex="1" fontSize="md" fontWeight="500" color="white">
        <LinkOverlay asChild _focusVisible={{ outline: "none" }}>
          <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
            {cityName}
          </Link>
        </LinkOverlay>
      </Text>

      <Text as="time" dateTime={date} fontSize="sm" color="whiteAlpha.700">
        {formatDate(date)}
      </Text>

      {/* Delete button – UI only for now, no click handler yet */}
      <IconButton
        type="button"
        aria-label={`Delete ${cityName}`}
        size="xs"
        variant="ghost"
        position="relative"
        zIndex="1"
        color="whiteAlpha.700"
        rounded="control"
        transition="background-color {durations.tesla}, color {durations.tesla}"
        _hover={{ bg: "whiteAlpha.300", color: "white" }}
        _active={{ bg: "whiteAlpha.300" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </IconButton>
    </LinkBox>
  );
}

export default CityItem;
