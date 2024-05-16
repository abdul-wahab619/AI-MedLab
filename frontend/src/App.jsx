import React, { useContext, useEffect } from "react";
import Layout from "./layout/Layout";
import Admin from "./layout/Admin-Layout.jsx"; // Import your Admin page component
import LoginPage from "./pages/Login.jsx"; // Import your Login page component
import { authContext } from "./context/AuthContext";

function App() {
  const { user, role, token } = useContext(authContext);

  useEffect(() => {
    console.log("User:", user);
    console.log("Role:", role);
    console.log("Token:", token);
  }, [user, role, token]);

  return <>{token && role === "admin" ? <Admin /> : <Layout />}
  </>;
}

export default App;
//{token && role === "admin" ? <Admin /> : <Layout />}
