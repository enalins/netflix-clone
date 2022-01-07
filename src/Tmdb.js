const API_KEY = '7071b302c9f2025a536380761706e60b';
const API_BASE = 'https://api.themoviedb.org/3';
const basicSetUp = `language=pt-BR&api_key=${API_KEY}`;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  return json
}

var getInfo = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&${basicSetUp}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?${basicSetUp}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?${basicSetUp}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${basicSetUp}`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(`/discover/movie?with_genres=35&${basicSetUp}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${basicSetUp}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&${basicSetUp}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&${basicSetUp}`)
      }
    ]
  }
}

export default getInfo;