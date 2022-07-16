import React from 'react'
import { Link } from 'react-router-dom'

export default function Product_Page() {
    return (
        <div className='container d-flex mb-3  pt-3 '>
            <div className='w-50 '>
                <img src="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg" className="img-fluid w-75 shadow-sm border" alt="..."></img>
            </div>


            <div className='w-50'>
                <h4>--Title--</h4>
                <p className=''>--rating--<span>/5 rating</span></p>
                <p className='fs-4'><span>₹ </span>--price--/-</p>

                <div className='d-flex'>

                    <div className="btn-group mb-2" role="group" aria-label="Basic example" style={{ width: "7rem" }}>
                        <button type="button" id="-" className="btn btn-primary " style={{ width: "2rem" }}>-</button>
                        <input contentEditable="false" className="w-50 text-center" aria-describedby="basic-addon1" />
                        <button type="button" id="+" className="btn btn-primary">+</button>
                    </div>


                </div>

                <button type="button" className="btn btn-primary me-3 w-25">Add to Cart</button>
                <Link to="/cart" type="button" className="btn btn-warning  w-25">Buy Now</Link>

                <div className="accordion mt-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About this item
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>--description1--</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Warranty
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>--description2--</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Box content
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>--description3--</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
