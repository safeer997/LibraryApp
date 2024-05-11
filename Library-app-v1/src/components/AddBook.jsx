import { useRef } from "react";
import styles from "./AddBook.module.css"; 

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

    bookNameInputElement.current.value = "";
    bookAuthorInputElement.current.value = "";
    bookDescriptionInputElement.current.value = "";
    bookDescriptionInputElement.current.value = "";
    bookCoverLinkInputElement.current.value = "";

    handleNewBooksAddition(
      bookNamePassedToParent,
      bookAuthorPassedToParent,
      bookGenrePassedToParent,
      bookDescriptionPassedToParent,
      bookCoverLinkPassedToParent
    );
  };

  return (
    <div className={styles["add-book-container"]}>
      <div className={styles["add-book-header"]}>
        <p className={styles["add-book-title"]}>Add your books here</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <input
              type="text"
              ref={bookNameInputElement}
              className={styles["add-book-input"]}
              placeholder="Enter book name"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              ref={bookAuthorInputElement}
              className={styles["add-book-input"]}
              placeholder="Enter author name"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              ref={bookGenreInputElement}
              className={styles["add-book-input"]}
              placeholder="Enter book genre"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              ref={bookDescriptionInputElement}
              className={styles["add-book-input"]}
              placeholder="Enter book description"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              ref={bookCoverLinkInputElement}
              className={styles["add-book-input"]}
              placeholder="Enter link to cover"
            ></input>
          </div>
          <div className="col">
            <button
              onClick={handleAddButtonBookDetailsInput}
              type="button"
              className={styles["add-book-button"]}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
