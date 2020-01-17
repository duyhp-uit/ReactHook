import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getFilm from './effect/getFilm'
import keyBy from 'lodash/keyBy'
import axios from 'axios'
import { render } from '@testing-library/react';
import FilmDetail from './components/FilmDetail';
function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [currentFilm, setCurrentFilm] = useState({});
  useEffect(async ()=> {
    const result =  await getFilm();
    setFilms(result);
  }, []);
  return(
    <div>
    <ul>
      {films.map(item => (
        <li key={item.id}>
          <button onClick = {() => { setCurrentFilm(item)}}>{item.title}</button>
        </li>
      ))}
    </ul>
    <FilmDetail
    film = {currentFilm}
    >
    </FilmDetail>
    </div>
      );
             
    }
export default App;
