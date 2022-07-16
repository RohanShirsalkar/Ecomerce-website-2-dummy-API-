import React from 'react'
import { Link } from 'react-router-dom'

export default function Product_Card({ price, title, description, thumbnail, category, id }) {

    return (
        <Link to={`/product/${id}`}  className='text-decoration-none text-dark d-flex'>
            <div className="card border shadow-sm mb-5 p-2" style={{ backgroundColor: "white", width: "18rem", borderRadius: "5px" }} >
                <img src={thumbnail} style={{ objectFit: 'cover', height: "18rem" }} className="card-img-top border-bottom" alt="..." />
                <div className="card-body p-3 mt-3">
                    <h5 className="card-title fw-normal mb-2">{title.slice(0, 25)}</h5>
                    <h4>${price}</h4>
                    <span className='text-secondary'>{category}</span>
                </div>
            </div>
        </Link>
    )
}
