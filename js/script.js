'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/*const a = prompt('Один из последних просмотренных фильмов ?', ''),
      b = prompt('На сколько оцените его ?', ''),
      c = prompt('Один из последних просмотренных фильмов ?', ''),
      d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
*/

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов ?', ''),
        b = prompt('На сколько оцените его ?', '');
  if (a != null && b != null  && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
        
}

/*
let i = 0; 
do  {
  
  const a = prompt('Один из последних просмотренных фильмов ?', ''),
        b = prompt('На сколько оцените его ?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
  i++;

} while (i < 2);
*/

/*
let i = 0; 
while (i < 2) {
  const a = prompt('Один из последних просмотренных фильмов ?', ''),
    b = prompt('На сколько оцените его ?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
  i++;
} 
*/

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
  console.log('Просмотрено любите смотреть фильмы');
} else if ( personalMovieDB.count >= 30) {
  console.log('Вы посмотрели очень много фильмов');
} else {
  console.log('Произошла ошибка');
}


console.log(personalMovieDB);