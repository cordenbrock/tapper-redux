import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <>
        <div className="card pt-4 mt-2">
          <h4>{props.name}</h4>
          <hr/>
          <p>Brewery || {props.brand}</p>
          <p>Price -- ABV || ${props.price} -- {props.alcoholContent}%</p>
          <p>Remaining Pint Count || {props.pintQuantity}</p>
          <button className ="btn-dark" onClick={() => props.pourAPint(props.id)}>Pour a Pint!</button>
          <button className ="btn-dark" onClick={() => props.displayKegDetails(props.id)}>Details</button>
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
  displayKegDetails: PropTypes.func,
  pourAPint: PropTypes.func
}

export default Keg;