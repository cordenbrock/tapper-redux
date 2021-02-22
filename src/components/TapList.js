import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <>
      <div className="container">
      <h1>Tap List</h1>
        <hr/>
        <div className="row">
          <div className='col-md-12'>
          {Object.values(props.tapList).map(keg =>
        
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

TapList.propTypes = {
  tapList: PropTypes.object,
  displayKegDetails: PropTypes.func
}

export default TapList;