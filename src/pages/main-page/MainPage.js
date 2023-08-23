import React, { useState, useEffect } from 'react';
import DVDcard from '../../components/dvd-card/DVDcard';
import { fetchDVDData } from '../../api/dvdAPI';
import Background from '../../components/static/Background';

import { Outlet } from 'react-router-dom';

const movieIDs = [22257];

function MainPage({ isAuthenticated, username, handleLogout }) {
    const [dvds, setDVDs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDVDs = async () => {
            try {
                const fetchedDVDs = await Promise.all(movieIDs.map(id => fetchDVDData(id)));
                setDVDs(fetchedDVDs.filter(Boolean));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchDVDs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    
    return (
        <Background isAuthenticated={isAuthenticated} username={username} handleLogout={handleLogout} >
            <div className="dvd-container">
                {dvds.map(dvd => (
                    <DVDcard key={dvd.id} dvd={dvd} />
                ))}
            </div>
            <Outlet />
        </ Background>
    )
}

export default MainPage;