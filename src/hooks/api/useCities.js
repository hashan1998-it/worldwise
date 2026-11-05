import { useEffect, useState } from "react";

export function useCities(url) {
    
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      async function fetchCities() {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(
              `HTTP Error: ${response.status} ${response.statusText}`.trim(),
            );
          }
          const data = await response.json();
          setCities(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchCities();
    }, [url]);

    return { cities, loading, error}
}


