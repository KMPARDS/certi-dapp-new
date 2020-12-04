import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import Swal from 'sweetalert2';

type State = {
  bunchModal: boolean;
};

export class ESCloud extends Component<State> {
  state: State = {
    bunchModal: true,
  };

  render() {
    return (
      <div className="homebg">
        <div className="container main-section">
          <div className="rows text-center mt80 mb30">
            <div className="header-title">
              <h3>ESCLOUD</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
