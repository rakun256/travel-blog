import React from "react";
import './aboutPage.css'
import Footer from '../../Components/Footer/footer' 
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <Helmet>
      <title>About Page - Adventurista</title>
        <meta name="description" content="Welcome, adventurers! We are Adventurista, a group of mathematics
          engineering students who have embarked on journeys to explore the
          world. We have a passion for discovering the captivating beauty of
          nature, the profound traces of history, and the richness of cultures.
          Every moment we open the door to a new adventure, we feel the
          excitement in our hearts, and we're here to share that excitement with
          you. Adventurista was founded with the aim of sharing our adventures
          that take us to unique destinations around the globe. Here you can
          find our experiences, inspiring stories, and practical tips gathered
          during our travels. Our articles serve as guides for travel
          enthusiasts, designed to inspire those who wish to explore new places.
          We emphasize not only the importance of geographical exploration but
          also the significance of building bridges between people and engaging
          in cultural exchange. Because we believe that traveling not only
          allows us to see new places but also brings us closer together as
          global citizens. Welcome to Adventurista. Are you ready to explore the
          world together?" />
      </Helmet>
        <div className="about-logo">
            <img alt="." src="/Images/adv_logo.png"></img>
        </div>
      <div className="about-title">
        <h1>What is Adventurista?</h1>
      </div>
      <div className="about-page-def">
        <img alt="." src="/Images/globe.svg"></img>
      <div className="about-description">
        <p>
          Welcome, adventurers! We are Adventurista, a group of mathematics
          engineering students who have embarked on journeys to explore the
          world. We have a passion for discovering the captivating beauty of
          nature, the profound traces of history, and the richness of cultures.
          Every moment we open the door to a new adventure, we feel the
          excitement in our hearts, and we're here to share that excitement with
          you. Adventurista was founded with the aim of sharing our adventures
          that take us to unique destinations around the globe. Here you can
          find our experiences, inspiring stories, and practical tips gathered
          during our travels. Our articles serve as guides for travel
          enthusiasts, designed to inspire those who wish to explore new places.
          We emphasize not only the importance of geographical exploration but
          also the significance of building bridges between people and engaging
          in cultural exchange. Because we believe that traveling not only
          allows us to see new places but also brings us closer together as
          global citizens. Welcome to Adventurista. Are you ready to explore the
          world together?
        </p>
      </div>
      </div>
      
      <Footer /> 
    </div>
    
  );
};

export default AboutPage;
