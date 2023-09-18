import React from 'react';
import DVDcard from '../../components/dvd-card/DVDcard';
import { Outlet } from 'react-router-dom';
import useFetchDVD from '../../customHooks/useFetchDVD';
import { useAuth } from '../../components/authentication/authContext';

function MainPage() {
//    const { isAuthenticated, username } = useAuth();

    const { dvds, loading, error } = useFetchDVD();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main >
            <div className="dvd-container">
                {dvds.map(dvd => (
                <DVDcard key={dvd.id} dvd={dvd} />
                ))}
            </div>
        <Outlet />
        </main>
    );
}

export default MainPage;
