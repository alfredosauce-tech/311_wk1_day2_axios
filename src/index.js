// import axios here

const { default: Axios } = require("axios")

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return Axios(url).then(response => response)
//bringing back API 
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return Axios(url).then(response => response.data)
  // reaching out to the API data
}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return Axios(url)
  .then(response => response)
  .catch(function (error) {
  return(error.response.status);
  // catching  error and returning response status
})
}


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}