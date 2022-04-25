import React from "react";

import {Navbar,Container,Nav} from "react-bootstrap";

import "../compoment/css/navbar.css";

const CustomNavbar=()=>{

        return(

            <React.Fragment>

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Meet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Profil</Nav.Link>
                           
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </React.Fragment>
        )

}

export default CustomNavbar;