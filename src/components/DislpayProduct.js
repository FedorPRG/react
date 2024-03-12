import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../reducers/ProductsReducer";
import { changeAvailable } from "../reducers/ProductsReducer";

const DislpayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.array);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            gap: "20px",
            border: " 1px solid",
            padding: "5px",
          }}
        >
          <div style={{ width: "200px" }}>
            <p>id: {product.id}</p>
            <p>Название: {product.name}</p>
            <p>Описание: {product.description}</p>
            <p>Цена: {product.price}</p>
            <p>
              Доступность: {product.available}
              <input
                disabled
                type="checkbox"
                checked={product.available === "да"}
                onChange={(e) => dispatch(changeAvailable(product))}
              />
            </p>
            <button onClick={() => dispatch(deleteProduct(product))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DislpayProducts;
