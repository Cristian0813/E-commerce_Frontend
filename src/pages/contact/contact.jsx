import React from "react";

const ContactPage = () => {
    return (
        <div className="container my-3 py-3">
            <h1 className="text-center">Contactame</h1>
            <hr />
            <div className="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form>
                        <div className="form-group my-3">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group my-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="form-group my-3">
                            <label>Mensaje</label>
                            <textarea
                                rows={5}
                                className="form-control"
                                id="Message"
                                placeholder="Introduce tu mensaje"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                className="my-2 px-4 mx-auto btn btn-dark"
                                type="submit"
                                disabled
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
