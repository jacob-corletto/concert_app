import React from 'react'

const SetListItem = ({setlist}) => {
    return (
        <div>
          <h2>
            <a href={setlist.artist.url} target="_blank" rel="noopener noreferrer">
              {setlist.artist.name}
            </a>
          </h2>
          <h3>{setlist.eventDate}</h3>
          <p>Venue: {setlist.venue.name}, {setlist.venue.city.name}, {setlist.venue.city.state}</p>
          <p>Info: {setlist.info}</p>
          <h4>Set:</h4>
          {setlist.sets.set.map((set, index) => (
            <div key={index}>
              {set.encore ? <p>Encore {set.encore}</p> : null}
              <ul>
                {set.song.map((song, songIndex) => (
                  <li key={songIndex}>
                    {song.tape ? <span>[Tape] </span> : null}
                    {song.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a href={setlist.url} target="_blank" rel="noopener noreferrer">
            View on Setlist.fm
          </a>
        </div>
      )
}

export default SetListItem