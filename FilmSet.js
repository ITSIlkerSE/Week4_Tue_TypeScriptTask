const mov1 = "Flightplan";
const mov2 = "96 Hours";
const mov3 = "John Wick";
const mov4 = "Donald Duck";
const mov5 = "Tom&Jerry";
const filmTitles = [mov1, mov2, mov3];
filmTitles.push(mov4);
filmTitles.unshift(mov5);
console.log(filmTitles);
const filmRecommends = filmTitles.map((movie) => {
    return "kennst du schon " + movie + " ???";
});
console.log("\n\n Das sind die Filme: ", filmRecommends);
