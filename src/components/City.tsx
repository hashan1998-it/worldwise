import { useParams } from "react-router";

function City() {
  const { cityId } = useParams();
  return <div>City: {cityId}</div>;
}

export default City;
