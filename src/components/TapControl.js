import React from 'react';
import { connect, Provider } from 'react-redux';
import AddKeg from './AddKeg';
import KegDetails from './KegDetails';
import TapList from './TapList';
import EditKeg from './EditKeg';
import PropTypes from "prop-types";
import * as a from './../actions';


class TapControl extends React.Component {
  constructor(props) {
  super(props)
  }

  handleVisiblePage = () => {
    const { dispatch } = this.props;
    if (this.props.selectedTap != null) {
    dispatch(a.deselectTap());
      if (this.props.isEditing) {
      dispatch(a.toggleEditing());
      }
    } else {
      dispatch(a.toggleForm());
    }
  }

  handleAddKeg = (newTap) => {
    const { dispatch } = this.props;
    dispatch(a.addTap(newTap));
    dispatch(a.toggleForm());
  }

  handleSelectedTap = (selectedTapId) => {
    const selectedTap = this.props.masterTapList[selectedTapId];
    const { dispatch } = this.props;
    const action = a.selectTap(selectedTap)
    dispatch(action);
  }

  handleDeleteKeg = (selectedTapId) => {
    const { dispatch } = this.props;
    dispatch(a.deleteTap(selectedTapId));
    dispatch(a.deselectTap());
  }

  handleEditKeg = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleEditing());
  }

  handleEditKegFormSubmission = (tapToEdit) => {
    const { dispatch } = this.props;
    dispatch(a.addTap(tapToEdit));
    dispatch(a.toggleEditing());
    dispatch(a.deselectTap());
  }

  handlePintPour = (selectedTapId) => {
    const selectedTap = this.props.masterTapList[selectedTapId];
    const { dispatch } = this.props;
    if (selectedTap.pintQuantity > 0) {
      dispatch(a.pourAPint(selectedTap));
    }
  }

  handleRestock = (selectedTapId) => {
    const selectedTap = this.props.masterTapList[selectedTapId];
    const { dispatch } = this.props;
    dispatch(a.restockTap(selectedTap));
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.isEditing) {
      currentlyVisibleState = <EditKeg keg={this.props.selectedTap} onEditKegFormSubmission={this.handleEditKegFormSubmission}/>;
      buttonText = "Return to Keg List";
    } else if (this.props.selectedTap != null) {
      currentlyVisibleState = <KegDetails keg={this.props.selectedTap} onDeleteKeg={this.handleDeleteKeg} onEditKeg={this.handleEditKeg} onRestockKeg={this.handleRestock}/>;
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddKeg} />;
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <TapList tapList={this.props.masterTapList} onKegSelection={this.handleSelectedTap} onPintPour={this.handlePintPour} />;
      buttonText = "Add Keg";
    }

    return (
      <>
        <div className="container fluid">
          {currentlyVisibleState}
          <hr/>
          <button className="btn btn-light mb-4" onClick={this.handleVisiblePage}>{buttonText}</button>
        </div>
      </>
    );
  }
}

TapControl.propTypes = {
  masterTapList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedTap: PropTypes.object,
  isEditing: PropTypes.bool
};


const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedTap: state.selectedTap,
    isEditing: state.isEditing
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
