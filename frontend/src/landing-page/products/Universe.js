import React from 'react';

function Universe(){
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <p className="fs-5 mt-5">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/"  style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            
                <h3 className="text-muted mt-5">The Zerodha Universe</h3>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/smallcaseLogo.png" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Thematic investing platform
                                                        that helps you invest in diversified
                                                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/streakLogo.png" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Systematic trading platform
                                                        that allows you to create and backtest
                                                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3  mt-5">
                    <img src="Media/images/sensibullLogo.svg" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Options trading platform that lets you
                                                        create strategies, analyze positions, and examine
                                                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/zerodhaFundhouse.png" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Our asset management venture
                                                        that is creating simple and transparent index
                                                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3  mt-5">
                    <img src="Media/images/goldenpiLogo.png" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Investment research platform
                                                        that offers detailed insights on stocks,
                                                        sectors, supply chains, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/dittoLogo.png" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Personalized advice on life
                                                        and health insurance. No spam
                                                        and no mis-selling.</p>
                </div>

            <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
        </div>
    </div>
    )
};

export default Universe;