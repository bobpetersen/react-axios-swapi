import React, { Component } from 'react';

class NewStar extends Component {
  render() {
    return (
      <p>
        The new star is {this.props.newStar.name} and has a diameter of {this.props.newStar.diameter} suns.
      </p>
    );
  }
}

export default NewStar;