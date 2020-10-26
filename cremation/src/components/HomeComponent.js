import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Home extends Component {

    render(){
      return(
        <div className="App">
          <header className="App-header">
            <img src="./blueflame.gif" roundedCircle="roundedCircle"/>
              <div class="row">
                <div class="col-12 col-sm-12 ">
                  <h1 class="display-1">
                    <p class="text-center">
                      Blue Flames of Cremation
                    </p>
                  </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 align-items-center">
                  <Link to="/login">
                    <Button outline><span className="fa fa-sign-in fa-lg"></span> Coming Soon</Button>
                  </Link>
                </div>
              </div>
          </header>
        </div>
);
    }
}

export default Home;
