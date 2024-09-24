import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import "./App.css";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import GlobalLayout from "./components/layout/Layout";
import Todo from "./pages/Todo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sample" element={<Coffee />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
