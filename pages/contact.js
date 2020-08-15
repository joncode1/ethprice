import Head from 'next/head'

const ContactPage = () =>(
    <div>
        <Head>
            <title>Ethereum Price | Contact Page</title>
            <link rel="icon" href="/favicon.ico" />
            <script type = "text/javascript" src= "/jquery-3.5.1.slim.min.js"></script>
            <script type = "text/javascript" src= "/popper.min.js"></script>
            <script type = "text/javascript" src= "/bootstrap.min.js"></script>

        </Head>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Ethereum Price</a>
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
        <h1 style={{alignItems: "center", display: "flex",justifyContent: "center",}}>Contact Page</h1>
    </div>
);

export default ContactPage;