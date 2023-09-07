import React from 'react';
import DVDcard from '../../components/dvd-card/DVDcard';
import Background from '../../components/container/Background';
import { Outlet } from 'react-router-dom';
import useFetchDVD from '../../customHooks/useFetchDVD';
import { useAuth } from '../../components/authentication/authContext';
import { Login } from '../login/LoginPage'

const movieIDs = [22257];

function MainPage({ showLogin, setShowLogin }) {
//    const { isAuthenticated, username } = useAuth();

    const { dvds, loading, error } = useFetchDVD(movieIDs);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Background >
            {showLogin && <Login onClose={() => setShowLogin(false)} />}

            <div className="dvd-container">
                {dvds.map(dvd => (
                <DVDcard key={dvd.id} dvd={dvd} />
                ))}
            </div>
        <Outlet />
        </Background>
    );
}

export default MainPage;
