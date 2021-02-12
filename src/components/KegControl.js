import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';

class TapControl extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      masterTapList: [
        {
          name: "keg name",
          brand: "brand name",
          price: 10,
          alcoholContent: 5,
          pintQuantity: 124
        }
      ],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleVisiblePage = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingKegToList = (newKeg) => {
    this.setState({
      masterTapList: [...this.state.masterTapList, newKeg],
      formVisibleOnPage: false
    })
    console.log(this.state.masterTapList);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddKeg onNewKeg={this.handleAddingKegToList} />
      buttonText = "View Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.masterTapList} />
      buttonText = "Add Keg";
    }

    return (
      <>
        <h2>Tap control</h2>
        {currentlyVisibleState}
        <button className={"btn-primary"} onClick={this.handleVisiblePage}>{buttonText}</button>
      </>
    );
  }
}

export default TapControl;
