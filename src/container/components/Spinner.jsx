import React from 'react'

export default function Spinner() {
    return (
        <div className='position-absolute bottom-50 start-50'>
            <div className="spinner-grow m-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow m-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow m-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            
            
        </div>
    )
}
