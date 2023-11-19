import React, { useState, useEffect} from "react";
import SetList from "./SetListItem";
import SetlistDisplay from "./DisplaySetList";
import SetListItem from "./SetListItem";

const FetchSetlist = ({ searchTerm }) => {
    const [setlists, setSetlists] = useState([])

    const fetchSetlists = () => {
        if (!searchTerm){
            setSetlists([])
            return
        }
        fetch(`http://localhost:5000/api/setlists?search=${encodeURIComponent(searchTerm)}`)
            .then((response) => response.json())
            .then((data) => setSetlists(data.setlist))
            .catch((error) => console.error('Error fetching Setlist data:',error))
    }

    useEffect(() => {
        fetchSetlists()
    },[searchTerm])

    return <SetlistDisplay setlists={setlists}/>
}

export default FetchSetlist