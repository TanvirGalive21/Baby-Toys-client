import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Logout from './Logout';


const PageTitle = ({ text }) => {
    const { user } = useAuth();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" style={{ color: 'skyblue', fontWeight: 700, marginBottom: 30 }}>{text}</Typography>
            <Logout />
            <Avatar src={user.photoURL} />
        </div>
    )
}

export default PageTitle;