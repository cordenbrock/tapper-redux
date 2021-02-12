import React from "react";
import PropTypes from 'prop-types';


function KegDetails(props){
  const { keg, onDeleteKeg, onEditKeg } = props;

  return (
    <>
      <div>
        <h1>Keg Details</h1>
        <hr/>
        <p>{keg.name}</p>
        <p>{keg.brand}</p>
        <p>{keg.price}</p>
        <p>{keg.pintQuantity}</p>
        <p>{keg.alcoholContent}</p>
        <hr/>
        <button onClick={()=> onDeleteKeg(keg.id)}>Delete Keg</button>
        <button onClick={()=> onEditKeg(keg.id)}>Edit Keg</button>
      </div>
    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetails;