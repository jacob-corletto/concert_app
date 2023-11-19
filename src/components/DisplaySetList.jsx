import React from 'react';
import SetListItem from './SetListItem'; // Import the SetlistItem component

const SetlistDisplay = ({ setlists }) => {
  return (
    <div>
      {setlists.map((setlist, index) => (
        <SetListItem key={index} setlist={setlist} />
      ))}
    </div>
  );
};

export default SetlistDisplay;