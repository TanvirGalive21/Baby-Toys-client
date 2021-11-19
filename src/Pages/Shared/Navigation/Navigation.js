import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../hooks/useAuth';


export default function Navigation() {

  const { user, logout } = useAuth();
    
    const theme = useTheme()
    const useStyle = makeStyles({

        navItem: {
          color: '#000000',
          textDecoration: 'none',
          transition: '.3s',
          '&:hover': {
              borderColor: '#fff',
              color: '#fff',
          }
        },
        appBar: {
            [theme.breakpoints.up('md')]: {
                width: '100%',
                display: 'none'
            },
        },
    
        navIcon: {
          [theme.breakpoints.up('sm')]: {
            display: 'none !important'
          }
        },
        navItemContainer: {
          [theme.breakpoints.down('sm')]: {
            display: 'none'
          }
        },
        navLogo: {
          [theme.breakpoints.down('sm')]: {
            textAlign: 'right'
          }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color:'#000'
        }
        
      });
      
        const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem, appBar} = useStyle();
        const [state, setState] = React.useState(false);
      
        const list =(
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
              <ListItem button>
                <ListItemText>
                    <Link className={mobileNavItem} to="/home">Home</Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText>
                <Link className={mobileNavItem} to="/products">Products</Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText>
                <Link className={mobileNavItem} to="/explore">Explore</Link>
                </ListItemText>
              </ListItem>
              <Divider />
              
              <ListItem button>
                <ListItemText>Login</ListItemText>
              </ListItem>
          </List>
          
        </Box>
      );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={appBar} style={{ background: '#FC82BD', color:'#000' }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Baby Toys
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
                            <Link className={navItem} to="/products"><Button color="inherit">Products</Button></Link>
                            <Link className={navItem} to="/explore"><Button color="inherit">Explore</Button></Link>
                            <Link className={navItem} to="/contact"><Button color="inherit">contact</Button> </Link>
                           {
                             user?.email ? 
                             <Box>
                               <Link className={navItem} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                                <Link className={navItem}><Button onClick={logout} color="inherit">Logout</Button></Link>
                             </Box>
                             :
                             <Link className={navItem} to="/login"><Button color="inherit">Login</Button></Link>
                           }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                    open={state}
                    onClose={() => setState(false)}
                    >
                    {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}