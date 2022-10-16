import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import Login from "../Login";
import Layout from "../components/Layout/Layout";

const PrivateRouter = () => {
    const navigate = useNavigate()
    const { Auth } = useContext(AuthContext);
    console.log(Auth)
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {Auth ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Login/>
      )}
    </>
  );
};

export default PrivateRouter;
