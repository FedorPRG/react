import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Theme from "./theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <Theme />
      </Provider>
    </>
  );
}

export default App;
