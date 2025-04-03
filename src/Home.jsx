import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-white"
            style={{
                backgroundImage: 'url(/images/scp-logo.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                paddingTop: '35%', 
            }}
        >
            <Link to="/scps">
                <button className="btn btn-danger btn-lg">View SCPs</button>
            </Link>
        </div>
    );
}

export default Home;
