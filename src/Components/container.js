import React, { Component } from 'react';
import Landing from './Landing/Landing';
import About from './About/About';
import Experience from './Experience/Experience';
import Technologies from './Technologies/Technologies';
import ExternalLinks from './ExternalLinks/ExternalLinks';
import Contact from './Contact/Contact';

export default class container extends Component {
  render() {
    return (
      <div class="main-container">
        <div className="sub-container">
          <section className="section scroll-snap center-items">
            <Landing />
          </section>
          <section className="center-items section scroll-snap">
            <About />
          </section>
          <section className="scroll-snap">
            <Experience />
          </section>
          <section className="section scroll-snap">
            <Technologies />
          </section>
          <section className="scroll-snap">
            <ExternalLinks />
          </section>
          <section className="section scroll-snap">
            <Contact />
          </section>
        </div>
      </div>
    );
  }
}
