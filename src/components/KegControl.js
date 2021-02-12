import React from 'react';
import AddKeg from './AddKeg';
import KegDetails from './KegDetails';
import KegList from './KegList';
// import EditKeg from './EditKeg';

class TapControl extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      masterTapList: [
        {
          name: "keg name",
          brand: "brand name",
          price: "10",
          alcoholContent: "5",
          pintQuantity: "124",
          id: "abc123"
        }
      ],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleVisiblePage = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        formVisibleOnPage: false
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

  handleEditKeg = (selectedKeg) => {

  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      console.log("editing")
    } else if (this.state.selectedKeg) {
      currentlyVisibleState = <KegDetails keg={this.state.selectedKeg} onDeleteKeg={this.handleDeleteKeg} onEditKeg={this.handleEditKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddKeg} />
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterTapList} onKegSelection={this.handleSelectedKeg} />
      buttonText = "Add Keg";
    }

    return (
      <>
        {currentlyVisibleState}
        <button className={"btn-primary"} onClick={this.handleVisiblePage}>{buttonText}</button>
      </>
    );
  }
}

export default TapControl;
