import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useCities } from "./hooks/api/useCities";
import CountryList from "./components/CountryList";
import City from "./components/City";

const BASE_URL = "http://localhost:8000";

function App() {
  const { cities, error, loading } = useCities(`${BASE_URL}/cities`);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={
              <CityList cities={cities} loading={loading} error={error} />
            }
          />
          <Route path="cities/:cityId" element={<City/>} />
          <Route
            path="countries"
            element={
              <CountryList cities={cities} loading={loading} error={error} />
            }
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="pricing" element={<Pricing />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
