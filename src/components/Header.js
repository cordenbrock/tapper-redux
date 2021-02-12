import React from 'react';
import Container from 'react-bootstrap/Container';

function Header() {
  const tempStyle = {
    backgroundColor: "#e28743",
    textAlign: "center"
  }
  return (
    <>
    <Container>
      <h1 style={tempStyle}>Tapper</h1>
    </Container>
    <hr/>
    <hr/>
    </>
  );
}

export default Header;