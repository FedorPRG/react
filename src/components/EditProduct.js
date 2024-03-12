import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../reducers/ProductsReducer";

const EditProduct = ({ products }) => {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  function searchProductToId(e) {
    var searchIndex = products.findIndex(
      (product) => product.id === +e.target.value
    );
    if (searchIndex >= 0) {
      setBool(false);
      setName(products[searchIndex].name);
      setDescription(products[searchIndex].description);
      setPrice(products[searchIndex].price);
      setAvailable(products[searchIndex].available == "да" ? true : false);
    } else {
      setBool(true);
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  }

  function EditProduct() {
    if (products.some((product) => +product.id === +id)) {
      if (
        !name.trim() == "" &&
        !description.trim() == "" &&
        !price.trim() == ""
      ) {
        dispatch(
          editProduct({
            id: +id,
            name: name,
            description: description,
            price: price,
            available: available ? "да" : "нет",
          })
        );
        setId("");
        setName("");
        setDescription("");
        setPrice("");
        setAvailable(false);
      }
    }
  }

  return (
    <form style={{ border: " 1px solid", padding: "5px" }}>
      <h2>Редактирование продукта</h2>
      <input
        style={{ marginRight: "10px" }}
        id="id"
        required
        type="number"
        min={1}
        value={id}
        onChange={(e) => {
          setId(e.target.value);
          searchProductToId(e);
        }}
      />
      <label htmlFor="id">id продукта</label> <br />
      <input
        style={{ marginRight: "10px" }}
        id="nameEdit"
        required
        type="text"
        disabled={bool}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="nameEdit">Имя продукта</label> <br />
      <input
        style={{ marginRight: "10px" }}
        id="descriptionEdit"
        required
        type="text"
        disabled={bool}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="descriptionEdit">Описание продукта</label>
      <br />
      <input
        style={{ marginRight: "10px" }}
        id="priceEdit"
        required
        type="text"
        disabled={bool}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="priceEdit">Цена продукта</label>
      <br />
      <input
        style={{ marginRight: "10px" }}
        id="availableEdit"
        type="checkbox"
        disabled={bool}
        checked={available}
        onChange={(e) => setAvailable(e.target.checked)}
      />
      <label htmlFor="availableEdit">Доступность продукта</label>
      <br />
      <button disabled={bool} onClick={EditProduct}>
        Сохранить изменения
      </button>
    </form>
  );
};

export default EditProduct;
