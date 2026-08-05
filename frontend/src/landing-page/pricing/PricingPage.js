import React from 'react';

import Hero from './Hero.js';
import Brokerage from './Brokerage.js';
import OpenAccount from '../OpenAccount';
import Disclaimer from './Disclaimer.js';


function PricingPage(){
    return (
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        <Disclaimer />
        </>
    )
};

export default PricingPage;