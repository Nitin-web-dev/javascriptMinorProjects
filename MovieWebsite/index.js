const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// call the api function on load 
document.body.onload = () => {
    getMovies(API_URL);
}

// make call to api for data about movies
const getMovies =  async (url) => {
        const res = await fetch(url);
        const  data = await res.json();


        // console.log(data.results);

        //add the data into dom 
        if(data){
            addMoviesToDom(data.results);

        }else{
            main.innerHTML = "<h1>Loading</h1>";
        }

}



const addMoviesToDom = (movies) => {
    main.innerHTML = "";

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('card');
        movieEl.innerHTML = `
        <div class="imgWrapper">
            <img src="${IMG_PATH+poster_path}" alt="img" width="100">
        </div>
        <div class="textWrapper">
            <h1>${title} </h1>
            <span>
                ${vote_average}
            </span>
        </div>
        <div class="detailWrapper">
                <h3>Overview</h3>
                ${overview}
        </div>      
        `;

        main.appendChild(movieEl);
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})