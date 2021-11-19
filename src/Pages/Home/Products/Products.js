import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SectionTitle from '../../Shared/SectionTitle';
import Loader from '../../Shared/Loader';
import SingleProduct from '../SingleProduct/SingleProduct'
import axios from 'axios';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('https://agile-mountain-70168.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false)
            })
    }, [])

    return (
       
        <Container  style={{ minHeight: '100vh' }} >
            <SectionTitle text={'Our Products'} />
                {loading ? <Loader />:
                <Grid container spacing={3}>
                    {
                        products.map(product => 
                            <Grid key={product._id} item md={4} sm={6} xs={12}>
                                <SingleProduct product={product} />
                            </Grid>)
                    }
                </Grid>}
        </Container>
       
    );
};

export default Products;