import MainRoutes from "./Router/MainRoutes";
import ScrollProp from "./Utils/ScrollProp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ScrollProp();
  }, []);

  return <MainRoutes />;
}

export default App;
