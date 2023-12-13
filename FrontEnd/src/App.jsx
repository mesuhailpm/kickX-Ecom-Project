import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Dashboard from "./components/HomePage";
import Order from "./components/Orders";
import ProductsPage from "./components/ProductsPage";
import Customers from "./components/Customers";
import Inventory from "./components/Inventory";
import Settings from "./components/Settings";
import LoginPage from "./components/LoginPage";
import ClientHomePage from "./components/client/ClientHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHomePage />}></Route>
        <Route path="/admin" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
