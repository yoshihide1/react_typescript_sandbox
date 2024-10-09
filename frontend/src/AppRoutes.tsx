import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./components/layout/Layout";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import "./tailwind.css";

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
