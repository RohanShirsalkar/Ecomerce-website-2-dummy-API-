import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Product_Card from './Product_Card'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { getProducts, getProductsByCategory } from '../../redux/actions/products_action'
import Spinner from './Spinner'

export default function Collection({ limit, category, collectionTitle }) {
    const dispatch = useDispatch()
    const fetchedProducts = useSelector(state => state.products.products)

    useEffect(() => {

        if (category) {
            dispatch(getProductsByCategory({ limit, category }))
        }
        else {
            dispatch(getProducts({ limit }))
        }
    },[])

    const productList = fetchedProducts && fetchedProducts.map(item => {
        return <div key={item.id} className="col"><Product_Card key={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} category={item.category} /></div>
    })

    return (
        <div className="container mb-3 border-bottom">
            <h3 className='fw-light mb-3 '>{collectionTitle}</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {productList ? productList : <Spinner />}
            </div>
        </div>
    )
}
