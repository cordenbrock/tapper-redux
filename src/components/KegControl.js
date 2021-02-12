import React from 'react';

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

  

  render() {
    return (
      <>
        <h2>Tap control</h2>
      </>
    );
  }
}

export default TapControl;
