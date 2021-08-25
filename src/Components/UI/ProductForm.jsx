import React, { useState } from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";

const ProductForm = ({ create }) => {
  //fields of product object

  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productCount, setProductCount] = useState('');
  const [productSize, setProductSize] = useState({ width: "", height: "" });
  const [productWeight, setProductWeight] = useState("");

  const addNewProduct = (e) => {
    e.preventDefault();
    const newSize = { width: productSize.height, height: productSize.height };
    const newProduct = {
      id: Date.now(),
      name: productName,
      url: productUrl,
      size: newSize,
      weight: productWeight,
      comments:[]
    };
    console.log(newProduct);
    create(newProduct)
  };
  return (
    <form>

      {/* Product create form */}

      <MyInput
        onChange={(e) => setProductUrl(e.target.value)}
        value={productUrl}
        type="text"
        placeholder="Product url"
      />
      <MyInput
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
        type="text"
        placeholder="name of product"
      />
      <MyInput
        onChange={(e) => setProductCount(e.target.value)}
        value={productCount}
        type="text"
        placeholder="count"
      />
      <MyInput
        onChange={(e) =>
          setProductSize({ ...productSize, width: e.target.value })
        }
        value={productSize.width}
        type="text"
        placeholder="size width"
      />
      <MyInput
        onChange={(e) =>
          setProductSize({ ...productSize, height: e.target.value })
        }
        value={productSize.height}
        type="text"
        placeholder="size height"
      />

      <MyInput
        onChange={(e) => setProductWeight(e.target.value)}
        value={productWeight}
        type="text"
        placeholder="weight"
      />

      <MyButton type="submit" onClick={addNewProduct}>
        Create Product
      </MyButton>
    </form>
  );
};

export default ProductForm;
