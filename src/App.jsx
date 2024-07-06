import { RouterProvider } from "react-router-dom";
import { store } from "../src/store/store";
import router from "./routes/routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
