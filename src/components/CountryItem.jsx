import { Text, VStack } from "@chakra-ui/react";

// One country tile in the sidebar grid: flag emoji above the name.
// Flat surface, 4px radius, colour-only hover (DESIGN.md).
function CountryItem({ country }) {
  return (
    <VStack
      as="li"
      gap="2"
      px="4"
      py="5"
      bg="whiteAlpha.100"
      rounded="control"
      textAlign="center"
      transition="background-color {durations.tesla}"
      _hover={{ bg: "whiteAlpha.200" }}
    >
      <Text as="span" fontSize="3xl" lineHeight="1" aria-hidden="true">
        {country.emoji}
      </Text>
      <Text fontSize="md" fontWeight="500" color="white">
        {country.country}
      </Text>
    </VStack>
  );
}

export default CountryItem;
