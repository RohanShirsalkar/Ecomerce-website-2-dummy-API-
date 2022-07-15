import React from 'react'
import Collection from '../components/Collection'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Product_Card from '../components/Product_Card'
import Spinner from '../components/Spinner'
import SearchResult_Card from '../components/SearchResult_Card'

export default function Search_Page() {

    const products = useSelector(state => state.searchedProduct.products)
    console.log(products)
    const productsList = products && products.map(item => {
        return <SearchResult_Card key={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} category={item.category} />
        // return <Product_Card key={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} category={item.category} />
    })

    return (
        <>
            <div class="card">

                <div class="card-body d-flex justify-content-center">

                    {   /* Sort BTN */}

                    <div class="dropdown me-2">
                        <button class="btn btn-outline-dark " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            FILTER
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Rating</a></li>
                            <li><a class="dropdown-item" href="#">Price Low to High</a></li>
                            <li><a class="dropdown-item" href="#">Price High to Low</a></li>
                        </ul>
                    </div>


                    {   /* Filter BTN */}

                    {/* <div class="dropdown">
                        <button class="btn btn-outline-dark " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Rating</a></li>
                            <li><a class="dropdown-item" href="#">Price Low to High</a></li>
                            <li><a class="dropdown-item" href="#">Price High to Low</a></li>
                        </ul>
                    </div> */}
                </div>


            </div>

            <div className='container pt-3 d-flex flex-column align-items-center'>
                {productsList ? productsList : <Spinner />}
            </div>
        </>
    )
}
