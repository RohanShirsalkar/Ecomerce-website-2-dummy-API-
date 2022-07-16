import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Spinner from '../components/Spinner'
import SearchResult_Card from '../components/SearchResult_Card'
import { useParams } from 'react-router-dom'
import { getSearchedProducts, removeSearchedProducts } from '../../redux/actions/products_action'
import { useDispatch } from 'react-redux/es/exports'

export default function Search_Page() {

    const { query } = useParams()

    const dispatch = useDispatch()
    const products = useSelector(state => state.searchedProduct.products)
    const total = useSelector(state => state.searchedProduct.total)

    console.log(total)

    const productsList = products && products.map(item => {
        return <SearchResult_Card key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} category={item.category} />
    })

    useEffect(() => {
        dispatch(getSearchedProducts(query))

        return () => {
            dispatch(removeSearchedProducts())
        }

    }, [query])

    return (
        <>
            {products ?
                <>
                    {total !== 0 &&
                        <div className="card shadow-sm">

                            <div className="card-body d-flex justify-content-center">

                                {   /* Sort BTN */ }

                                <div className="dropdown me-2">
                                    <button className="btn btn-outline-dark " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        FILTER
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Rating</a></li>
                                        <li><a className="dropdown-item" href="#">Price Low to High</a></li>
                                        <li><a className="dropdown-item" href="#">Price High to Low</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                    <div className='container pt-3 d-flex flex-column align-items-center'>
                        {productsList ? productsList : <Spinner />}
                        {total === 0 && <h3 className='fw-normal'>No products</h3>}
                    </div>
                </>

                : <Spinner />}
        </>
    )
}
