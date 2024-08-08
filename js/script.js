"use strict";

// const category = "toys";

// console.log(`https://someurl.com${category}`/5);

// const user = "Marina";

// alert(`Hello,${user}`);


let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How much films?", "");

    while (numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How much films?", "");
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const a = prompt(`Your genres ${i}`,"");
         personalMovieDB.genres[i-1] = a; 
    }
}
writeYourGenres();
// const a = prompt("last movie",""),
//       b = prompt("Your rate",""),
//       c = prompt("last movie",""),
//       d = prompt("Your rate","");

// personalMovieDB.movies[a] = b;   
// personalMovieDB.movies[c] = d;

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("last movie",""),
              b = prompt("Your rate","");
              
              if (a !=null && b !=null && a !="" && b !="" && a.length < 50 )  {
                personalMovieDB.movies[a] = b; 
                console.log("done");
    
              } else{
                console.log("error");
                i--;
              }
    
    }
}
//rememberMyFilms();

function detectPersonalLevel(){
    if (numberOfFilms < 10){
        console.log("not enought movie");
    }else if (numberOfFilms >=10 && numberOfFilms <30){
        console.log("usual movie watcher");
    }else if(numberOfFilms >=30){
        console.log("the best movie watcher");
    }else {
        console.log("error");
    }
}

//detectPersonalLevel();



console.log(personalMovieDB);





// if (4 == 9){
//     console.log("ok!");
// }else{
//     console.log("not ok");

// }

// // const num = 50;
// // if (num < 49){
// //     console.log("Error");
// // } else if (num > 100){
// //     console.log("Mach");
// // } else {
// //     console.log("ok!");
// // }

// // (num === 50) ? console.log("ok!") :  console.log("Error");


// let num = 50;
// // while(num < 55){
// //     console.log(num);
// //     num++;
// // }

// // do{
// //     console.log(num);
// //     num++;
// // } while(num < 55);

// // for (let i = 1; i < 8; i++){
// //     console.log(num);
// //     num++;

// // }

// // for (let i = 1; i < 10; i++){
// //     if (i===5){
// //         break;
// //     }
// //     console.log(i);

// // }

// for (let i = 1; i < 10; i++){
//     if (i===5){
//         continue;
//     }
//     console.log(i);

// }


// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage("Hello there!");

// function calc (a , b){
//     return(a + b);

// }
// console.log(calc(4, 5));
// console.log(calc(7, 5));
// console.log(calc(7, 1));

// const calc = (a, b) => a + b;

// function ret(){
//     let num = 50;
//     //
//     return (num);
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello");
// }
// logger();


// const str = "test";
// console.log(str);
// console.log(str.toLocaleUpperCase());

// const fruit = "some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Helo Marina Wiegand";
// console.log(logg.slice(11, 19));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px"
// console.log(parseInt(test));
// console.log(parseFloat(test));

