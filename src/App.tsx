import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import HomeView from "./components/views/HomeView";

const Routes = () => {
  let routes = useRoutes([{ path: "/", element: <HomeView /> }]);
  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
