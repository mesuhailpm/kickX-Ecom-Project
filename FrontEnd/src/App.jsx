import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientSharedHomePage from "./components/client/ClientSharedHomePage";
import ClientHomePage from "./components/client/ClientHomePage";
import ClientProductPage from "./components/client/ClientProductPage";
import ClientShopPage from "./components/client/ClientShopPage";
import CartPage from "./components/client/CartPage";
import WishListPage from "./components/client/WishListPage";
import Client404Page from "./components/client/Client404Page";
import SharedLayout from "./components/SharedLayout";
import Dashboard from "./components/HomePage";
import Order from "./components/Orders";
import ProductsPage from "./components/ProductsPage";
import Customers from "./components/Customers";
import Inventory from "./components/Inventory";
import Settings from "./components/Settings";
import LoginPage from "./components/LoginPage";
import ShopPage from "./components/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientSharedHomePage />}>
          <Route index element={<ClientHomePage />} />
          <Route path="product" element={<ClientProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="shop" element={<ClientShopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Client404Page />} />
        </Route>
        <Route path="/admin" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
