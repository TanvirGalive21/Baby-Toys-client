import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
    const { logout, user } = useAuth;
    const logOutHandler = async e => {
        try {
            await logout();
            console.log('log out successfully');
        } catch {

        }
    }
    return (
        <>
            {user &&
                <div style={{ textAlign: 'center' }}>
                    <Button
                        style={{ marginBottom: 30, marginTop: 20 }}
                        onClick={logOutHandler}
                        variant="contained"
                        color="secondary">Logout</Button>
                </div>}
        </>
    );
};

export default Logout;