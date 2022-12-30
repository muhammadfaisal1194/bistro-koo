import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const SnacksHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nave-bar">
            <div className="container-fluid d-flex">
                <div className="jus"></div>
                <div className=''>
                    <img src="/assets/logo.png" alt="" width="80" height="80" />
                </div>
                <div className='border border-1'>
                    <FontAwesomeIcon icon={faShoppingBasket} style={{ "height": "34px" }} />
                </div>
            </div>
        </nav>
    )
}

export default SnacksHeader