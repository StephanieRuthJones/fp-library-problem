# Functional Programming - Library Practice Problem

## Problem

Write a program that uses a functional programming approach. It should take in
the `library` object ( _INPUT_ below) as input and output an object with genres
as keys assigned to arrays of book and movie titles within that genre ( _OUTPUT_
below).

_INPUT_

```
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
```

_OUTPUT_

```
{
    classic: ["The Catcher in the Rye", "The Godfather", "Casablanca"],
    fantasy: [
      "The Lord of the Rings",
      "Harry Potter and the Philosopher's Stone",
      "Coraline (2009) movie posterAmazon.comCoraline",
    ],
    dystopian: ["1984", "Divergent", "The Hunger Games", "The Maze Runner"],
}
```
