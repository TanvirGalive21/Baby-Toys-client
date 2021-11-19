import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Products from '../Products/Products';

const Home = () => {
    return (
        <div> 
            <Navigation></Navigation>
            <Banner />
            <Products />
            <Contact />
            <Footer></Footer>
        </div>
    );
};

export default Home;