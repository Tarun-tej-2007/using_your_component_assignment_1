import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <h3>{book.genre}</h3>
      <h4>{book.author}</h4>
    </div>
  );
};

export default BookCard;