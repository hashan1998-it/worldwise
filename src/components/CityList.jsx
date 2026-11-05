import { VStack } from "@chakra-ui/react";
import CityItem from "./CityItem";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function CityList({ cities, loading, error }) {
  if (loading) return <Loader label="Loading cities..." />;
  if (error)
    return (
      <ErrorMessage title="Couldn't load cities" message={error.message} />
    );

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
