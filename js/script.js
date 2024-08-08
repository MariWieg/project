"use strict";

const category = "toys";

console.log(`https://someurl.com${category}`/5);

const user = "Marina";

alert(`Hello,${user}`);


const numberOfFilms = +prompt("How much films?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("last movie",""),
      b = prompt("Your rate",""),
      c = prompt("last movie",""),
      d = prompt("Your rate","");

personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
