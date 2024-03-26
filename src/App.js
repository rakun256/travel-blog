// App.js

import './App.css';
import Navbar from './Components/NavBar/navbar';
import MainPage from './Pages/MainPage/mainPage';
import AboutPage from './Pages/AboutPage/aboutPage';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
