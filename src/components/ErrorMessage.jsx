import { Text, VStack } from "@chakra-ui/react";

// Error state for sidebar lists. Red is used only for errors (DESIGN.md).
// role="alert" makes screen readers announce it immediately.
function ErrorMessage({ title = "Something went wrong", message }) {
  return (
    <VStack
      role="alert"
      gap="1"
      w="full"
      px="5"
      py="4"
      bg="whiteAlpha.100"
      rounded="control"
      textAlign="center"
    >
      <Text fontSize="md" fontWeight="500" color="red.300">
        {title}
      </Text>
      {message && (
        <Text fontSize="sm" color="whiteAlpha.700">
          {message}
        </Text>
      )}
    </VStack>
  );
}

export default ErrorMessage;
