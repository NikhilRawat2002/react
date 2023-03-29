import React , {useState}from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Box, Typography,AppBar, Toolbar, IconButton, Drawer, Divider} from "@mui/material"
import{Link,NavLink} from'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import "./Style.css"
 const Header = () => {
  const [mobileOpen, setMobileOpen]= useState(false)

  // handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }

  // menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx= {{textAlign:'center'}}>
      <FastfoodIcon/>
 <Typography color={"goldenrod"}  variant="h6" component="div" sx={{flexGrow: 1, my:2}}> My Restrurent</Typography>
 <Divider/>
         
          < ul className='mobile-navigation'>
          <li>
            <NavLink activeClassName="active" to="/"> Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>

          </li>

          <li>
            {/* <Navlink to="/menu">Menu</Navlink> */}
            <NavLink to="/menu">Menu</NavLink>
          </li>
          </ul>
         
         
          
        
      
      
    </Box>
  )
  return (
    <>
     <Box>
      <AppBar component={'nav'} sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton color="inherit" aria-label='open drawer' edge="start" sx={{mr:2, display:{sm:"none"},
          }}
          onClick={handleDrawerToggle}
          >

              <MenuIcon/>
          </IconButton>
          <FastfoodIcon/>
        <Typography color={"goldenrod"}  variant="h6" component="div" sx={{flexGrow: 1}}> My Restrurent</Typography>
         <Box sx={{display:{xs:"none", sm:"block"}}}>
          < ul className='navigation-menu'>
          <li>
            <NavLink activeClassName="active" to="/"> Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>

          </li>

          <li>
            {/* <Navlink to="/menu">Menu</Navlink> */}
            <NavLink to="/menu">Menu</NavLink>
          </li>
          </ul>
         
         </Box>
         
          </Toolbar>
        
      </AppBar>
      <Box component="nav">
    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"&.MiuDrawer-paper":{
            boxSizing:"border-box",
            width:"240px",},}}>
      {drawer}
    </Drawer>
      </Box>
      </Box>
      <Toolbar/>
    </>
  )
}
export default Header;


