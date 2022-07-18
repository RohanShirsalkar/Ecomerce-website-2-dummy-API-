import React from 'react'

export default function CartProduct_Card({ title, quantity, price, total, id }) {
    return (
        <div className="card w-75 mb-2">
            <div className="card-header">
                ID : {id}
            </div>
            <div className="card-body">
                <h3 className="card-title fw-normal mb-4 py-2">{title}</h3>
                <div className='d-flex w-100 justify-content-between'>
                    <p className='fw-normal fs-5'>Price : <span className='fs-5 fw-bold'>${price}</span></p>
                    <p className='fw-normal fs-5'>Qty : <span className='fs-5 fw-bold'>{quantity}</span></p>
                    <p className='fw-normal fs-5'>Total : <span className='fs-5 fw-bold'>${total}</span></p>
                    <a href="#" className=" btn btn-danger">Remove</a>
                </div>
            </div>
        </div>
    )
}
