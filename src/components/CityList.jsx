import { VStack } from "@chakra-ui/react";
import CityItem from "./CityItem";

function CityList({ cities, loading, error }) {
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  return (
    <VStack
      as="ul"
      listStyleType="none"
      align="stretch"
      gap="3"
      w="full"
      minH="0"
      overflowY="auto"
    >
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </VStack>
  );
}

export default CityList;
