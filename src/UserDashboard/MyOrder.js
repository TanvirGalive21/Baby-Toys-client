import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import PageTitle from '../Pages/Shared/PageTitle';


const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const email = user?.email;

    useEffect(() => {
        axios.post(`https://agile-mountain-70168.herokuapp.com/orders/${user.email}`)
            .then(res => {
            setOrders(res.data)
            setIsLoading(false)
            })
    }, [user.email])
    console.log(orders)

    return (
        <>
            <Container>
                <PageTitle text="My Order" />
                    <Grid container spacing={3}>
                        {
                            orders.map(({ _id, name, title, price, status, date }) =>
                                <Grid key={_id} item lg={4} sm={6} xs={12}>
                                    <Paper elevation={3} style={{ padding: 15, textAlign: 'center' }}>
                                        <Button
                                         style={{ color: '#fff', background: `${status === 'Pending' ? 'red' : status === 'On going' ? 'orange' : 'green'}` }}>{status}</Button>
                                        <Typography variant="h5" style={{ fontWeight: 600 }}>{title}</Typography>
                                        <Typography variant="h6">Price: ${price}</Typography>
                                        <Typography variant="body1" style={{ fontStyle: 'italic' }}>Ordered at: {new Date(date).toDateString()}</Typography>
                                    </Paper>
                                </Grid>)
                        }
                    </Grid>
            </Container>

        </>
    );
};

export default MyOrder;