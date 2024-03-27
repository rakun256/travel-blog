// App.js

import './App.css';
import Navbar from './Components/NavBar/navbar';
import MainPage from './Pages/MainPage/mainPage';
import AboutPage from './Pages/AboutPage/aboutPage';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import BlogMainPage from './Pages/BlogMainPage/blogMainPage';
import MobileNavbar from './Components/MobileNavbar/mobileNavbar';
import ContactPage from './Pages/ContactPage/contactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="navbar-app"><Navbar className="navbar-app" /></div>
      <div className="mobile-navbar-app"><MobileNavbar className="mobile-navbar-app"/></div>
        <Routes>
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogMainPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
