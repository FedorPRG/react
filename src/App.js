import "./App.css";
import { useSelector } from "react-redux";
import AddProduct from "./components/AddProduct";
import DislpayProducts from "./components/DislpayProduct";
import EditProduct from "./components/EditProduct";

function App() {
  const products = useSelector((state) => state.products.array);

  return (
    <div className="App">
      <AddProduct products={products} />
      <DislpayProducts />
      <EditProduct products={products} />
    </div>
  );
}

export default App;
