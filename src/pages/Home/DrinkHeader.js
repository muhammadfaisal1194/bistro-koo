import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const DrinkHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nave-bar">
      <div className="container-fluid d-flex justify-content-between ">
        <div></div>
        <div >
          <Link to="/" >
            <img src="/assets/logo.png" alt="" width="80" height="80" />
          </Link>
        </div>

        <div className='border border-1 p-1'>
          <Link to="/">
            <FontAwesomeIcon icon={faShoppingBasket} style={{ "height": "34px" }} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DrinkHeader