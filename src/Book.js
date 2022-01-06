import React from 'react'

const Book = (props) => {
  const { image, title, author } = props.book;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }
  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className="book" onMouseOver={() => {
      console.log(author);
    }}>
      <img src={image} alt="book"/>
      {/* Simple inline click envent */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h2>{author.toUpperCase()}</h2>
      <button type='button' onClick={clickHandler}>Click me</button>
      {/* without the arrow function () => part in the onClick function, the code would execute when the page loads */}
      <button type='button' onClick={() => complexExample(author)}>Complex button</button>
    </article>
  )
};

export default Book
