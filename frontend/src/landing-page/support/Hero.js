import React from 'react';

function Hero(){
    return (
        <section className="container-fluid" id="supporthero">
            <div className="p-3" id="supportwrapper" >
                <h4 className="">Support Portal</h4> 
                <a href="" style={{color:"white" , textDecoration:"none"}} className="">Track Ticket</a>    
            </div>
            <div className="row p-5 m-3 align-items-stretch">
                <div className="col-6 p-3 h-100">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg: how do i activate F&O , why is my order getting rejected.." readOnly className="p-3 m-3" style={{width:"100%" , border:"none" , borderRadius:"10px" , caretColor: "transparent", cursor: "default"}}/><br />
                    <a href="" style={{color:"white" , textDecoration:"none" }} className="me-3">Track account opening</a>
                    <a href="" style={{color:"white" , textDecoration:"none" }} className="me-3">Track segment activation</a>
                    <a href="" style={{color:"white" , textDecoration:"none"}} className="me-3">Intraday margins</a>
                    <a href="" style={{color:"white" , textDecoration:"none"}}> Kite user manual</a>
                </div>
                <div className="col-6 p-3 h-100">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="" style={{color:"white" , textDecoration:"none"}}>Current Takeovers and Delisting - January 2027</a></li>
                        <li><a href="" style={{color:"white" , textDecoration:"none"}}>Latest intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                </div>   
            </div>
        </section>
    )
};

export default Hero;