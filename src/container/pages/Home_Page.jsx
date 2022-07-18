import React from 'react'
import Collection from '../components/Collection'

export default function Home_page() {

    return (
        <div className='container pt-4 '>
            <div>
                <Collection collectionTitle={"Products"} category={"watch"} limit={12} />
            </div>
        </div>
    )
}
