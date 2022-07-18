import React, { useEffect, useState } from 'react'
import { getCartProducts } from '../../redux/actions/cart_action'
import Spinner from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import CartProduct_Card from '../components/CartProduct_Card'

export default function Cart_Page() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.userData)

  useEffect(() => {
    user.id && dispatch(getCartProducts(user.id))
  }, [user])

  const productList = cart.products && cart.products.map(item => {
    return <CartProduct_Card key={item.id} title={item.title} price={item.price} quantity={item.quantity} total={item.total} id={item.id} />
  })

  return (
    <div className='container pt-3 d-flex flex-column align-items-center'>
      <h3 className='fw-normal text-start mb-3'>Cart (<b>{cart.totalQuantity}</b>)</h3>
      {productList ? productList : <Spinner />}
    </div>
  )
}
