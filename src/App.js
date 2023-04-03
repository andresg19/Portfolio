import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Components/Home";
function App() {

    const element = useRoutes([
      { path: "/", element: <Home /> },
  
    ]);
    return element;

}

export default App;
