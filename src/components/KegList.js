import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {

  return (
    <>
      <div>
      <h2>Tap List</h2>
      <hr/>
        {props.kegList.map(keg =>
            <Keg 
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              pintQuantity={keg.pintQuantity}
              id={keg.id}
              key={keg.id} />)
        }
      </div>
    </>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;