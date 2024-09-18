import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import "./App.css";
import SampleList from "./pages/Todo";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<SampleList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
