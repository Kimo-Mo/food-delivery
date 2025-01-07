import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import React, { useState } from "react";
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

  return (
    <>
      {showLogin && (
        <React.Suspense fallback={<Loading />}>
          <LoginPopup setShowLogin={setShowLogin} />
        </React.Suspense>
      )}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
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
      </div>
    </>
  );
};

export default App;
