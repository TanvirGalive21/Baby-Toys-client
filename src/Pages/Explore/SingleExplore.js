import React from 'react';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';

import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const useStyle = makeStyles({
    root: {
        transition: 'all .3s linear',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 15px rgba(0,0,0,.4)'
        }
    }
})

const SingleExplore = ({product}) => {
    const {root} = useStyle();
    const history = useHistory();
    const { title, price, image, description} = product;
    const {setSelectOrder} = useAuth()
    const selectOrderHandler = () => {
        setSelectOrder(product)
        history.push('/order')
    }
    return (
        <Paper className={root}>
        <img src={image} alt="" width="100%" height="300" />
        <div style={{ padding: 25 }}>
            <Typography style={{color: 'skyblue'}} variant="h6">{title}</Typography>
            <div style={{ height: 3, width: 50, background: '#F2184F' }}></div>
            <Typography variant="h4" color="#333" style={{ fontWeight: 700, marginTop: 10 }}>${price}</Typography>
            <Typography variant="body1" style={{ margin: '10px 0' }}>{description}</Typography>
            <Button onClick={selectOrderHandler} variant="contained" style={{ background: '#feeb26', color: '#414141' }}>Order Now </Button>
        </div>
    </Paper>
    );
};

export default SingleExplore;