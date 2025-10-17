import { API_KEY } from './config.js';

const movie = document.getElementById("movie")
const tv = document.getElementById("tv")

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=2`;
const MOVIE_SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const TV_API_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const TV_SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query="`;


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(MOVIE_API_URL)

movie.addEventListener('click',()=>{
    movie.classList.add('active')
    tv.classList.remove('active')
    getMovies(MOVIE_API_URL)
})

tv.addEventListener('click',()=>{
    tv.classList.add('active')
    movie.classList.remove('active')
    getMovies(TV_API_URL)
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let source = ''
    if (movie.classList.contains('active')){
        source = MOVIE_SEARCH_API
    }
    else if (tv.classList.contains('active')) {
        source = TV_SEARCH_API
    }
    


    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(source + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

// -------------------------------function---------------------------------

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        let naming = ''
        if (movie.title)
            naming = movie.title
        else if (movie.name)
            naming = movie.name

        const { poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${naming}">
            <div class="movie-info">
                <h3>${naming}</h3>
                <span style="color:${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'lightgreen'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


/**
 * json: example
 * {
    "adult": false,
    "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    "genre_ids": [],
    "id": int,
    "original_language": "ja",
    "original_title": movie title in original language,
    "overview": ...,
    "popularity": 340.553,
    "poster_path": "/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
    "release_date": "2025-07-18",
    "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    "video": false,
    "vote_average": 7.813,
    "vote_count": 450
}

if movie, display title, otherwise, "name": "Breaking Bad",
 */