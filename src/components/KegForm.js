import React from 'react';
import PropTypes from "prop-types";

function KegForm(props) {

  return (
    <>
    <div className={"container"}>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input className="form-control" type='text' name='name' placeholder='Name' required />
          <div className="form-group">
            <input className="form-control" type='text' name='brand' placeholder='Brand' required />
          </div>
            <input className="form-control" type="number" name='price' placeholder='Price' min="0.01" step="0.01" required />
          <div className="form-group">
            <input className="form-control" type="number" name='alcoholContent' placeholder='Alcohol Content' min="0.01" step="0.01" required/>
          </div>          
          <div className="form-group">
            <input className="form-control" type="number" name='pintQuantity' placeholder='Quantity (full keg = 124)' min="1" step="1" max="124" required/>
          </div>
          <div className="form-group">
          <button className="btn-primary" type='submit'>{props.buttonText}</button>
          </div>
        </div>
      </form>
    </div>

    </>
  );
}

KegForm.propTypes = {
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.string
}

export default KegForm;