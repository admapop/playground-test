import React from 'react';

import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import CardContainer from './components/card-container/CardContainer';
import Section from './components/section/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CardContainer />
      <Section imageLeft src={require('./assets/banners/banner-we-are.jpg')} title='we are.' button='THE PLAYERS >'>
        <p>Consectetur adipiscing elit.</p>
        <p>Nulla condimentum tortor sem.</p>
      </Section>
      <Section src={require('./assets/banners/banner-we-do.jpg')} title='we do.' button='THE PROJECTS >'>
        <p>Consectetur adipiscing elit.</p>
        <p>Nulla condimentum tortor sem.</p>
      </Section>
      <Section imageLeft src={require('./assets/banners/banner-carrers.jpg')} title='careers' button='THE POSITIONS >'>
        <p>Consectetur adipiscing elit.</p>
        <p>Nulla condimentum tortor sem.</p>
      </Section>

    </div>
  );
}

export default App;
