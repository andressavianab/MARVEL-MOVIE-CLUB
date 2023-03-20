let movies = [];
const endPointAPI =
  "https://mcuapi.herokuapp.com/api/v1/movies?columns=id%2C%20title%2C%20release_date%2C%20box_office%2C%20overview%2C%20cover_url%2C%20directed_by%2C%20phase%2C%20chronology&order=chronology%2CDESC";
getAPI();

let chronology = document.querySelector("#btn-chronology");
let boxOffice = document.querySelector("#btn-boxOffice");
let nextReleases = document.querySelector("#btn-nextReleases");

let chronologyH = document.querySelector("#btn-h-chronology");
let boxOfficeH = document.querySelector("#btn-h-boxOffice");
let nextReleasesH = document.querySelector("#btn-h-nextReleases");

let hamburgerMenu = document.querySelector("#hamburger-menu")
let closeMenuH = document.querySelector('.close-menu-h')

async function getAPI() {
  const answer = await fetch(endPointAPI);
  moviesAPI = await answer.json();
  movies = await moviesAPI.data;

  moviesOnScreen(movies);

  chronology.addEventListener("click", () => {
    clearRowCards();
    byChronology();
    moviesOnScreen(movies);
  });

  boxOffice.addEventListener("click", () => {
    clearRowCards();
    byBoxOffice()
    moviesOnScreen(movies);
  });

  nextReleases.addEventListener("click", () => {
    clearRowCards();
    let nextMovieReleases = movies.filter((movie) => {
      return movie.release_date > "2023-03-16";
    });
    moviesOnScreen(nextMovieReleases);
  });

  chronologyH.addEventListener("click", () => {
    clearRowCards();
    byChronology();
    moviesOnScreen(movies);
  });

  boxOfficeH.addEventListener("click", () => {
    clearRowCards();
    byBoxOffice();
    moviesOnScreen(movies);
  });

  nextReleasesH.addEventListener("click", () => {
    clearRowCards();
    let nextMovieReleases = movies.filter((movie) => {
      return movie.release_date > "2023-03-16";
    });
    moviesOnScreen(nextMovieReleases);
  });
}


let menuHFilter = document.querySelector('.menu-h-filter')

hamburgerMenu.addEventListener('click', () => {
  menuHFilter.style.visibility = 'visible'
})

closeMenuH.addEventListener('click', () => {
  menuHFilter.style.visibility = 'hidden'
})



function clearRowCards() {
  rowCards.innerHTML = "";
}
