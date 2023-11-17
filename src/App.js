import Body from "./components/Body";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import appStore from "./utility/appStore";
import { Provider} from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body />
    },
    {
      path : "/product/:id",
      element : <ProductInfo />
    }
  ])
  return (
    <Provider store={appStore}>
      <div >
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
