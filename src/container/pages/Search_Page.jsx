import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Spinner from '../components/Spinner'
import SearchResult_Card from '../components/SearchResult_Card'

export default function Search_Page() {

    const products = useSelector(state => state.searchedProduct.products)

    const productsList = products && products.map(item => {
        return <SearchResult_Card key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} category={item.category} />
    })  

    return (
        <>
            <div className="card">

                <div className="card-body d-flex justify-content-center">

                    {   /* Sort BTN */}

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

            <div className='container pt-3 d-flex flex-column align-items-center'>
                {productsList ? productsList : <Spinner />}
            </div>
        </>
    )
}
