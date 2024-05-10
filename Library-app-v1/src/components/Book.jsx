const Book = () => {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/khs11u80-0/regionalbooks/a/x/c/wings-of-fire-an-autobiography-of-abdul-kalam-original-imafxphjg7zhf6yy.jpeg?q=90&crop=false"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">Book Name</h5>
          <p className="card-text">short description about book</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Author</li>
          <li className="list-group-item">Genre</li>
        </ul>
      </div>
    </>
  );
};
export default Book;
