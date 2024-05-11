import { useState } from "react";
import AddBook from "./components/AddBook";
import BookDisplay from "./components/BookDisplay";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const books = [
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.",
      coverUrl:
        "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description:
        "The novel explores the irrationality of adult attitudes toward race and class in the Deep South of the 1930s, as seen through the eyes of a young girl, Scout Finch.",
      coverUrl:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      name: "To Kill a Mocking-bird",
      author: "Harper Lee",
      genre: "Fiction",
      description:
        "The novel explores the irrationality of adult attitudes toward race and class in the Deep South of the 1930s, as seen through the eyes of a young girl, Scout Finch.",
      coverUrl:
        "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
  ];

  const [booksToDisplay, setBooksToDisplay] = useState(books);

  const handleNewBooksAddition = (
    enteredBookName,
    enteredAuthorName,
    enteredGenre,
    enteredDescription,
    enteredUrl
  ) => {
    setBooksToDisplay((currentValue) => {
      const newBooksToDisplay = [
        ...currentValue,
        {
          name: enteredBookName,
          author: enteredAuthorName,
          genre: enteredGenre,
          description: enteredDescription,
          coverUrl: enteredUrl,
        },
      ];
      return newBooksToDisplay;
    });
  };

  return (
    <>
      <Header></Header>
      <BookDisplay books={booksToDisplay}></BookDisplay>
      <AddBook handleNewBooksAddition={handleNewBooksAddition}></AddBook>
      <Footer></Footer>
    </>
  );
}

export default App;
