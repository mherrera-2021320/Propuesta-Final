import React from 'react'

export const Zona12 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 1</h6>
                        <h1>Tours & Travel Services</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb- 4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">La Terminal de Buses "El Trebol":</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl" >
                                        <div className="modal-content ">
                                            <div className="modal-header ">
                                                <h1 className="modal-title fs-5 " id="exampleModalLabel">La Terminal de Buses "El Trebol" </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://www.guatemala.com/fotos/2021/03/parque-Ciudad-Nueva-885x500.jpg" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">
                                                        Es uno de los centros de transporte más importantes de la ciudad, desde donde salen y llegan autobuses que conectan con diferentes destinos dentro y fuera del país. Aquí podrás observar el bullicio y la dinámica de la movilidad guatemalteca.
                                                    </p>
                                                    <a href='https://www.google.com/maps?sca_esv=552649741&output=search&q=La+Terminal+de+Buses+%22El+Trebol%22&source=lnms&entry=mc&sa=X&ved=2ahUKEwjKpoToyrqAAxXcTDABHT83CMoQ0pQJegQIDBAB' className="text-truncate">Dirección: Cdad. de Guatemala
                                                    </a>
                                                    <hr />
                                                    <span>

                                                    </span>
                                                    <hr />

                                                </div>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" > Cerrar </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
