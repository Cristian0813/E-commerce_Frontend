import React from 'react';
import './style/about.css';

const AboutEcommerce = () => {
    return (
        <>
            <div className="container">

                <h1 className='TitAbout'>Sobre Nosotros</h1>
                <hr />
                <p>En Fake Store, creemos en la magia de las compras en línea. Fundada en 2023 por un grupo de entusiastas del comercio electrónico, nuestra misión es proporcionar a nuestros clientes una experiencia de compra única y emocionante.</p>

                <h2>Nuestra Historia</h2>
                
                <p>Todo comenzó con una visión simple, ofrecer productos innovadores y emocionantes a precios accesibles. Desde nuestros modestos comienzos como una pequeña tienda en línea, hemos crecido para convertirnos en un destino de compras en línea confiable y diversificado. A lo largo de los años, hemos ampliado nuestro catálogo para incluir una amplia variedad de productos, desde dispositivos tecnológicos hasta moda y accesorios de estilo de vida.</p>

                <h2>Nuestro Compromiso</h2>
                
                <p>En Fake Store, nos enorgullece brindar una experiencia de compra excepcional a nuestros clientes. Aquí están algunos de nuestros compromisos fundamentales:</p>
                
                <ul>
                    <li><strong>Calidad y Variedad:</strong> Seleccionamos cuidadosamente cada producto en nuestro catálogo para garantizar que cumpla con los más altos estándares de calidad. Desde productos de vanguardia hasta clásicos atemporales, tenemos algo para todos.</li>
                    <li><strong>Precios Asequibles:</strong> Creemos que la calidad no debe comprometerse por el precio. Trabajamos arduamente para ofrecer precios competitivos y ofertas emocionantes para que puedas obtener lo que amas sin romper el banco.</li>
                    <li><strong>Atención al Cliente:</strong> Nuestro equipo de servicio al cliente está aquí para ayudarte en cada paso del camino. Si tienes preguntas, inquietudes o simplemente necesitas asesoramiento, estamos aquí para ti.</li>
                </ul>

                <h2>Nuestro Futuro</h2>
                <p>El mundo del comercio electrónico está en constante evolución, y en Fake Store, estamos emocionados de ser parte de ese viaje. Estamos comprometidos a seguir innovando y brindando a nuestros clientes una experiencia de compra inigualable.</p>

                <p>Gracias por elegir Fake Store como tu destino de compras en línea. Esperamos que disfrutes de tu tiempo aquí y encuentres productos que te inspiren y hagan sonreír.</p>

                <hr />

                <h2 className="text-center py-4">Otros productos</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img 
                                className="card-img-top img-fluid" 
                                src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                                alt="Ropa urbana de color blanco" 
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Ropa urbana.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img 
                                className="card-img-top img-fluid" 
                                src="https://images.unsplash.com/photo-1502451885777-16c98b07834a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                                alt="Ropa de veraneo floreada" 
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">Ropa de verano.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img 
                                className="card-img-top img-fluid" 
                                src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                                alt="Portail, reloj, celular" 
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center " >Acesorios.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutEcommerce;
