import React from 'react';
import { Component } from 'react';

import Navbar from './navbar';
import ProfilePic from './profile_pic';
import AboutMe from './about_me';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <ProfilePic />
          <AboutMe />
        </div>
    );
  }
}
