import React, { Component } from 'react';

import Card from './Card';

export class CardView extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.changeView}>
          <Card title="TIFU By Becoming an Accidental Active School Shooter" />
        </div>
      </div>
    );
  }
}

export default CardView;