import { Button, Container, Grid, Paper, Select, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import useAuth from '../hooks/useAuth';
import PageTitle from '../Pages/Shared/PageTitle';

const Order = () => {

    const history = useHistory();
    const {user, selectOrder, setSelectOrder} = useAuth();
    const [orders, setOrders] = useState([]);
    //  const [orderinfo, setOrderInfo] = useState({});
    useEffect(() => {
        axios.get('https://agile-mountain-70168.herokuapp.com/products')
        .then(res => setOrders(res.data))
    }, []);

   const selectedOrderHandler = title => {
        axios.get(`https://agile-mountain-70168.herokuapp.com/products/${title}`)
        .then(res => setSelectOrder(res.data[0]))
   }

    const orderSubmitHandler = () => {
        const orderData = {
            name: user.displayName,
            email: user.email,
            title: selectOrder.title,
            price: selectOrder.price,
            status: 'Pending',
            date: new Date()
        };
        // console.log(orderData)
        axios.post('https://agile-mountain-70168.herokuapp.com/addOrder', orderData)
        .then(res => (res.data)
        .history.push('/my-order'))
    }
    return (
        <>
            <Container >
                <PageTitle text="Order" />
                <Paper elevation={3} style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
                    <Grid container spacing={3}>
                        <Grid item lg={12} xs={12}>
                            <Typography variant="h5">Name</Typography>
                            <TextField fullWidth variant="outlined" defaultValue={user.displayName} />
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Typography variant="h5">Email</Typography>
                            <TextField fullWidth variant="outlined" defaultValue={user.email} />
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Typography variant="h5">Product</Typography>
                            <Select
                                fullWidth
                                variant="outlined"
                                defaultValue={selectOrder.title}
                                onChange={(e) => selectedOrderHandler(e.target.value)}
                            >
                                {
                                    orders.map(({ title, _id }) => <option key={_id} style={{ cursor: 'pointer', padding: 10, borderBottom: '1px solid lightgray' }} value={title}>{title}</option>)
                                }
                            </Select>
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            onClick={orderSubmitHandler}
                            style={{ marginTop: 20, background: '#feeb26', color: '#414141' }}
                            variant="contained"
                            color="secondary">
                            Place Order</Button>
                    </div>
                </Paper>
            </Container>
        </>
    );
};

export default Order;