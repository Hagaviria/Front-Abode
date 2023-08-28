import './App.css';
import React from 'react'; // Asegúrate de importar React
import Header from './components/Headers';
import IconFilter from './components/Icon-filter';
import Cards from './components/Card/card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>

        
       
        
    
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <IconFilter />
      <Cards />
    </div>
  );
}

export default App;