// src/components/Card.js
import React from "react";
import "./Card.css"; // You can style your card in a separate CSS file.

const Card = ({ title, description, email }) => {
  return (
    <div  id="cards">
      <div  id="cards-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
