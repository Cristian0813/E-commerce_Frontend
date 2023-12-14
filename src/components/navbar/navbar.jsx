import React from "react";
import { Outlet, Link } from "react-router-dom";
import './style/navbar.css'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { connect } from 'react-redux';

const NavBar = ({ cartItems }) => {
    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    E-commerce
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                    <Nav.Link as={Link} to="/NuestrosProductos">Nuestros productos</Nav.Link>
                                    <Nav.Link as={Link} to="/SobreNosotros" className="text-dark">Sobre nosotros</Nav.Link>
                                    <Nav.Link as={Link} to="/Contacto">Contáctanos</Nav.Link>
                                    <Nav.Link as={Link} to="/Compra" className="nav-link black-border" disabled={cartItems.length === 0}>
                                        <img src="../src/assets/image/cart-fill.svg" alt="Carrito de compras" />
                                        <span>Carrito ({cartItems.length})</span>
                                    </Nav.Link>

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Outlet />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
    };
};

export default connect(mapStateToProps)(NavBar);
