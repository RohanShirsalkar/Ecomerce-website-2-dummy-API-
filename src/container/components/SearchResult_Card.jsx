import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchResult_Card({ title, description, price, thumbnail, category }) {
    return (

        <div class="card mb-3 shadow-sm" style={{ minWidth: "80%", maxWidth: "80%" }}>
            <Link to="#" className='text-decoration-none text-dark'>
                <div class="row g-0">
                    <div class="col-md-4 border-end">
                        <img src={thumbnail} class="img-fluid rounded-start" style={{ objectFit: 'cover', height: "15rem" }} alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ms-2">
                            <h5 class="card-title">{title}</h5>
                            <h3>${price}</h3>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><small class="text-muted">{category}</small></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
