import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Snacks = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

            <div className="container d-flex flex-wrap py-4 " style={{ "width": "41rem" }}>
                <div className="card " style={{ "width": "13rem" }}>
                    <img src="/assets/snack1.jpg" className="card-img-top" height="110" alt="..." />
                    <div className=" d-flex justify-content-between  px-3 pt-3">
                        <div>
                            Crunch chips
                            <p className='fs-6 text-secondary'>Lemon & sugar</p>
                        </div>
                        <div className=' fs-2 fw-bold text-danger'>
                            $16
                        </div>
                    </div>
                    <a href="#" className="btn btn-secondary">+ Add to Cart</a>
                </div>
                <div className="card " style={{ "width": "13rem" }}>
                    <img src="/assets/snack1.jpg" className="card-img-top" height="110" alt="..." />
                    <div className=" d-flex justify-content-between  px-3 pt-3">
                        <div>
                            Crunch chips
                            <p className='fs-6 text-secondary'>Lemon & sugar</p>
                        </div>
                        <div className=' fs-2 fw-bold text-danger'>
                            $16
                        </div>
                    </div>
                    <a href="#" className="btn btn-secondary">+ Add to Cart</a>
                </div>

                <div className="card " style={{ "width": "13rem" }}>
                    <img src="/assets/snack1.jpg" className="card-img-top" height="110" alt="..." />
                    <div className=" d-flex justify-content-between  px-3 pt-3">
                        <div>
                            Crunch chips
                            <p className='fs-6 text-secondary'>Lemon & sugar</p>
                        </div>
                        <div className=' fs-2 fw-bold text-danger'>
                            $16
                        </div>
                    </div>
                    <a href="#" className="btn btn-secondary">+ Add to Cart</a>
                </div>
                <div className="card " style={{ "width": "13rem" }}>
                    <img src="/assets/snack1.jpg" className="card-img-top" height="110" alt="..." />
                    <div className=" d-flex justify-content-between  px-3 pt-3">
                        <div>
                            Crunch chips
                            <p className='fs-6 text-secondary'>Lemon & sugar</p>
                        </div>
                        <div className=' fs-2 fw-bold text-danger'>
                            $16
                        </div>
                    </div>
                    <a href="#" className="btn btn-secondary">+ Add to Cart</a>
                </div>

            </div >


        </>
    )
}

export default Snacks