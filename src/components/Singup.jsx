// import React from 'react'

// const Singup = () => {
//   return (
//     <div style={{textAlign:'center',}}><h1>Singup</h1>
//     <div className="container">
//     <div style={{margin:'10px'}}>
//       <input type="text" name='name' placeholder='Name'style={{width:"200px", height:'30px'}} />
//     </div>
//     <div style={{margin:'10px'}}>
//       <input type="text" name='userName' placeholder='userName' style={{width:"200px", height:'30px'}}  />
//     </div>
//     <div style={{margin:'10px'}}>
//       <input type="text" name='email' placeholder='Email' style={{width:"200px", height:'30px'}}  />
//     </div>
//     <div style={{margin:'10px'}}>
//       <input type="text" name='password' placeholder='Password' style={{width:"200px", height:'30px'}}  />
//     </div>
//     <div style={{margin:'10px',}}>
//       <input type="text" name='confirmPassword' placeholder='Confirmpassword' style={{width:"200px",height:'30px' }} />
//     </div>

//      <div>
//     <button className='button' style={{height:'40px', width:'80px', backgroundColor:'white', fontSize:'20px', borderRadius:'10px'}}>Signup</button>
//     </div>
//     </div>


//     </div>
//   )
// }

// export default Singup


import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { FormGroup, FormControl } from '@mui/material';
import { teal } from '@mui/material/colors';
// import { useRouter } from 'next/navigation';  

const Signup = () => {
  // const router=useRouter()
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (formData.name) {
      setFormData(prevState => ({
        ...prevState,
        userName: formData.name.toLowerCase().replace(/ /g, '_')
      }));
    }
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Update userName if name changes
    if (name === 'name') {
      setFormData(prevState => ({
        ...prevState,
        userName: value.toLowerCase().replace(/ /g, '_')
      }));
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   if(name==='name'&&formData.userName.length<=formData.name.length){
  //     setFormData({ ...formData,userName: value .toLowerCase().replace(/ /g,'_')});
  //   }
  // };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // console.log(formData);
    const { name, userName, email, password, confirmPassword } = formData
    const userToSave = {
      name,
      userName,
      email,
      password,
      todos:[]
    }
    // if(formData.name&&formData.userName&&formData.email&&formData.password&&formData.confirmPassword){
    if (name && userName && email && password && confirmPassword) {
      localStorage.setItem(`signup-user-${formData.email}`, JSON.stringify(userToSave))
      // localStorage.setItem(`login-user`, JSON.stringify(formData))
      setFormData({
        name: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      // router.push('/login')
    } else {
      window.alert('all feilds are mandatory')
    }
  };


  return (
    <Grid container spacing={2} sx={{ backgroundColor: teal[300], height: '600px' }}>

      <Grid item xs={12}>

        <FormControl sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ textAlign: "center", fontSize: '50px', fontWeight: 'bold' }}>Sign Up</Typography>
          </Grid>
          <div>
            <FormGroup sx={{ width: '380px', padding: '10px 25px 20px 25px', borderRadius: '20px', alignSelf: 'center', backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgoHuvuMGt_8ovZZra-dq4ZuQCHA3XsBRw&usqp=CAU", backgroundSize: "cover" }}>
              <TextField
                // fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                // fullWidth
                label="Username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                disabled

              />
              <TextField
                // fullWidth
                type='email'
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                // fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                // fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                Sign Up
              </Button>
            </FormGroup>
          </div>
        </FormControl>


      </Grid>
    </Grid>
  );
};

export default Signup;


