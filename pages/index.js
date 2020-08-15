import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from "isomorphic-unfetch";

const Homepage = (theProps) =>(
    <div>
      <Head>
        <title>Ethereum Price</title>
        <link rel="icon" href="/favicon.ico" />
          <script type = "text/javascript" src= "/jquery-3.5.1.slim.min.js"></script>
          <script type = "text/javascript" src= "/popper.min.js"></script>
          <script type = "text/javascript" src= "/bootstrap.min.js"></script>
          <script type = "text/javascript" src= "/testing.js"></script>
      </Head>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Ethereum Prices</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/about">About</a>
                    <a className="nav-item nav-link" href="/contact">Contact</a>
                </div>
            </div>
        </nav>


        <h1 style={{alignItems: "center", display: "flex",justifyContent: "center",}}>Price:</h1>
        <p style={{alignItems: "center", display: "flex",justifyContent: "center",}}>{theProps.thePassed.symbol} : ${theProps.thePassed.price}</p>

        <p style={{alignItems: "center", display: "flex",justifyContent: "center",}}>Updated on: {theProps.thePassed2.time.updated}</p>

        <p style={{alignItems: "center", display: "flex",justifyContent: "center",}}>Data fetched from Binance/Coindesk</p>
        </div>

);

Homepage.getInitialProps = async function() {
    const myRES = await fetch('https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD');
    const myDATA = await myRES.json();
    const myRES2 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const myDATA2 = await myRES2.json();
    return {
        thePassed: myDATA,
        thePassed2: myDATA2
    };
}

export default Homepage;