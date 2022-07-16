import React from 'react'
import SearchResult_Card from '../components/SearchResult_Card'
import Spinner from '../components/Spinner'

export default function Cart_Page() {
  return (
    <div className='container pt-3 d-flex flex-column align-items-center'>
      {productsList ? productsList : <Spinner />}
    </div>
  )
}
