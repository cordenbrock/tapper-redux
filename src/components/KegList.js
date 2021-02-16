import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <div className="container">
      <h2>Tap List</h2>
        <hr/>
        <div className="row">
          <div className='col-md-12'>
          {props.kegList.map(keg =>
        
            <Keg
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              pintQuantity={keg.pintQuantity}
              id={keg.id}
              key={keg.id}
              displayKegDetails = {props.onKegSelection}
              pourAPint = {props.onPintPour}
            />
          )}
          </div>
        </div>
      </div>
    </>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  displayKegDetails: PropTypes.func
}

export default KegList;