import { useRef } from "react";

const AddBook = ({ handleNewBooksAddition }) => {
  const bookNameInputElement = useRef();
  const bookAuthorInputElement = useRef();
  const bookDescriptionInputElement = useRef();
  const bookGenreInputElement = useRef();
  const bookCoverLinkInputElement = useRef();

  const handleAddButtonBookDetailsInput = () => {
    const bookNamePassedToParent = bookNameInputElement.current.value;
    const bookAuthorPassedToParent = bookAuthorInputElement.current.value;
    const bookDescriptionPassedToParent =
      bookDescriptionInputElement.current.value;
    const bookGenrePassedToParent = bookGenreInputElement.current.value;
    const bookCoverLinkPassedToParent = bookCoverLinkInputElement.current.value;

    handleNewBooksAddition(
      bookNamePassedToParent,
      bookAuthorPassedToParent,
      bookGenrePassedToParent,
      bookDescriptionPassedToParent,
      bookCoverLinkPassedToParent
    );
  };
  return (
    <>
      <div>
        <p>Add your books here </p>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <input
                type="text"
                ref={bookNameInputElement}
                placeholder="enter book name"
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                ref={bookAuthorInputElement}
                placeholder="enter author name "
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                ref={bookGenreInputElement}
                placeholder="enter book genre"
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                ref={bookDescriptionInputElement}
                placeholder="enter book description"
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                ref={bookCoverLinkInputElement}
                placeholder="enter link to cover"
              ></input>
            </div>
            <div className="col">
              <button
                onClick={handleAddButtonBookDetailsInput}
                type="button"
                className="btn btn-primary"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBook;
