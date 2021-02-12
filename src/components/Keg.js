import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <>
      <div className="card">
        <h4 onClick={() => props.displayKegDetails(props.id)}>{props.name}</h4>
        <hr/>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.pintQuantity}</p>
      </div>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintQuantity: PropTypes.string,
  displayKegDetails: PropTypes.func
}

export default Keg;