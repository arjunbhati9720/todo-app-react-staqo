import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const signupdata = localStorage.getItem(`signup-user-${email}`);
    if (signupdata) {
      const userData = JSON.parse(signupdata);
      if (userData.email === email && userData.password === password) {
        localStorage.setItem(`login-user`, JSON.stringify({
          email: userData.email,
          userName: userData.userName,
          name: userData.name,
          todos:userData.todos
        }));
        // let record = {
        //   email:userData.email,
        //   userName:userData.userName,
        //   name:userData.name
        // }
        // localStorage.setItem(`login-user`, record);
      }
    }
    setEmail('')
    setPassword('')

    // Handle form submission here, e.g., sending the login data to a server
  };

  return (

    <Container sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:teal[300],width:"100vw",height:"100vh"}} >
      <Typography variant="h4" align="center" gutterBottom sx={{}} >
        Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ borderRadius: '30px',backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgoHuvuMGt_8ovZZra-dq4ZuQCHA3XsBRw&usqp=CAU", backgroundSize: "cover",width:"500px",height:"auto",padding:"40px 20px" }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '40px' }}>
          Login
        </Button>
      </form>
    </Container> 
  );

};

export default Login;




