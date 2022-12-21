import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Drink = () => {
    return (
        <>            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between ">
        <Link  to='/drink'>
                <button type="button" className="btn btn-outline-dark">&larr; Back to Drink</button>
            </Link>
            <div >
                <img src="/assets/logo.png" alt="" width="80" height="80" />
            </div>

            <div className='border border-1 p-1'>
                <FontAwesomeIcon icon={faShoppingBasket} style={{"height":"34px"}} />
            </div>

        </div>
    </nav>
        </>
    )
}

export default Drink