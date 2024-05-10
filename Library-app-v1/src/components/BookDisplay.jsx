import Book from "./Book";
const BookDisplay = () => {
  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Book></Book>
            </div>
            <div className="col">
              <Book></Book>
            </div>
            <div className="col">
              <Book></Book>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDisplay;
