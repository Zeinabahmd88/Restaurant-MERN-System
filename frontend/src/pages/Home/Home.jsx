import React, { useState } from 'react'; // ✅ Import useState
import './Home.css';
import Header from '../../componenets/Header/Header'; // ✅ Correct import path
import ExploreMenu from '../../componenets/ExploreMenu/ExploreMenu'; // ✅ Correct import path
import FoodDisplay from '../../componenets/FoodDisplay/FoodDisplay';
import AppDownload from '../../componenets/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All"); // ✅ Now useState works properly

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
