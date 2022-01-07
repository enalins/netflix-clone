import React from 'react';
import './MovieRow.css';
import { Carousel } from '@trendyol-js/react-carousel';

const MovieRow = ({title, items}) => {

  return (
    <div>
      <h2 className="listTitle">{title}</h2>

      <div className="listContainer">
        <Carousel show={10} slide={10}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div className="listItem" key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MovieRow;