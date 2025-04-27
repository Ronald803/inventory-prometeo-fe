import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import HomeView from "./components/views/HomeView";
import ProductView from "./components/views/ProductView";
import { Provider } from "react-redux";
import { prometeoStore } from "./rtk/prometeoStore";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/products", element: <ProductView /> },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={prometeoStore}>
          <MainLayout>
            <Routes />
          </MainLayout>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
