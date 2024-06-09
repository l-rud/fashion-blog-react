import React from 'react';

const Article = ({ date, title, imageUrl, text }) => {
  return (
    <article>
      <p className="date">{date}</p>
      <p className="articleTitle">{title}</p>
      <img src={imageUrl} alt={title} />
      <p className="articleText">{text}</p>
      <p className="continues">Continues...</p>
    </article>
  );
};

export default Article;