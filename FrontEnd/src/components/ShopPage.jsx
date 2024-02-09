import { useState } from "react";
import { Button, Input, Select } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styles from "../Style Modules/productpage.module.css";
import raw from "../test data/products";
import products from '../lib/products'
import ClientProducts from "./client/ClientProducts";


const ShopPage = () => {
  console.log(products.shoes.length)
  return <>
<ClientProducts/>

  </>

};

export default ShopPage;
