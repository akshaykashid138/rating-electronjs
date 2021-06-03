import React from 'react'
import Rating from './StarRating'
const Restaurants = ({rating}) => {
    return (
        <div className='container mt-4'>
            <div className='col-12 home'>
                <h2>Restaurant rating application.</h2>
                <p>Please give your valuable rating here.🙏</p>
            </div>
            <div className='row'>
                <div className='col mt-2'>
                     <div className="card" style={{width: "19rem"}}>
                        <img className="card-img-top" src="hotel1.jpg" style={{height:"192px"}} alt="htole1" />
                        <div className="card-body">
                        <strong>Restaurant Name:</strong><span>&nbsp;Hotel Abc</span>
                        <p><strong>City:</strong><span>&nbsp;Pune</span></p>
                        <Rating />
                        </div>
                    </div>
                </div>
                <div className='col mt-2'>
                <div className="card" style={{width: "19rem"}}>
                        <img className="card-img-top" src="hotel2.jpg" alt="htole2" />
                        <div className="card-body">
                        <strong>Restaurant Name:</strong><span>&nbsp;Hotel Pqr</span>
                        <p><strong>City:</strong><span>&nbsp;Mumbai</span></p>
                        <Rating />
                        </div>
                    </div>
                </div>
                <div className='col mt-2'>
                <div className="card" style={{width: "19rem"}}>
                        <img className="card-img-top" src="hotel3.jpg" alt="htole3" />
                        <div className="card-body">
                        <strong>Restaurant Name:</strong><span>&nbsp;Hotel Def</span>
                        <p><strong>City:</strong><span>&nbsp;Kolhapur</span></p>
                        <Rating />
                        </div>
                    </div>
                </div>
                <div className='col mt-2'>
                <div className="card" style={{width: "19rem"}}>
                        <img className="card-img-top" src="hotel4.jpg" style={{height:"198px"}} alt="htole4" />
                        <div className  ="card-body">
                        <strong>Restaurant Name:</strong><span>&nbsp;Hotel Xyz</span>
                        <p><strong>City:</strong><span>&nbsp;Solapur</span></p>
                        <Rating />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Restaurants
