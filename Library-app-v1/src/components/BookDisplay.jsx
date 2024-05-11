import Book from "./Book";
const BookDisplay = ({ books}) => {
  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row">
            {books.map((book) => {
              return (
                <div className="col" key={book.name}>
                  <Book
                    name={book.name}
                    author={book.author}
                    genre={book.genre}
                    description={book.description}
                    coverUrl={book.coverUrl}
                  ></Book>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDisplay;
