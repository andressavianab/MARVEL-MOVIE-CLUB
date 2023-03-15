let rowCards = document.querySelector('#row-cards')
let card = document.querySelector('#card')

function moviesOnScreen(array) {
    array.forEach((movie) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<section class="poster">
        <img class="poster-img" src="${movie.cover_url}" alt="">
    </section>
    <p>${movie.title}</p>
    <section class="tags">
        <span class="tag">
            <i class="fa fa-clock-o" aria-hidden="true"></i><span>${movie.chronology}</span>
        </span>
        <span class="tag">
            <i class="fa fa-ticket" aria-hidden="true"></i><span>${movie.box_office}</pan>
        </span>
    </section>`
    rowCards.appendChild(card)
    })
}