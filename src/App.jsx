import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SCPList from './SCPList';
import SCPDetail from './SCPDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="bg-dark text-white min-vh-100">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">SCP Foundation</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/scps">SCP List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scps" element={<SCPList />} />
                    <Route path="/scp/:id" element={<SCPDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;