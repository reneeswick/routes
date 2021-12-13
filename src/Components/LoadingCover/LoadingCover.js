import React from 'react'
import './LoadingCover.css'

const LoadingCover = () => {
    return (
        <div className="loading-cover">
            <span className="loading-spinner">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </span>
        </div>
    )
}

export default LoadingCover
