import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [
        'A simple guy who wants to create really cool things',
        'Elegant solutions in the least amount of time',
        '#1 goal - to meet your needs and deadline'
      ]
    }
    this.selectRandomMessage = this.selectRandomMessage.bind(this);
  }

  selectRandomMessage() {
    return Math.floor(Math.random() * this.state.message.length);
  }

  render() {
    return (
      <div className="Home">
        <div className="Home__background-filter"></div>
        <div className="Home__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--sub-1">Frontend Developer</span>
            <span className="heading-primary--main">Oleksii Bespalko</span>
            <span className="heading-primary--sub">{this.state.message[this.selectRandomMessage()]}</span>
          </h1>
          <a data-scroll href="#section-projects" id="Home-btn" className="btn btn--blue btn--animated">Projects <span className="btn__arrow">&darr;</span></a>
        </div>
      </div>
    );
  }
}