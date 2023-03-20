
function byChronology() { movies.sort((movieA, movieB) => {
    return movieA.chronology - movieB.chronology;
  })
}

function byBoxOffice() {
    movies.sort((movieA, movieB) => {
        return movieB.box_office - movieA.box_office;
      });
}
