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

  handleScroll = (event) => {
    if (window.scrollY === 0 ) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }

  render () {

    return (
      <nav className={"navigation " + (this.state.scrolling ? "black" : "")} >
       <NavigationItems />
      </nav>
    )
  }
} 

export default navigation;