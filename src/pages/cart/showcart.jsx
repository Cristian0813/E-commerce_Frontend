import React from 'react';
import { Link } from 'react-router-dom';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';

const ShowCart = () => {
    const state = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const addItem = (product) => {
        dispatch(addToCart(product));
    };
    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    };

    let subtotal = 0;
    let totalItems = 0;

    state.forEach((item) => {
        subtotal += item.precio * item.qty;
        totalItems += item.qty;
    });

    return (
        <>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Item List</h5>
                                </div>
                                <div className="card-body">
                                    {state.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-lg-3 col-md-12">
                                                        <div className="bg-image rounded" data-mdb-ripple-color="light">
                                                            <img src={item.imagen} alt={item.nombre} width={100} height={75} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <p>
                                                            <strong>{item.nombre}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                            <button className="btn px-3" onClick={() => { removeItem(item); }}>
                                                                <FontAwesomeIcon icon={faMinus} />
                                                            </button>
                                                            <p className="mx-5">{item.qty}</p>
                                                            <button
                                                                className="btn px-3"
                                                                onClick={() => {
                                                                    addItem(item);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </button>
                                                        </div>
                                                        <p className="text-start text-md-center">
                                                            <strong>
                                                                <span className="text-muted">{item.qty}</span>{" "} x ${item.precio}
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                <hr className="my-4" />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount ({totalItems}) </strong>
                                            </div>
                                            <span>
                                                <strong>${Math.round(subtotal)}</strong>
                                            </span>
                                        </li>
                                    </ul>

                                    <Link
                                        to="/checkout"
                                        className="btn btn-dark btn-lg btn-block"
                                    >
                                        Go to checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShowCart;
