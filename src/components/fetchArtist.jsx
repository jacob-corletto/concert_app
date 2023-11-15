import React, { useState, useEffect} from "react";
import ArtistList from "./ArtistList";

const AristFetcher = ({ searchTerm }) => {
    const [artists, setArtists] = useState([])

    const fetchArtists = () => {
        if (!searchTerm){
            setArtists([])
            return
        }
        fetch(`http://localhost:5000/api/artists?search=${encodeURIComponent(searchTerm)}`)
            .then((response) => response.json())
            .then((data) => setArtists(data.artist))
            .catch((error) => console.error('Error fetching artist data:',error))
    }

    useEffect(() => {
        fetchArtists()
    },[searchTerm])

    return <ArtistList artists={artists}/>
}

export default AristFetcher