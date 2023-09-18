import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Login from "./pages/Login";

import { locations } from "./constants";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={locations.HOME} element={<Home />} />
          <Route path={locations.ABOUT} element={<About />} />
          <Route path={locations.MENU} element={<Menu />} />
          <Route path={locations.ORDER} element={<Order />} />
          <Route path={locations.RESERVE} element={<Reservation />} />
          <Route path={locations.LOGIN} element={<Login />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
