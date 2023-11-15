import React, {useEffect,useState} from 'react'
import SearchBar from './components/SearchBar';
import AristFetcher from './components/fetchArtist';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  return (
    <div>
        <h1>Artist Information</h1>
        <SearchBar onSearch={handleSearch}/>
        <AristFetcher searchTerm={searchTerm}/>
    </div>
  )

};

export default App