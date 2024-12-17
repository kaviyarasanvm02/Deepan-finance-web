import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';  
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineViewHeadline } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { MdPermMedia } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";

import Deepalogo from "../../assets/logos/logo-deepan1.png";
import styled from 'styled-components';

const drawerWidth = 240;

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Adminpage>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background: "#0c1035" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" noWrap component="div">Admin Panel</Typography>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Typography
                component="div"
                onClick={toggleDropdown}
                sx={{
                  color: "#fff",
                  backgroundColor: "rgb(225, 35, 35)",
                  padding: "5px 10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "4px",
                }}
              >
                <FaSignOutAlt />
              </Typography>
              {isOpen && (
                <div
                  className="dropdown-menu profil-dropdown"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    padding:"10px 15px",
                    zIndex: 1000,
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="card border-0">
                      <h5 className="card-title">Admin</h5>
                      <h6 className="card-subtitle mb-1 text-muted m-0">admin@gmail.com</h6>
                      <p >  <Link to="/" style={{color:"#fa0001"}}>  Logout  </Link></p>
                  </div>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              background: "#0c1035;",
              color: "#fff",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <img src={Deepalogo} alt="Logo" />
          <Divider />
          <List>
            {/* <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin">
                <ListItemIcon className="icon">
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/slider">
                <ListItemIcon className="icon">
                  <MdOutlineViewHeadline />
                </ListItemIcon>
                <ListItemText primary="Headers" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/about">
                <ListItemIcon className="icon">
                  <FaBookReader />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/card">
                <ListItemIcon className="icon">
                  <FaAddressCard />
                </ListItemIcon>
                <ListItemText primary="Card" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/joiner">
                <ListItemIcon className="icon">
                  <PiPlugsConnectedFill />
                </ListItemIcon>
                <ListItemText primary="Joiner" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/socialmedia">
                <ListItemIcon className="icon">
                  <MdPermMedia />
                </ListItemIcon>
                <ListItemText primary="Social Media" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/reviews">
                <ListItemIcon className="icon">
                  <MdOutlinePreview />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <Box component="main" className="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </Adminpage>
  );
};

export default Admin;

const Adminpage = styled.section`
  .icon {
    min-width: 50px;
    font-size: 22px;
    color: #fa0001;
  }
  main {
    margin: 10px 10px;
  }
  img {
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`;
