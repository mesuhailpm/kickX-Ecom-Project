import { useState } from "react";
import { Button, Input, Select } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styles from "../Style Modules/productpage.module.css";
import raw from "../test data/products";

const ProductsPage = () => {
  const [data, setData] = useState(raw);

  const handleChange = (value) => {
    console.log(value);
  };

  const searchProducts = (e) => {
    const value = e.currentTarget.value.toLowerCase();
    const filter = raw.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });
    setData(filter);
    if (value === " " || value === "" || !value) {
      setData(raw);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h3>All Products</h3>
        <p>Here is an overview of all available products</p>
      </div>
      <div>
        <div>
          <Button style={{ fontWeight: "bold", border: "1px solid black" }}>
            <PlusSquareOutlined /> Add New Product
          </Button>
          <Input
            style={{ border: "1px solid black" }}
            onChange={searchProducts}
            placeholder="Search for products"
          />
        </div>
        <Select
          defaultValue="Category : All"
          style={{
            width: "fit-content",
            border: "1px solid black",
            borderRadius: ".5em",
          }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div>

      <div className={styles.products}>
        {data.map((item, idx) => {
          return (
            <article key={idx}>
              <h2>{item.title}</h2>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
