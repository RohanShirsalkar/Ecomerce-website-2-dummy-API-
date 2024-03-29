import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux/es/exports';
import { getCartProducts } from '../../redux/actions/cart_action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';

export default function Navbar() {

    const [query, setQuery] = useState("")

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.userData)

    useEffect(() => {
        user.id && dispatch(getCartProducts(user.id))
    }, [user])

    return (
        <header className="p-3 bg-dark text-light shadow-sm">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center align-items-center mb-md-0">
                        <li><Link to="/" className='fw-normal fs-3 me-3 text-decoration-none text-light' style={{ letterSpacing: "0.2rem" }}>STORE</Link></li>
                        <li><a href="#" className="nav-link px-2 text-light">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-light">About</a></li>
                    </ul>

                    <div className="col-12 d-flex col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" value={query} onInput={e => setQuery(e.target.value)} className="form-control form-control-light text-dark bg-light me-2" style={{ borderRadius: "5rem", border: "none" }} placeholder="Search..." aria-label="Search" />
                        <Link to={`/search/${query}`} className='btn btn-outline-light' style={{ borderRadius: "5rem" }}>Search</Link>
                    </div>

                    <div className="text-end">
                        {/* <Link to="/cart" type="button" style={{ borderRadius: "5rem" }} className="btn btn-light me-2"><FaShoppingCart style={{ fontSize: "1.1rem", marginBottom: "2px" }} /></Link> */}
                        <Link to="/login" type="button" style={{ borderRadius: "5rem" }} className="me-2 btn btn-light"><FaUser style={{ fontSize: "1rem", marginBottom: "2px" }} /></Link>
                        <Link to="/cart" type="button" className="btn btn-light position-relative" style={{ borderRadius: "5rem" }}>
                            <FaShoppingCart style={{ fontSize: "1.1rem", marginBottom: "2px" }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                {cart.totalProducts}
                            </span>
                        </Link>
                    </div>  
                </div>
            </div>
        </header>
    )
}
