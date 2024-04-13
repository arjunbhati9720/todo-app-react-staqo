
// import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage } from './pages';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';


function App() {
  // localStorage.setItem('user', 'jayesh')
  // let user;
  // useEffect(() => {
  //   user = localStorage.getItem('user')
  // })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/todo' element={<TodoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
