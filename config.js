const apiKey = '7bd61d5db2476d1307ff393ff142924b';
export const hostUrl = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p/w1280';

export const endpoints = {
  mostPopularMovies: () => `${hostUrl}/movie/popular?api_key=${apiKey}`,
  genres: () => `https://api.themoviedb.org/3/genre/movie/list?api_key=7bd61d5db2476d1307ff393ff142924b`,
  genreMovies: () => `${hostUrl}/genre/36/movies?api_key=${apiKey}`,
};

export const getImageUrl = (path) => `${imageUrl}${path}`;

