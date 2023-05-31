//INSTRUCTIONS
//Use a fp approach to writing a program that creates the output object below:
// {
//   classic: ["The Catcher in the Rye", "The Godfather", "Casablanca"],
//   fantasy: [
//     "The Lord of the Rings",
//     "Harry Potter and the Philosopher's Stone",
//     "Coraline (2009) movie posterAmazon.comCoraline",
//   ],
//   dystopian: ["1984", "Divergent", "The Hunger Games", "The Maze Runner"],
// }

const library = {
  books: [
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      rating: 4.49,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      rating: 4.47,
    },
    {
      title: "1984",
      genre: "Dystopian",
      rating: 4.18,
    },
    {
      title: "The Catcher in the Rye",
      genre: "Classic",
      rating: 3.81,
    },
  ],
  movies: [
    {
      title: "Divergent",
      genre: "Dystopian",
      rating: 4.3,
    },
    {
      title: "The Godfather",
      genre: "Classic",
      rating: 5.0,
    },
    {
      title: "The Hunger Games",
      genre: "Dystopian",
      rating: 3.2,
    },
    {
      title: "Casablanca",
      genre: "Classic",
      rating: 4.9,
    },
    {
      title: "The Maze Runner",
      genre: "Dystopian",
      rating: 3.7,
    },
    {
      title: "Coraline",
      genre: "Fantasy",
      rating: 2,
    },
  ],
};
//Use a fp approach to writing a program that creates the output object below:
// {
//   classic: ["The Catcher in the Rye", "The Godfather", "Casablanca"],
//   fantasy: [
//     "The Lord of the Rings",
//     "Harry Potter and the Philosopher's Stone",
//     "Coraline (2009) movie posterAmazon.comCoraline",
//   ],
//   dystopian: ["1984", "Divergent", "The Hunger Games", "The Maze Runner"],
// }

//---- SOLUTION ----//
// A function that takes an array of objects and returns an object with keys as genres and values as arrays of titles
const groupByGenre = (arr) => {
  // Use reduce to accumulate an object with genres as keys
  return arr.reduce((acc, curr) => {
    // Get the genre and title of the current object
    const genre = curr.genre;
    const title = curr.title;
    // If the genre already exists in the accumulator, push the title to the array
    if (acc[genre]) {
      acc[genre].push(title);
    } else {
      // Otherwise, create a new array with the title as the first element
      acc[genre] = [title];
    }
    // Return the updated accumulator
    return acc;
  }, {}); // Initialize the accumulator as an empty object
};

// A function that takes an object with books and movies arrays and returns an object with genres as keys and titles as values
const groupLibraryByGenre = (library) => {
  // Get the books and movies arrays from the library object
  const { books, movies } = library;
  // Use groupByGenre function to get an object with genres and book titles
  const booksByGenre = groupByGenre(books);
  // Use groupByGenre function to get an object with genres and movie titles
  const moviesByGenre = groupByGenre(movies);
  // Use Object.assign to merge the two objects into one
  const libraryByGenre = Object.assign({}, booksByGenre, moviesByGenre);
  // Return the library by genre object
  return libraryByGenre;
};

// Test the code with the given library object
console.log(groupLibraryByGenre(library));

//----- ALTERNATIVE SOLUTION 1 -----//
// Alternative solution 1: Using map and Object.fromEntries
// const groupByGenre = (arr) => {
//   // Use map to create an array of [genre, title] pairs
//   const pairs = arr.map((obj) => [obj.genre, obj.title]);
//   // Use Object.fromEntries to create an object from the pairs array
//   const obj = Object.fromEntries(pairs);
//   // Return the object
//   return obj;
// };

// const groupLibraryByGenre = (library) => {
//   // Get the books and movies arrays from the library object
//   const { books, movies } = library;
//   // Use groupByGenre function to get an object with genres and book titles
//   const booksByGenre = groupByGenre(books);
//   // Use groupByGenre function to get an object with genres and movie titles
//   const moviesByGenre = groupByGenre(movies);
//   // Use Object.assign to merge the two objects into one
//   const libraryByGenre = Object.assign({}, booksByGenre, moviesByGenre);
//   // Return the library by genre object
//   return libraryByGenre;
// };

//----- ALTERNATIVE SOLUTION 2 -----//

//Using forEach and a helper function
// const groupByGenre = (arr) => {
//   // Create an empty object to store the genres and titles
//   const obj = {};
//   // Define a helper function that takes a genre and a title and adds them to the object
//   const addToObj = (genre, title) => {
//     // If the genre already exists in the object, push the title to the array
//     if (obj[genre]) {
//       obj[genre].push(title);
//     } else {
//       // Otherwise, create a new array with the title as the first element
//       obj[genre] = [title];
//     }
//   };
//   // Use forEach to iterate over the array and call the helper function for each object
//   arr.forEach((obj) => {
//     // Get the genre and title of the current object
//     const genre = obj.genre;
//     const title = obj.title;
//     // Call the helper function with the genre and title
//     addToObj(genre, title);
//   });
//   // Return the object
//   return obj;
// };

// const groupLibraryByGenre = (library) => {
//   // Get the books and movies arrays from the library object
//   const { books, movies } = library;
//   // Use groupByGenre function to get an object with genres and book titles
//   const booksByGenre = groupByGenre(books);
//   // Use groupByGenre function to get an object with genres and movie titles
//   const moviesByGenre = groupByGenre(movies);
//   // Use Object.assign to merge the two objects into one
//   const libraryByGenre = Object.assign({}, booksByGenre, moviesByGenre);
//   // Return the library by genre object
//   return libraryByGenre;
// };
