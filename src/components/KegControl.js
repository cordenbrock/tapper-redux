import React from 'react';

class TapControl extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      masterTapList = [],
      formVisibleOnPage = false,
      selectedKeg: null,
      editing: false
    }
  }

  

  render() {
    return (
      <>
        <h1>Tap control</h1>
      </>
    );
  }
}

export default TapControl;
