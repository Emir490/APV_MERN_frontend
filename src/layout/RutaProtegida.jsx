import { Outlet, Navigate } from "react-router-dom";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
    const { auth, cargando } = useAuth();
    let flag = false;
    if (cargando) return "cargando...";
    if (auth.veterinario) {
      flag = true;
    }

  return (
    <>
        <Header />
            {flag || auth?._id ? (
              <main className="container mx-auto mt-10">
                <Outlet /> 
              </main>
            ) : <Navigate to='/' />}
        <Footer />
    </>
  )
}

export default RutaProtegida;