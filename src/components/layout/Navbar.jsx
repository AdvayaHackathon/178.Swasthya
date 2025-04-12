

import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, Toolbar, Typography, } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../../styles/HeaderStyles.css';
import logo from "./logo.jpg";

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Avatar src={logo} style={{ height: "70", width: "200" }} />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        

        <li>
          <NavLink to={"/diseases"}>Disease</NavLink>
        </li>
        

        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        
        
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (


    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "purple" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 1,
                display: { sm: "none" }
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color='gold'
              fontFamily='sans-serif'
              variant="h5"
              component="div"
              
              sx={{ flexGrow: 1,ml:'auto' }}
            >MediBridge
            </Typography>
            <Avatar src={logo} height="auto"  width="20px"  style={{color:'gold',height:'60px',width:'70px',marginRight:'25%'}} />

            
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>

                <li>

                  <NavLink to={"/diseases"}>Disease</NavLink>
                </li>
               
                

                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                

                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>              <Avatar src={{logo}} style={{marginLeft:'auto'}}></Avatar>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  )
}

export default Navbar;
