import React from 'react';
import { Link } from 'react-router-dom';
import { scps } from './data';

function SCPList() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">SCP Catalogue</h1>

            {/* Empty state for when no SCPs are available */}
            {scps.length === 0 ? (
                <div className="text-center text-muted">
                    No SCPs available at the moment. Please check back later.
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {scps.map((scp) => (
                        <div key={scp.id} className="col">
                            <Link to={`/scp/${scp.id}`} className="text-decoration-none">
                                <div className="card bg-dark text-white h-100">
                                    {/* Optional Image */}
                                    {scp.image && (
                                        <img
                                            src={scp.image}
                                            alt={scp.id}
                                            className="card-img-top"
                                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{scp.id}</h5>
                                        <p className="card-text">Object Class: {scp.tagline}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SCPList;
