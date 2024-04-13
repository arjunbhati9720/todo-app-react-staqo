
// import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage } from './pages';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function App() {
  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    if (JSON.parse(localStorage.getItem('login-user')).email !== null || undefined) {
      setIsLogin(true)
    }
  }, [isLogin])
  return (
    <Router>
      <Routes>
        <Route path='/' element={isLogin ? <HomePage /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={!isLogin ? <LoginPage /> : <Navigate to={'/'} />} />
        <Route path='/signup' element={!isLogin ? <SignupPage /> : <Navigate to={'/'} />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
