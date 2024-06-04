import React, { useContext, useEffect } from "react";
import Layout from "./layout/Layout";
import Admin from "./layout/Admin-Layout.jsx";
import { authContext } from "./context/AuthContext";

function App() {
  const { user, role, token } = useContext(authContext);

  useEffect(() => {}, [user, role, token]);

  return <>{token && role === "admin" ? <Admin /> : <Layout />}</>;
}

export default App;
