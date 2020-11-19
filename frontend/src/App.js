import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components/Containers
import Header from './components/Header';
import Footer from './components/Footer';

// Import Bootstrap components
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>Body</Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
