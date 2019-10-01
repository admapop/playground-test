import React from 'react';

import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import CardContainer from './components/card-container/CardContainer';
import Section from './components/section/Section';
import TabContainer from './components/tab-container/TabContainer';
import Tab from './components/tab/Tab';
import ContactForm from './components/contact-form/ContactForm';

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
      <Section imageLeft src={require('./assets/banners/banner-carrers.jpg')} title='careers.' button='THE POSITIONS >'>
        <p>Consectetur adipiscing elit.</p>
        <p>Nulla condimentum tortor sem.</p>
      </Section>
      <TabContainer>
        <Tab>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis praesentium minus nulla voluptatem nostrum dolor, ea suscipit non numquam quaerat culpa cupiditate doloribus amet sunt corporis distinctio a eius quia.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis praesentium minus nulla voluptatem nostrum dolor, ea suscipit non numquam quaerat culpa cupiditate doloribus amet sunt corporis distinctio a eius quia.
          </p>
        </Tab>
        <Tab>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis praesentium minus nulla voluptatem nostrum dolor, ea suscipit non numquam quaerat culpa cupiditate doloribus amet sunt corporis distinctio a eius quia.</p>
        </Tab>
      </TabContainer>
      <ContactForm />
    </div>
  );
}

export default App;
