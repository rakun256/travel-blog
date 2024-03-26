import React from "react";
import './card.css'
import ButtonCustom from "../Button/button";

const Card = () => {
  return (
    <div class="card card-blog fill-light">
      <div class="card-image">
        <img
          class="img"
          src="https://source.unsplash.com/collection/582860/660x440"
          alt="."
        />
      </div>

      <div class="content">
        <h6 class="card-content-title">Cards</h6>
        <p class="card-content-description">
          Cards are a part of the material design guidelines, but beyond that
          they're easy to use and look great on desktop and mobile.
        </p>
        <ButtonCustom title={"Read More"}/>
      </div>
      
    </div>
  );
};

export default Card;
