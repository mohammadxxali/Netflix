import React, { Component } from 'react';

import NavigationItems from '../../components/NavigationItems/NavigationItems';


class navigation extends Component {
 state = {
   scrolling: false
 }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll); 
  }