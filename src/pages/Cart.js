import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Cart = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between ">
                    <Link  to='/'>
                        <button type="button" className="btn btn-outline-dark borderRadious">&larr; Back to Drink</button>
                    </Link>
                    <div >
                        <img src="/assets/logo.png" alt="" width="80" height="80" />
                    </div>

                    <div className='border border-1'>
                        <FontAwesomeIcon icon={faShoppingBasket} style={{ "height": "34px" }}/>
                    </div>

                </div>
            </nav>

            <div className="">
                <table className="table border border-2">
                    <thead>
                        <tr>
                            <th scope="col">Thumbnail</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th> <img src="/assets/drink.png" alt="..." width="50" height="50" /></th>
                            <td>Lemon Juice</td>
                            <td>Lemon with extra soda</td>
                            <td>$ 15</td>
                            <td>1 glass</td>
                            <td className='d-flex'>
                                <div className='border '>
                                    <FontAwesomeIcon icon={faEdit} />
                                </div>
                                <div className='border ms-2 '>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th> <img src="/assets/drink.png" alt="..." width="50" height="50" /></th>
                            <td>Lemon Juice</td>
                            <td>Lemon with extra soda</td>
                            <td>$ 15</td>
                            <td>1 glass</td>
                            <td className='d-flex '>
                                <div className='border '>
                                    <FontAwesomeIcon icon={faEdit} />
                                </div>
                                <div className='border '>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='d-flex py-2 '>
                    <div className="form-check col-4">
                        <input className="form-check-input" type="radio" name="Serve" id="Serve" />
                        <label className="form-check-label" for="Serve">
                            Serve on table
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Serve" id="Pickup" />
                        <label className="form-check-label" for="Pickup">
                            Pickup from the counter
                        </label>
                    </div>
                </div>
                <hr  style={{"border-top": "2px dashed"}}/>
                <div className="d-flex justify-content-end py-1">
                    <h4>Menu Price $</h4>
                </div>
                <div className="d-flex justify-content-center py-1">
                <button type="button" class="btn btn-lg borderRadious" style={{"background": "#CC6744" , "color":"white"}}>Proceed to payment</button>

                </div>

            </div>

        </>
    )
}

export default Cart