let movies = []
const endPointAPI = 'https://mcuapi.herokuapp.com/api/v1/movies?columns=id%2C%20title%2C%20release_date%2C%20box_office%2C%20overview%2C%20cover_url%2C%20directed_by%2C%20phase%2C%20chronology&order=chronology%2CDESC'
getAPI()



let chronology = document.querySelector('#btn-chronology')
let boxOffice = document.querySelector('#btn-boxOffice')
let nextReleases = document.querySelector("#btn-nextReleases")

async function getAPI() {
    const answer = await fetch(endPointAPI)
    moviesAPI = await answer.json()
    movies = await moviesAPI.data
   
    moviesOnScreen(movies)

    chronology.addEventListener('click', () => {
        rowCards.innerHTML = ''
        movies.sort((movieA, movieB) => {
            return movieA.chronology - movieB.chronology
        })
        moviesOnScreen(movies)
    })

    boxOffice.addEventListener('click', () => {
        rowCards.innerHTML = ''
        movies.sort((movieA, movieB) => {
            return movieB.box_office - movieA.box_office
        })
        moviesOnScreen(movies)
    })

    nextReleases.addEventListener('click', () => { 
        rowCards.innerHTML = ''
       let nextMovieReleases = movies.filter((movie) => {
          return movie.release_date > '2023-03-16'
        })
        moviesOnScreen(nextMovieReleases)
    })
}

