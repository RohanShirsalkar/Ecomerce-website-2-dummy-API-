import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useParams } from 'react-router-dom'
import { getSingleProduct, removeSingleProduct } from '../../redux/actions/products_action'
import { useState } from 'react'
import Spinner from '../components/Spinner'

export default function Product_Page() {

    const [quantity, setQuantity] = useState(1);

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleProduct(id))

        return () => {
            dispatch(removeSingleProduct())
        }

    }, [])

    const product = useSelector(state => state.singleProduct)

    const handleInputChange = (event) => {

        const btn = event.target.id
        if (btn === "+") {
            setQuantity(quantity >= 10 ? 10 : quantity + 1)
        }
        else if (btn === "-") {
            setQuantity(quantity != 0 ? quantity - 1 : 0)
        }
    }

    return (

        <>
            {product.id ?

                <div className='container d-flex mb-3  pt-3' style={{ minHeight: "100vh" }}>

                    <div className='w-50 position-relative p-5'>
                        <img src={product.images && product.images[0]} className="img-fluid w-75 shadow-sm border" alt="..."></img>
                    </div>

                    <div className='w-50 p-3    '>
                        <h2 className='mb-3 fw-normal'>{product.title}</h2>
                        <p className='border fw-bold text-dark bg-white p-1 ps-2'>{product.category}</p>
                        <p className='border fw-bold text-dark bg-white p-1 ps-2'>{product.rating}<span>/5 rating</span></p>
                        <p className='fs-1 '>${product.price}</p>

                        <div className='d-flex mb-4'>

                            <div className="btn-group mb-2" role="group" aria-label="Basic example" style={{ width: "7rem" }}>
                                <button type="button" onClick={handleInputChange} id="-" className="btn btn-dark " style={{ width: "2rem" }}>-</button>
                                <input contentEditable="false" value={quantity} onChange={() => { }} className="w-50 text-center" aria-describedby="basic-addon1" />
                                <button type="button" onClick={handleInputChange} id="+" className="btn btn-dark">+</button>
                            </div>


                        </div>

                        <div className='mb-4'>
                            <button type="button" className="btn btn-lg btn-outline-dark me-3 w-25">Add to Cart</button>
                            <Link to="/cart" type="button" className="btn btn-lg btn-warning  w-50 ">Buy Now</Link>
                        </div>

                        <div className="card mt-3">
                            <div className="card-body">
                                <p className='fs-5'>Description</p>
                                <p>{product.description}</p>
                            </div>
                        </div>

                    </div>

                </div>

                : <Spinner />}
        </>
    )
}
