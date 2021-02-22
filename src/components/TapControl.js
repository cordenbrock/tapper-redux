import React from 'react';
import { connect } from 'react-redux';
import AddKeg from './AddKeg';
import KegDetails from './KegDetails';
import TapList from './TapList';
import EditKeg from './EditKeg';
import PropTypes from "prop-types";
import * as a from './../actions';


class TapControl extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      editing: false
    }
  }

  handleVisiblePage = () => {
    const { dispatch } = this.props;
    if (this.props.selectedTap != null) {
      this.setState({
        editing: false
      });
    dispatch(a.deselectTap());
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
    this.setState({editing: true});
  }

  handleEditKegFormSubmission = (tapToEdit) => {
    const { dispatch } = this.props;
    dispatch(a.addTap(tapToEdit));
    this.setState({
      editing: false,
    });
    dispatch(a.deselectTap());
  }

  handlePintPour = (selectedTapId) => {
    const newMasterTapList = this.props.masterTapList.map(keg => {
      if (keg.id === selectedTapId && keg.pintQuantity > 0) {
        keg.pintQuantity--;
      }
      keg.pintQuantity = keg.pintQuantity.toString();
      return keg;
    })
    // this.setState({
    //   masterTapList: [...newMasterTapList]
    // })
  }

  handleRestock = (selectedTapId) => {
    const newMasterTapList = this.props.masterTapList.map(keg => {
      if (keg.id === selectedTapId) {
        keg.pintQuantity = "124";
      }
      return keg;
    })
    // this.setState({
    //   masterTapList: [...newMasterTapList]
    // })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKeg keg={this.props.selectedTap} onEditKegFormSubmission={this.handleEditKegFormSubmission}/>
      buttonText = "Return to Keg List"
    } else if (this.props.selectedTap != null) {
      currentlyVisibleState = <KegDetails keg={this.props.selectedTap} onDeleteKeg={this.handleDeleteKeg} onEditKeg={this.handleEditKeg} onRestockKeg={this.handleRestock}/>
      buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddKeg} />
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <TapList tapList={this.props.masterTapList} onKegSelection={this.handleSelectedTap} onPintPour={this.handlePintPour} />
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
};


const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedTap: state.selectedTap
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
