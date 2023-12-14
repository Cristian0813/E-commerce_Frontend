import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/filter.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Filter = ({ setProducts }) => {
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('http://localhost:3000/descripcion')
            .then((response) => {
                const { data } = response;
                setProducts(data);
                setOriginalProducts(data);
            })
            .catch((error) => {
                console.error('Error al obtener la API: ', error);
            });
    };

    const filterCategory = (category) => {
        if (category === '') {
            setProducts(originalProducts);
        } else {
            const filteredProducts = originalProducts.filter((product) => product.categoria === category);
            setProducts(filteredProducts);
        }
    };

    return (
        <>
            <div className="text-center"> {/* Centrar el h1 */}
                <h1>Productos</h1>
                <hr />
                <ButtonGroup >

                <Button variant="outline-secondary"className='mx-1' onClick={() => filterCategory("men's clothing")}>
                    Hombre
                </Button>
                <Button variant="outline-secondary" className='mx-1' onClick={() => filterCategory("women's clothing")}>
                    Mujer
                </Button>
                <Button variant="outline-secondary" className='mx-1' onClick={() => filterCategory("jewelery")}>
                    Joyería
                </Button>
                <Button variant="outline-secondary" className='mx-1' onClick={() => filterCategory("electronics")}>
                    Electrónicos
                </Button>
                <Button variant="outline-secondary" className='mx-1' onClick={() => filterCategory("")}>
                    Todos
                </Button>
                </ButtonGroup>

                <hr />
            </div>
        </>

    );
};

export default Filter;
