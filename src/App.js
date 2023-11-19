import React, {useEffect,useState} from 'react'
import SearchBar from './components/SearchBar';
import AristFetcher from './components/fetchArtist';
import SetListList from './components/SetListItem';
import FetchSetList from './components/fetchSetlist';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  return (
    <div>
        <h1>Artist Information</h1>
        <SearchBar onSearch={handleSearch}/>
        <FetchSetList searchTerm ={searchTerm}/>
    </div>
  )

};

export default App