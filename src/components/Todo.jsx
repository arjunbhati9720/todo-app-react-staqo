import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Typography, Paper } from '@mui/material';
import moment from 'moment';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [title, setTitle] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startTime, setStartTime] = useState('');
    const [description, setDescription] = useState('');
    const [userEmail, setUserEmail] = useState('')

    useEffect(() => {
        setUserEmail(JSON.parse(localStorage.getItem('login-user')).email)
        setStartTime(moment(new Date()).format('YYYY-MM-DDTHH:mm'))
        let allTodos = JSON.parse(localStorage.getItem(`signup-user-${userEmail}`))
        if (allTodos) {
            allTodos.forEach((ele) => {
                if (ele.email === userEmail) {
                    setTodos([...todos, ele]);
                }
            })
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && startTime && endTime && description) {
            const newTodo = {
                id,
                title,
                startTime,
                endTime,
                description,
                email: userEmail
            };
            localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
            // getting the todos for particular user
            let allTodos = JSON.parse(localStorage.getItem('todos'))
            allTodos.forEach((ele) => {
                if (ele.email === userEmail) {
                    setTodos([...todos, ele]);
                }
            })
            setStartTime(moment(new Date()).format('YYYY-MM-DDTHH:mm'))
            setId(id + 1);
            setTitle('');
            setEndTime('');
            setDescription('');
        };

    }
    const handleDelete = () => {
        setTodos(todos.splice(0, 1))
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>To-Do App</Typography>
            <Paper style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                value={userEmail}
                                // onChange={(e) => setUserEmail(e.target.value)}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Start Time"
                                variant="outlined"
                                type="datetime-local"

                                value={startTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="End Time"
                                variant="outlined"
                                type="datetime-local"
                                value={endTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                variant="outlined"
                                multiline
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">Add Todo</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>Todos</Typography>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Typography variant="h6">ID: {todo.id}</Typography>
                        <Typography variant="body1">Title: {todo.title}</Typography>
                        <Typography variant="body1">Email: {userEmail}</Typography>
                        <Typography variant="body1">Start Time: {todo.startTime}</Typography>
                        <Typography variant="body1">End Time: {todo.endTime}</Typography>
                        <Typography variant="body2">Description: {todo.description}</Typography>
                        <button type='submit' variant='contained' color='primary'>Update</button>
                        <button type='submit' variant='contained' color='primary' onClick={() => handleDelete}>Delete</button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Todo;


















// import React, { useState } from 'react';
// import { TextField, Button, Container, Grid, Typography, Paper } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name.trim() || !endTime.trim() || !description.trim()) return;
//     const newTodo = {
//       id: uuidv4(),
//       name,
//       endTime,
//       description
//     };
//     setTodos([...todos, newTodo]);
//     setId('');
//     setName('');
//     setEndTime('');
//     setDescription('');
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h2" align="center" gutterBottom>To-Do App</Typography>
//       <Paper style={{ padding: '20px' }}>
//         <form onSubmit={handleSubmit} autoComplete="off">
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="ID"
//                 variant="outlined"
//                 value={id}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 variant="outlined"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="End Time"
//                 variant="outlined"
//                 type="datetime-local"
//                 value={endTime}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 onChange={(e) => setEndTime(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 variant="outlined"
//                 multiline
//                 rows={3}
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary">Add Todo</Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//       <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>Todos</Typography>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <Typography variant="h6">{todo.name}</Typography>
//             <Typography variant="body1">End Time: {todo.endTime}</Typography>
//             <Typography variant="body2">{todo.description}</Typography>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default Todo;



















// import React from 'react'

// const Todo = () => {
//   return (
//     <div>
//         <h1>To-Do App</h1>

//         <form action="">
//             <input
//              type="text"
//              placeholder='0'
//              />
//              <input
//              type="text"
//              placeholder='name'
//              />
//              <input
//              type="text"
//              placeholder='endTime'
//              />
//              <input
//              type="text"
//              placeholder='description'
//              />
//         </form>
//          </div>
//   )
// }

// export default Todo


// import React from 'react';
// import { TextField, Button, Container, Grid } from '@mui/material';

// const Todo = () => {
//   return (
//     <Container maxWidth="sm">
//       <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ marginTop: '20px' }}>
//         <Grid item xs={12}>
//           <h1>To-Do App</h1>
//         </Grid>
//         <Grid item xs={12}>
//           <form noValidate autoComplete="off">
//             <Grid container spacing={2}>
//               <Grid item xs={3}>
//                 <TextField
//                   fullWidth
//                   label="id"
//                   variant="outlined"
//                   placeholder='0'
//                 />
//               </Grid>
//               <Grid item xs={9}>
//                 <TextField
//                   fullWidth
//                   label="Task Name"
//                   variant="outlined"
//                   placeholder='Name'
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <TextField
//                   fullWidth
//                   label="End Time"
//                   variant="outlined"
//                   placeholder='End Time'
//                 />
//               </Grid>
//               <Grid item xs={9}>
//                 <TextField
//                   fullWidth
//                   label="Description"
//                   variant="outlined"
//                   placeholder='Description'
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant="contained" color="primary">Add Todo</Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }

// export default Todo;
