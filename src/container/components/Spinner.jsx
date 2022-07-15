import React from 'react'

export default function Spinner() {
    return (
        <div className='position-absolute bottom-50 start-50'>
            <div class="spinner-grow m-1" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow m-1" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow m-1" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            
            
        </div>
    )
}
