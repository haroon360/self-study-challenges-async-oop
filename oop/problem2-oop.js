/**
 * CHALLENGE 2: Movie
 * Create a class `Movie` that models a movie. Each `Movie` object should
 * contain properties for `title`, `director`, and `releaseYear`, which
 * are set via arguments when the object is created.
 * The class should also have methods `getTitle`, `getDirector`, `getReleaseYear`,
 * and `getDetails` which returns a string combining the title, director, and releaseYear.
 */

class Movie {
    constructor (title, director, releaseYear) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
    }
    getTitle() {
        return this.title;
    }
    getDirector() {
        return this.director;
    }
    getReleaseYear() {
        return this.releaseYear;
    }
    getDetails() {
        return `${this.title} directed by ${this.director}, released in ${this.releaseYear}`;
    }
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const myMovie = new Movie('Inception', 'Christopher Nolan', 2010);
console.log(myMovie);
console.log(myMovie.getTitle()); // => should return 'Inception'
console.log(myMovie.getDirector()); // => should return 'Christopher Nolan'
console.log(myMovie.getReleaseYear()); // => should return 2010
console.log(myMovie.getDetails()); // => should return 'Inception directed by Christopher Nolan, released in 2010'
