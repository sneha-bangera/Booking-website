import React from "react"
import './Items.css'
import star from '../assets/star_rating.png'
// import { Link } from "react-router-dom";

function Item(props) {

  return (
    <div className="item">
      {/* <Link to={`/recipe/${props.id}`}><img src={props.image} alt="" /></Link> */}
      <img src={props.image} alt="" />
      <p style={{color: 'green', fontSize: 12, marginBottom:0}}>{props.location}</p>
      <p className="item-name">{props.name}</p>
      <p className="item-price-star">${props.price} Per Night | ⭐⭐⭐⭐ {props.rating}</p>
    </div>
  )
}
export default Item;