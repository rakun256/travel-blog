// App.js

import './App.css';
import Navbar from './Components/NavBar/navbar';
import MainPage from './Pages/MainPage/mainPage';
import AboutPage from './Pages/AboutPage/aboutPage';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import BlogMainPage from './Pages/BlogMainPage/blogMainPage';
import MobileNavbar from './Components/MobileNavbar/mobileNavbar';
import ContactPage from './Pages/ContactPage/contactPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Helmet>
      <title>Avventuriosa</title>
        <meta name="description" content="Welcome, adventurers! We are Avventuriosa, a group of mathematics
          engineering students who have embarked on journeys to explore the
          world. We have a passion for discovering the captivating beauty of
          nature, the profound traces of history, and the richness of cultures.
          Every moment we open the door to a new adventure, we feel the
          excitement in our hearts, and we're here to share that excitement with
          you. Avventuriosa was founded with the aim of sharing our adventures
          that take us to unique destinations around the globe. Here you can
          find our experiences, inspiring stories, and practical tips gathered
          during our travels. Our articles serve as guides for travel
          enthusiasts, designed to inspire those who wish to explore new places.
          We emphasize not only the importance of geographical exploration but
          also the significance of building bridges between people and engaging
          in cultural exchange. Because we believe that traveling not only
          allows us to see new places but also brings us closer together as
          global citizens. Welcome to Avventuriosa. Are you ready to explore the
          world together?" />
          <link rel="icon" href="/Images/adv_logo_compass.png" />
          <link rel="apple-touch-icon" href="/Images/adv_logo_compass.png" />
      </Helmet>
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
