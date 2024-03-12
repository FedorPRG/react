import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/ProductsReducer";

const AddProduct = ({ products }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  function addNewProduct() {
    if (
      !name.trim() == "" &&
      !description.trim() == "" &&
      !price.trim() == ""
    ) {
      dispatch(
        addProduct({
          id: products.at(-1) ? products.at(-1).id + 1 : 1,
          name: name,
          description: description,
          price: price,
          available: available ? "да" : "нет",
        })
      );
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  }

  return (
    <form style={{ border: " 1px solid", padding: "5px" }}>
      <h2>Добавление продукта</h2>
      <input
        style={{ marginRight: "10px" }}
        id="name"
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="name">Имя продукта</label> <br />
      <input
        style={{ marginRight: "10px" }}
        id="description"
        required
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="description">Описание продукта</label>
      <br />
      <input
        style={{ marginRight: "10px" }}
        id="price"
        required
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="price">Цена продукта</label>
      <br />
      <input
        style={{ marginRight: "10px" }}
        id="available"
        type="checkbox"
        checked={available}
        onChange={(e) => setAvailable(e.target.checked)}
      />
      <label htmlFor="available">Доступность продукта</label>
      <br />
      <button onClick={addNewProduct}>Добавить продукт</button>
    </form>
  );
};

export default AddProduct;
