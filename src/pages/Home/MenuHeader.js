import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const MenuHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  nave-bar " style={{ "background": "transparent !important" }} >
            <div className="container-fluid d-flex justify-content-end">
                <Link to="/">
                    <FontAwesomeIcon icon={faShoppingBasket} style={{ "height": "34px" }} />
                </Link>
            </div>
        </nav>
    )
}
export default MenuHeader