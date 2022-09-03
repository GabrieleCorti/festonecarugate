import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Storia from "./pages/Storia";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="dicci-la-tua" element={<Post />} />
          <Route path="storia" element={<Storia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
