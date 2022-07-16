import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchResult_Card({ id, title, description, price, thumbnail, category }) {

    return (

        <div className="card mb-3 shadow-sm" style={{ minWidth: "80%", maxWidth: "80%" }}>
        <Link to={`/product/${id}`} className='text-decoration-none text-dark'>
                <div className="row g-0">
                    <div className="col-md-4 border-end">
                        <img src={thumbnail} className="img-fluid rounded-start" style={{ objectFit: 'cover', height: "15rem" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-2">
                            <h5 className="card-title fw-normal">{title}</h5>
                            <h3>${price}</h3>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{category}</small></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
