import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CoursesDetail from "./Pages/CoursesDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursesDetail />} />
        

        <Route path="/product" element={<Product />} >
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

