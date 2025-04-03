import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { scps } from './data';

function SCPDetail() {
    const { id: rawId } = useParams();  // Get the SCP ID from the URL
    let id = rawId;

    // Prevent malformed URI decoding errors
    try {
        id = decodeURIComponent(rawId);
    } catch (e) {
        console.error("Invalid SCP ID:", e);
        id = "Invalid ID";
    }

    // Ensure ID comparison works properly
    const scp = scps.find((s) => String(s.id) === String(id));

    // Handle invalid SCP ID
    if (!scp) {
        return (
            <div className="container text-center mt-5 text-white">
                <p>SCP Not Found</p>
                <Link to="/scps" className="btn btn-primary">Go back to SCP List</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="card bg-dark text-white">
                <div className="card-body">
                    <h2 className="card-title">{scp.id}</h2>
                    <h4 className="card-subtitle mb-2 text-muted">Object Class: {scp.tagline}</h4>
                    
                    {scp.image && (
                        <img
                            src={scp.image}
                            alt={scp.id}
                            className="card-img-top my-4"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    )}

                    <h5 className="mt-4">Description:</h5>
                    <p>{scp.content}</p>

                    <Link to="/scps" className="btn btn-primary mt-4">Back to SCP List</Link>
                </div>
            </div>
        </div>
    );
}

export default SCPDetail;
