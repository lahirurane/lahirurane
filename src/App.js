import React, { Component } from 'react';
import './App.scss';

import Container from './Components/container';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Container></Container>
      <Footer />
    </div>
  );
}

export default App;
