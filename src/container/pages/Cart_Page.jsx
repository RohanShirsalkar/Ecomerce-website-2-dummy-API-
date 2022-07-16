import React, { useEffect } from 'react'
import { getCartProducts } from '../../redux/actions/cart_action'
import SearchResult_Card from '../components/SearchResult_Card'
import Spinner from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import axios from 'axios'
import api_data from '../../api/api_data'

export default function Cart_Page() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartProducts())
  },[])


  return (
    <div className='container pt-3 d-flex flex-column align-items-center'>
      {/* {productsList ? productsList : <Spinner />} */}
    </div>
  )
}
