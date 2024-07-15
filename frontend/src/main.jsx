import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./fonts/TT-Fors-Medium.ttf";
import "./fonts/TT-Fors-Regular.ttf";
import "./fonts/EncodeSansSemiCondensed-ExtraLight.ttf";
import "./fonts/Outfit-ExtraBold.ttf";
import "./fonts/Outfit-ExtraBold.ttf";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </Provider>
);
