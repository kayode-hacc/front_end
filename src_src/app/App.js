import {useState, useEffect} from 'react'

import MovieCard from './MoviesCard';
import './App.css'
import SearchIcon from './search.svg'
//649f2bcb

const API_URL = 'http://www.omdbapi.com?apikey=649f2bcb';

const App = () => {
   const [movies, setMovies] = useState([]);
   const [searchTerm, setSearchTerm] =useState('') 
   const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`)
        const data = await response.json();
        setMovies(data.Search)
   }   

//   const moivie1 = {
   //  "Title": "Reign of Judges: Title of Liberty - Concept Short",
   // "Year": "2018",
   // "imdbID": "tt4275958",
   // "Type": "movie",
   // "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
//}
    useEffect(() => {
      searchMovies('Spiderman')
    },[])
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder = "search for movies"
                value = {searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)} 
                />
               <img 
                src={SearchIcon}
                alt='search'
                onClick={() => {searchMovies(searchTerm)}}
                />
            </div>

            {movies?.length > 0
               ?(
                  <div className='container'>
                     {movies.map(( movie ) =>{
                        return (
                            <MovieCard movie= {movie}  />
                           );
                       })}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2> No movies found</h2>
                    </div>
                )}
            
        </div>
    );
}

export default App