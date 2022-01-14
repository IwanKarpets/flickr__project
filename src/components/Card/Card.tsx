import React from "react";
import "./Card.scss";

interface CardProps{
  children: JSX.Element | JSX.Element[];
}

const Card = ({ children }:CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
