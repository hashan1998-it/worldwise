import { SimpleGrid } from "@chakra-ui/react";
import CountryItem from "./CountryItem";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function CountryList({ cities, loading, error }) {
  const uniqueCountries = [
    ...new Map(
      cities.map((city) => [
        city.country,
        { country: city.country, emoji: city.emoji },
      ]),
    ).values(),
  ];

  if (loading) return <Loader label="Loading countries..." />;
  if (error)
    return (
      <ErrorMessage title="Couldn't load countries" message={error.message} />
    );

  return (
    <SimpleGrid
      as="ul"
      listStyleType="none"
      columns="2"
      gap="3"
      w="full"
      minH="0"
      overflowY="auto"
    >
      {uniqueCountries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </SimpleGrid>
  );
}

export default CountryList;
