import { Grid } from '@mui/material';
import React from 'react';
import Order from '../../../UserDashboard/Order';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
               <Order />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;