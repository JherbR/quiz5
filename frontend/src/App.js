import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
