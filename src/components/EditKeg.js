import React from 'react';
import KegForm from './KegForm';
import PropTypes from 'prop-types';

function EditKeg(props) {
  function handleEditKegFormSubmission(e) {
    e.preventDefault();
    props.onEditKegFormSubmission(
      {
        name: e.target.name.value,
        brand: e.target.brand.value,
        price: e.target.price.value,
        alcoholContent: e.target.alcoholContent.value,
        pintQuantity: e.target.pintQuantity.value,
        id: props.keg.id
      }
    );
  }

  return (
    <>
      <KegForm
        handleSubmit={handleEditKegFormSubmission}
        buttonText={"Update Keg"} />
    </>
  );
}

EditKeg.propTypes = {
  keg: PropTypes.object,
  onEditKegFormSubmission: PropTypes.func
}

export default EditKeg;