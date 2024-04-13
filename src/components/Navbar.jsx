import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';

function Navbar({ username = 'arjun' }) {
  return (
    <AppBar position="static" style={{ borderRadius: '40px', backgroundColor:'#4DB6AC' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div className="navbar__logo">
          <Avatar alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcHoNEDjrzBMtf0NjqXkId1hkHF_x5XKIuw&usqp=CAU" sx={{ width: 80, height: 50,  marginLeft: 2, marginTop: 1, }} />
        </div>
        <div style={{ display: "flex", gap: 2, marginTop: 1 }}>
          <Button variant="outlined" style={{color: 'white', borderColor: 'black',marginRight:'70px',backgroundColor:'white'}}>Home</Button>
          <Typography variant="h6" className="navbar__user" style={{border:"solid 1px black",width:"30px",height:"30px",borderRadius:"50%",textAlign:"center"}}>
            {username.charAt(0).toUpperCase()}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


