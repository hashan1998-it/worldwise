import { Spinner, Text, VStack } from "@chakra-ui/react";

// Loading state for sidebar lists.
// role="status" lets screen readers announce the label.
function Loader({ label = "Loading..." }) {
  return (
    <VStack role="status" gap="3" py="10" w="full">
      <Spinner size="lg" color="whiteAlpha.800" borderWidth="3px" />
      <Text fontSize="sm" color="whiteAlpha.700">
        {label}
      </Text>
    </VStack>
  );
}

export default Loader;
