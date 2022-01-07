import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import HeaderFixed from './components/Header';
import './App.css';

const MainPage = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <HeaderFixed active="1" />

      <br /> <hr /> <br /> 

      Destaque

      <br /> <hr /> <br /> 

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <br /> <hr /> <br /> 

      Rodapé
    </div>
  );
}

export default MainPage;