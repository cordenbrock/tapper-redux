import React from 'react';
import Container from 'react-bootstrap/Container';
import Tapper from "./../img/tapper.jpg";

function Header() {

  return (
    <>
    <Container fluid className="mb-3 header-bg">
      <img src={Tapper} alt="header banner from tapper arcade game" />
    </Container>
    </>
  );
}

export default Header;