import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {

    const [query, setQuery] = useState("")

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
                        <input type="search" value={query}  onInput={e => setQuery(e.target.value)}  className="form-control form-control-light text-dark bg-light me-2" style={{borderRadius: "5rem", border: "none"}} placeholder="Search..." aria-label="Search" />
                        <Link to={`/search/${query}`}  className='btn btn-outline-light' style={{borderRadius : "5rem"}}>Search</Link>
                    </div>

                    <div className="text-end">
                        <Link to="/cart" type="button" style={{borderRadius : "5rem"}} className="btn btn-light me-2"><FaShoppingCart style={{ fontSize: "1.1rem", marginBottom : "2px" }} /></Link>
                        <Link to="/login" type="button" style={{borderRadius : "5rem"}} className="btn btn-light"><FaUser style={{fontSize : "1rem", marginBottom: "2px"}} /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
