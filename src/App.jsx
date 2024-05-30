import { RouterProvider } from "react-router-dom";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import router from "./routes/routes";

function App() {
  return (
    <AuthProvider
      store={createStore({
        authName: "_auth",
        authType: "cookie",
        cookieDomain: window.location.hostname,
        // cookieSecure: window.location.protocol === "https:",
        cookieSecure: true,
      })}
    >
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
