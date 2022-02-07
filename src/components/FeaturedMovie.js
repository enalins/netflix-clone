import React from "react";
import './FeaturedMovie.css';
import logo from '../assets/images/favicon.png';
import {PlayArrowRounded, InfoOutlined} from '@material-ui/icons';

const FeaturedMovie = ({item}) => {
  return (
    <section className="featured" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured__overlayOne"></div>

      <div className="featured__type">
        <img src={logo} alt="Logo" className="featured__type__icon" />
        <div className="featured__type__text">Filme</div>
      </div>
      <h2 className="featured__title">
        {item.title}
      </h2>
      <p className="featured__desc">
        {item.overview}
      </p>
      <div className="featured__action">
        <button className="featured__action__watch">
          <PlayArrowRounded />
          Assistir
        </button>
        <button className="featured__action__moreInfo">
          <InfoOutlined />
          Mais Informações
        </button>
      </div>

      <div className="featured__overlayTwo"></div>
    </section>
  );
};
export default FeaturedMovie;