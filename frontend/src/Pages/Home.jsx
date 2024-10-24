import React from 'react';
import Banner from '../Components/Banner';
import LatestCollection from '../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';
import Policy from '../Components/Policy';
import Subscribe from '../Components/Subscribe';

const Home = () => {
  return (
    <div>
     <Banner />
     <LatestCollection />
     <BestSeller />
     <Policy />
     <Subscribe />
    </div>
  );
};

export default Home;