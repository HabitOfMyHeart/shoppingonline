import React, { Component } from 'react';
import home_img from '../asset/home_img.jpg';
class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img
          src={home_img}
          width="1000px"
          height="600px"
          alt=""
        />
      </div>
    );
  }
}

export default Home;
