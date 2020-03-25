import React, { Component } from "react";
import './MemoryCard.css'

class MemoryCard extends Component {
    render() {
      return (
        <div className="header">
          <div className="MemoryCard">
            <div className="MemoryCardInner">
              <div className="MemoryCardFront">
                ∆
              </div>              
              <div className="MemoryCardBack">
              <img src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'/>
              </div>

            </div>
          </div>
        </div>
      );
    }
  }

export default MemoryCard;