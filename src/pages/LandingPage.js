import React, {useEffect, useState} from 'react';
import Tmdb from '../Tmdb';
import HeaderFixed from '../components/Header';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieRow from '../components/MovieRow';

const LandingPage = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let 
        action = list.filter(i=>i.slug === 'action'),
        randomChosen = Math.floor(Math.random() * (action[0].items.results.length - 1)),
        chosen = action[0].items.results[randomChosen],
        chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie')

        console.log(chosenInfo)
      setFeaturedData(chosenInfo)
    };

    loadAll();

    document.title = "Início - Netflix"
  }, []);

  return (
    <>
      <HeaderFixed active="1" />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </>
  );
}

export default LandingPage;