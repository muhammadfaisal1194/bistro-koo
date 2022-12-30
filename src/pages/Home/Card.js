import React from 'react'

const Card = ({ category }) => {

    return (
        <div className="container d-flex flex-wrap py-4  " style={{ "width": "41rem" }}>
            <div className="card borderRadious" style={{ "width": "13rem" }}>
                <img src="/assets/snack1.jpg" className="card-img-top borderRadious" height="110" alt="..." />
                <div className=" d-flex justify-content-between  px-3 pt-3">
                    <div>
                        Crunch chips
                        <p className='fs-6 text-secondary'>Lemon & sugar</p>
                    </div>
                    <div className=' fs-2 fw-bold menu-color'>
                        $16
                    </div>
                </div>
                <button className="btn borderRadious" style={{ "background": "#162E4D", "color": "white" }}>+ Add to Cart</button>
            </div>
        </div >
    )
}

export default Card