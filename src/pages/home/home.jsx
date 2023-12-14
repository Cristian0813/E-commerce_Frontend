import React from "react";
import './style/home.css'
import Product from "../product/product";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3 text-center position-relative">
        <div className="image-container">
          <img
            className="img-fluid custom-image rounded"
            src="https://images.unsplash.com/photo-1528384389982-64b0c3dbc32f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
            alt="mujer cargando ropa"
          />
          <div className="image-content">
            <h1 className="larger-title text-light">Fake store</h1>
            <br />
            <p className="card-text text-light">
              Bienvenido a Fake Store, tu destino para productos únicos y divertidos.
            </p>
            <p className="card-text text-light">
              Explora nuestra amplia selección de productos falsos y disfruta de ofertas y descuentos exclusivos en tus compras en línea.
            </p>
            <p className="card-text text-light">
              ¡Encuentra productos falsos de alta calidad a precios increíbles en Fake Store hoy mismo!
            </p>
          </div>
      <hr />
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
