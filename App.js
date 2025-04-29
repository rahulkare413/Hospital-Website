import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import HeroBanner from './components/HeroBanner';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroBanner />
      <Header />
      <Services />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
