import "./App.css";
import Body from "./components/Body.jsx";
import Head from "./components/Head.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </>
  );
}

export default App;
