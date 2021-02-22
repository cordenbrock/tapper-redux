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
      selectedKeg: null,
      editing: false
    }
  }

  handleVisiblePage = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddKeg = (newTap) => {
    const { dispatch } = this.props;
    const action = a.addTap(newTap);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSelectedKeg = (selectedKegId) => {
    const selectedKegDetails = this.props.masterTapList[selectedKegId];
    this.setState({
      selectedKeg: selectedKegDetails
    });
  }

  handleDeleteKeg = (selectedKegId) => {
    const { dispatch } = this.props;
    const action = a.deleteTap(selectedKegId);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleEditKeg = () => {
    this.setState({editing: true});
  }

  handleEditKegFormSubmission = (tapToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, pintQuantity, id } = tapToEdit;
    const action = a.addTap(tapToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handlePintPour = (selectedKegId) => {
    const newMasterTapList = this.props.masterTapList.map(keg => {
      if (keg.id === selectedKegId && keg.pintQuantity > 0) {
        keg.pintQuantity--;
      }
      keg.pintQuantity = keg.pintQuantity.toString();
      return keg;
    })
    // this.setState({
    //   masterTapList: [...newMasterTapList]
    // })
  }

  handleRestock = (selectedKegId) => {
    const newMasterTapList = this.props.masterTapList.map(keg => {
      if (keg.id === selectedKegId) {
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
      currentlyVisibleState = <EditKeg keg={this.state.selectedKeg} onEditKegFormSubmission={this.handleEditKegFormSubmission}/>
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg={this.state.selectedKeg} onDeleteKeg={this.handleDeleteKeg} onEditKeg={this.handleEditKeg} onRestockKeg={this.handleRestock}/>
      buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddKeg} />
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <TapList tapList={this.props.masterTapList} onKegSelection={this.handleSelectedKeg} onPintPour={this.handlePintPour} />
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
  formVisibleOnPage: PropTypes.bool
};


const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
