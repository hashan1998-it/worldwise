import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<p>Cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
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
