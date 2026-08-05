import React from 'react';

function RightSection({
        productName,
        productDescription,
        learnMore,
        imageURL,
    }){
    return (
         <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h3 className="text-muted">{productName}</h3>
                    <p className="text-muted">{productDescription}</p>
            <div>
                <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        <div className="col-6">
            <img src={imageURL}  style={{width:"95%"}} />
        </div>
      </div>
    </div>
    );
    };
export default RightSection;