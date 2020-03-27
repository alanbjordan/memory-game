import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {

  render() {
    const { isFlipped } = this.props;
    const memoryCardInnerClass =
      'MemoryCardInner ' + (isFlipped === true && 'flipped');

    return (
      <div className="MemoryCard" onClick={this.props.pickCard} >
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="Digital Crafts Logo"
            />
          </div>
          <div className="MemoryCardFront">
            <p>{this.props.symbol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;