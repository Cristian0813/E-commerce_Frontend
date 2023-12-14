import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';

import './style/product.css';
import Filter from '../../components/filter/filter';

import { connect } from 'react-redux';
import { addToCart } from '../redux/action';
import ShowCart from '../cart/showcart';
import ButtonAdd from '../../components/button/buttonadd';

const Product = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3000/descripcion')
      .then((response) => {
        const { data } = response;
        setProducts(
          data.map((product) => ({
            ...product,
            expanded: false,
            count: 0,
          }))
        );
      })
      .catch((error) => {
        console.error('Error al obtener la API: ', error);
      });
  };

  const toggleDescription = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          expanded: !product.expanded,
        };
      }
      return product;
    });

    const selected = updatedProducts.find((product) => product.expanded);

    setSelectedProduct(selected);

    setProducts(updatedProducts);
  };

  return (
    <>
      <div>
        <Filter
          filters={filters}
          setFilters={setFilters}
          products={products}
          setProducts={setProducts}
        />

        <Container>
          <Row xs={1} sm={2} md={3}>
            {products.map((product, id) => (
              <Col key={id} md={4}>
                <Card className={`product-card mb-3 ${product.expanded ? 'expanded-card' : ''}`}>
                  <div className="card-img-container">
                    <Card.Img variant="top" src={product.imagen} alt={product.nombre} className="card-img" />
                  </div>
                  <Card.Body>
                    <h2 className="card-title">{product.nombre}</h2>
                    <div className={`des-div ${product.expanded ? 'expanded-description' : ''}`}>
                      <p>{product.descripcion}</p>
                    </div>
                    <Button variant="link" onClick={() => toggleDescription(product.id)}>
                      {product.expanded ? 'Mostrar menos' : 'Mostrar más'}
                    </Button>
                    <p>Precio: ${product.precio}</p>
                    <p>Categoría: {product.categoria}</p>
                    <ButtonAdd />
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default connect(null, { addToCart })(Product);
