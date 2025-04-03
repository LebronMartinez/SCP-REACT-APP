import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
            <img
                src="/images/scp-logo.gif"
                alt="SCP Foundation Logo"
                className="mb-4"
                style={{ width: '150px', height: '150px' }}
            />
            <h1 className="display-4 mb-4">SCP Foundation</h1>
            <Link to="/scps">
                <button className="btn btn-danger btn-lg">View SCPs</button>
            </Link>
        </div>
    );
}

export default Home;