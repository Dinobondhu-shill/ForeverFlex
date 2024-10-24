import React from 'react';
import Banner from '../Components/Banner';
import LatestCollection from '../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';
import Policy from '../Components/Policy';

const Home = () => {
  return (
    <div>
     <Banner />
     <LatestCollection />
     <BestSeller />
     <Policy />
    </div>
  );
};

export default Home;