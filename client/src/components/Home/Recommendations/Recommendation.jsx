import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import "./Recommendation.css"

const Recommendation = () => {
  return (
    <section className="padding-block-900 recommedation">
        <div className="container">
            <h2 className='recommendation-title'>Travel Recommendations</h2>
            <p className='recommendation-text'>The best travel recommendations from around the world</p>

            <div className='recommendation-places'>
                <div className='place'>
                    <img src="https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.webp?b=1&s=170667a&w=0&k=20&c=0YLjXNODh1VbP7VGpawAzcJr0C2U1dN341R2mXhQglk=" className='place-img' alt="" />
                    <div className='place-details'>
                        <div className="top">
                            <h3>Wates Beach</h3>
                            <span style={{ display: 'flex', alignItems: 'center'}}>
                                <AiFillStar style={{ color: "orange"}} />
                                4.90
                            </span>
                        </div>
                        <p style={{ padding: '.75rem'}}>Money Trees</p>
                        <div className="bottom">
                            <p>$122,23</p>
                            <button className='btn book-btn'>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className='place'>
                    <img src="https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.webp?b=1&s=170667a&w=0&k=20&c=0YLjXNODh1VbP7VGpawAzcJr0C2U1dN341R2mXhQglk=" className='place-img' alt="" />
                    <div className='place-details'>
                        <div className="top">
                            <h3>Wates Beach</h3>
                            <span style={{ display: 'flex', alignItems: 'center'}}>
                                <AiFillStar style={{ color: "orange"}} />
                                4.90
                            </span>
                        </div>
                        <p style={{ padding: '.75rem'}}>Money Trees</p>
                        <div className="bottom">
                            <p>$122,23</p>
                            <button className='btn book-btn'>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className='place'>
                    <img src="https://media.istockphoto.com/id/1136247293/photo/child-with-mother-in-swimming-pool-holiday-resort.webp?b=1&s=170667a&w=0&k=20&c=0YLjXNODh1VbP7VGpawAzcJr0C2U1dN341R2mXhQglk=" className='place-img' alt="" />
                    <div className='place-details'>
                        <div className="top">
                            <h3>Wates Beach</h3>
                            <span style={{ display: 'flex', alignItems: 'center'}}>
                                <AiFillStar style={{ color: "orange"}} />
                                4.90
                            </span>
                        </div>
                        <p style={{ padding: '.75rem'}}>Money Trees</p>
                        <div className="bottom">
                            <p>$122,23</p>
                            <button className='btn book-btn'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recommendation