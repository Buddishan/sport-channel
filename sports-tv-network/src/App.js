import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Live from './pages/Live';
import Schedule from './pages/Schedule';
import OnDemand from './pages/OnDemand';
import Navigation from './components/Navigation';
import styled from 'styled-components';
import Footer from './components/Footer';
const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/on-demand" element={<OnDemand />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;