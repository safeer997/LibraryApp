const Book = ({ name, author, description, genre, coverUrl }) => {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img
          src={coverUrl}
          className="card-img-top"
          alt={`Book by ${author}`}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Author : {author}</li>
          <li className="list-group-item">Genre : {genre}</li>
        </ul>
      </div>
    </>
  );
};
export default Book;
