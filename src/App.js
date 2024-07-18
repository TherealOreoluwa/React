import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import NoPage from "./component/Nopage";
import Homehero from "./component/Homehero";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homehero />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="rooms" element={<rooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
