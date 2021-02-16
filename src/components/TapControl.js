import React from 'react';
import AddKeg from './AddKeg';
import KegDetails from './KegDetails';
import KegList from './KegList';
import EditKeg from './EditKeg';
import { kegStock } from './../defaults/defaultStock';

class TapControl extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      masterTapList: [...kegStock],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleVisiblePage = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        formVisibleOnPage: false,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddKeg = (newKeg) => {
    this.setState({
      masterTapList: [...this.state.masterTapList, newKeg],
      formVisibleOnPage: false
    });
  }

  handleSelectedKeg = (selectedKegId) => {
    const selectedKegDetails = this.state.masterTapList.filter(keg => keg.id === selectedKegId)[0]
    this.setState({
      selectedKeg: selectedKegDetails
    });
  }

  handleDeleteKeg = (selectedKegId) => {
    const newMasterTapList = this.state.masterTapList.filter(keg => keg.id !== selectedKegId)
    this.setState({
      masterTapList: [...newMasterTapList],
      selectedKeg: null
    });
  }

  handleEditKeg = () => {
    this.setState({editing: true});
  }

  handleEditKegFormSubmission = (kegToEdit) => {
    const editedMasterTapList = this.state.masterTapList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterTapList: editedMasterTapList,
      editing: false,
      selectedKeg: null
    });
  }

  // handlePintPour = (selectedKegId) => {
  //   const newMasterTapList = this.state.masterTapList.map(keg => {
  //     if (keg.id === selectedKegId) {
  //       keg.pintQuantity--;
  //     };
  //   })
  //   this.setState({
  //     masterTapList: [...newMasterTapList]
  //   })
  // }

  handlePintPour = (selectedKegId) => {
    const newMasterTapList = this.state.masterTapList;
    newMasterTapList.map(keg => {
      if (keg.id === selectedKegId) {
        keg.pintQuantity--;
      };
    })
    this.setState({
      masterTapList: [...newMasterTapList]
    })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKeg keg={this.state.selectedKeg} onEditKegFormSubmission={this.handleEditKegFormSubmission}/>
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg={this.state.selectedKeg} onDeleteKeg={this.handleDeleteKeg} onEditKeg={this.handleEditKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddKeg} />
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterTapList} onKegSelection={this.handleSelectedKeg} onPintPour={this.handlePintPour} />
      buttonText = "Add Keg";
    }

    return (
      <>
        {currentlyVisibleState}
        <hr/>
        <button className="btn-primary mb-4" onClick={this.handleVisiblePage}>{buttonText}</button>
        
      </>
    );
  }
}

export default TapControl;
