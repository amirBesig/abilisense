import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo  from '../../logo.png';
import './navigationbar.css';
import fire from '../login/config/fire';


const Styles = styled.div`
  .navbar { background-color: #222; height: 10vh}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

class Navigationbar  extends Component {

  logout() {
    fire.auth().signOut();
  }


    render(){
        return(
        <div>   
           <Styles>
    <Navbar expand="lg">
    <img src = {logo} className="Nav-logo" alt="logo"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Nav.Link href="/">Hello User</Nav.Link>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link onClick = {this.logout}>LogOut</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
        </div>
     )
 };
   
}

export default Navigationbar ;