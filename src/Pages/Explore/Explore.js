import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Loader from '../Shared/Loader';
import Navigation from '../Shared/Navigation/Navigation';
import SectionTitle from '../Shared/SectionTitle';
import SingleExplore from './SingleExplore';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('https://agile-mountain-70168.herokuapp.com/exploreProducts')
            .then(res => {
                setProducts(res.data);
                setLoading(false)
            })
    }, [])
    return (
        <div> 
            <Navigation />
            <Container  style={{ minHeight: '100vh' }} >
            <SectionTitle text={'Our Products'} />
                {loading ? <Loader />:
                <Grid container spacing={3}>
                    {
                        products.map(product => 
                            <Grid key={product._id} item md={4} sm={6} xs={12}>
                                <SingleExplore product={product} />
                            </Grid>)
                    }
                </Grid>}
        </Container>
        <Footer />
        </div>
    );
};

export default Explore;