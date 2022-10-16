import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Layout from "../components/Layout/Layout";
import Dashboard from "../screens/Dashboard";
import PrivateRouter from "./Private-Router";
import Form from '../components/Form/Form'
import Buscar from "../components/Buscar/Buscar";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRouter/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form" element={<Form />} />
          <Route path="/buscar" element={<Buscar />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
