import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import KidButton from '../../styledComponents/styledComponents';
import { Box } from '@mui/system';

const useStyle = makeStyles({
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})
const Footer = () => {
    const { socialIcon } = useStyle();
    
    return (
        <Box style={{ background: '#FC82BD', color:'#fff' }}>
            <Container >
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText>My Account</ListItemText>
                            <ListItemText>Request-fora-a-quote</ListItemText>
                            <ListItemText>Terms and Condition</ListItemText>
                            <ListItemText>Refund Policy</ListItemText>
                            <ListItemText>Privacy Policy</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText >Information</ListItemText>
                            <ListItemText >My account</ListItemText>
                            <ListItemText>Check Checkout</ListItemText>
                            <ListItemText>Cart</ListItemText>
                            <ListItemText>Wishlist</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText >Baby Care</ListItemText>
                            <ListItemText>Request for-a-quote</ListItemText>
                            <ListItemText>Terms and Condition</ListItemText>
                            <ListItemText>Refund Policy</ListItemText>
                            <ListItemText>Privacy Policy</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText >Contact Us</ListItemText>
                            <ListItemText>1203 Town Center Drive FL 33458 USA</ListItemText>
                            <ListItemText>Yards</ListItemText>
                        </List>
                        {/* <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton> */}
                        <Typography>Call Now</Typography>
                        <KidButton variant="contained">+8065432145</KidButton>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </Box>
    );
};

export default Footer;