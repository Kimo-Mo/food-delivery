import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

// lazy loading components
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const PlaceOrder = React.lazy(() => import("./pages/PlaceOrder/PlaceOrder"));
const LoginPopup = React.lazy(() =>
  import("./components/LoginPopup/LoginPopup")
);

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {showLogin && (
        <React.Suspense fallback={<Loading />}>
          <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />
        </React.Suspense>
      )}

      <NavBar setShowLogin={setShowLogin} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Cart"
          element={
            <React.Suspense fallback={<Loading />}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="/Order"
          element={
            <React.Suspense fallback={<Loading />}>
              <PlaceOrder />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
