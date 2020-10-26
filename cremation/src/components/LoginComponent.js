import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {}
  }

  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
}

handleSubmit(event) {
  event.preventDefault();
  window.alert(JSON.stringify(this.state.formValues));
}
  render() {
    return (
      <div class="container vertical center">
        <div class="row m-3 p-3">
          <Button outline><a href="/home"><img src="./home-24px.svg" /></a></Button>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 ">
            <h1 class="display-1">
              <p class="text-center">
                Cremate
              </p>
            </h1>
          </div>
        </div>
  <div class="row row-header">
      <div class="col mx-auto">
          <form id="contact-form" class="form" role="form" onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-group">
                  <label class="form-label" for="name">Your Name</label>
                  <input type="text" class="form-control" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} id="name" name="name" placeholder="Your name" tabindex="1" required />
              </div>                            
              <div class="form-group">
                  <label class="form-label" for="email">Your Email</label>
                  <input type="email" class="form-control" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}  id="email" name="email" placeholder="Your Email" tabindex="2" required />
              </div>    
              <div class="form-group">
                <Button type="submit" color="dark" >
                  Cremate
                </Button>
              </div>  
          </form>
      </div>
  </div>

      </div>
            
            
        );
    }
}
export default Login;