import React from 'react'

const ArtistList = ({artists}) => {
    return (
        <ul>
            {artists.map((artist) =>(
                <li key={artist.mbid}>
                    <strong>{artist.name}</strong>
                    <p>Sort Name: {artist.sortName}</p>
                    <p>Disambiguation: {artist.disambiguation}</p>
                    <p>
                        <a href={artist.url} target="_blank" rel="noopener noreferrer">
                            More Info
                        </a>
                    </p>
                    <hr />
                </li>
            ))}
        </ul>
    )
}

export default ArtistList