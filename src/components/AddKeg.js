import React from "react";
import KegForm from './KegForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddKeg(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKeg(
      {
        name: e.target.name.value,
        brand: e.target.brand.value,
        price: e.target.price.value,
        alcoholContent: e.target.alcoholContent.value,
        pintQuantity: e.target.pintQuantity.value,
        id: v4()
      }
    );
  }

  return (
    <>
    <KegForm 
      handleSubmit={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </>
  );
}

AddKeg.propTypes = {
  onNewKeg: PropTypes.func
};

export default AddKeg;