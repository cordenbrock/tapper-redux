import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import Container from 'react-bootstrap/Container';

function App(){
  

  return ( 
    <>
      <Container fluid>
        <Header />
        <KegControl />   
      </Container>
    </>
  );
}

export default App;
