
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Router from "./components/Router";
import Singin from "./components/Singin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
