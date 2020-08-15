import fetch from 'isomorphic-unfetch'
import React from "react";

const testpage = (theProps) =>(
    <div>
        <h1>Price:</h1>
        <p>{theProps.thePassed.symbol} : ${theProps.thePassed.price}</p>

        <p>Updated on: {theProps.thePassed2.time.updated}</p>

        <p>Data fetched from Binance/Coindesk</p>
    </div>

);
testpage.getInitialProps = async function() {
    const myRES = await fetch('https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD');
    const myDATA = await myRES.json();
    const myRES2 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const myDATA2 = await myRES2.json();
    return {
        thePassed: myDATA,
        thePassed2: myDATA2
    };
}

export default testpage;
