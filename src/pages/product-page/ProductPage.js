import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDVDData } from "../../api/dvdAPI";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function ProductPage() {
    let { id } = useParams();
    const [ dvd, setDVD ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const dvdData = await fetchDVDData(id);
            setDVD(dvdData);
        };
    
        fetchData();
    }, [id]);

    return (
        <div>
            <Header />
            { dvd ? (
                <>
                    <h1>{dvd.title}</h1>
                    <h2>{dvd.release_date.slice(0, 4)}</h2>
                    <p>{dvd.genres.map(genre => genre.name).join(', ')}</p>
                    <p>{dvd.production_countries.map(country => country.name).join(', ')}</p>
                    <p>{dvd.vote_average}</p>
                    <p>{dvd.overview}</p>
                </>
            ) : (
                "Loading..."
            )}
            <Footer />
        </div>
    )
}

export default ProductPage;