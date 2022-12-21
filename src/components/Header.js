import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex">
                <div className="jus"></div>
                <div className=''>
                    <img src="/assets/logo.png" alt="" width="80" height="80" />
                </div>

                <div>

                    <FontAwesomeIcon icon={faShoppingBasket} />
                </div>

            </div>
        </nav>
    );
}

export default Header