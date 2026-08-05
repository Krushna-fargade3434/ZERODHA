import React from 'react';

function Pricing() {
    return(
        <div className='container mb-5'>
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price tansparency in india. Flat fees and no hidden charges.</p>
                    <a href="" className='mx-5' style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className='row'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing