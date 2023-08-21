import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DVDcard from '../../components/dvd-card/DVDcard';
import { fetchDVDData } from '../../filler/api';
import Background from '../../components/static/Background'

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
        <div>
            <Header />
            <Background />
            <div className="dvd-container">
                {dvds.map(dvd => (
                    <DVDcard key={dvd.id} dvd={dvd} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;