let movies = []
const endPointAPI = 'https://mcuapi.herokuapp.com/api/v1/movies?columns=id%2C%20title%2C%20release_date%2C%20box_office%2C%20overview%2C%20cover_url%2C%20directed_by%2C%20phase%2C%20chronology&order=chronology%2CDESC'
getAPI()

async function getAPI() {
    const answer = await fetch(endPointAPI)
    moviesAPI = await answer.json()
    movies = await moviesAPI.data
    moviesOnScreen(movies)
}