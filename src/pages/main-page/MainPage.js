import React, { useState, useEffect } from 'react';
import DVDcard from '../../components/dvd-card/DVDcard';
import { fetchDVDData } from '../../filler/api';
import Background from '../../components/static/Background';

import { Outlet } from 'react-router-dom';

function MainPage() {
    const [dvds, setDVDs] = useState([]);
    const movieID = [22257];

    useEffect(() => {
        const fetchDVDs = async () => {
            const fetchedDVDs = [];
            
            for (const id of movieID) {
                const dvdData = await fetchDVDData(id);
                if (dvdData) {
                fetchedDVDs.push(dvdData);
                }
            }
        
            setDVDs(fetchedDVDs);
        };
    
        fetchDVDs();
      }, []);
    
    return (
        <Background >
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