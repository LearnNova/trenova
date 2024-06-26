import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          style: { background: "rgb(51 65 85)", color: "#fff" },
        }}
      />
      <App />
    </BrowserRouter>
  </Provider>
);
