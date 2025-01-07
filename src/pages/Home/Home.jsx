import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loading/Loading";

// lazy loading components
const ExploreMenu = React.lazy(() =>
  import("../../components/ExploreMenu/ExploreMenu")
);
const FoodDisplay = React.lazy(() =>
  import("../../components/FoodDisplay/FoodDisplay")
);
const AppDownload = React.lazy(() =>
  import("../../components/AppDownload/AppDownload")
);
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="container">
      <Header />
      <React.Suspense fallback={<Loading />}>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </React.Suspense>
    </div>
  );
};

export default Home;
