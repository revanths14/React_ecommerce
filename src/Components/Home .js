import React from 'react'
import Product from './Product';

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0">
                <img src="/image/p1.jpg" class="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2" style={{color:"blue"}}>
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>  
                </div>
            </div>
            <Product/>
        </div>
    );
}
