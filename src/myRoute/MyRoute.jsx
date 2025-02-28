import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Loading from "../pages/landingpage/Loading";
import About from "../pages/about/About";
import Resume from "../pages/Resume/Resume";

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          <Route index element={<Loading></Loading>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
        </Route>
        {/* <Route path="/about" element={<Outlet></Outlet>}>
        <Route index element={<About></About>}></Route>
        </Route> */}

      </Routes>
    </div>
  );
};

export default MyRoute;
