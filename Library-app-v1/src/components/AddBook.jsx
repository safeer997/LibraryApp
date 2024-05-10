const AddBook = () => {
  return (
    <>
      <div>
        <p>Add your books here </p>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <input type="text" placeholder="enter book name"></input>
            </div>
            <div class="col">
              <input type="text" placeholder="enter author name "></input>
            </div>
            <div class="col">
              <input type="text" placeholder="enter book description"></input>
            </div>
            <div class="col">
              <input type="text" placeholder="enter link to cover"></input>
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary">
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
