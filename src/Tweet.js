import React from 'react'
import './Tweet.scss';

export default function Tweet({ user: { name, avatars, handle }, content: { text }, created_at: createdAt }) {
  return (
    <article>
      <header>
        <div className="avatar">
          <img
            src={avatars}
            alt={name}
            className="user-avater"
          />
          <h2 className="user-avater">{name}</h2>
        </div>
        <small className="user-handle">{handle}</small>
      </header>
      <div className="body">
        <p>
          {text}
        </p>
      </div>
      <footer>
        <small className="age">{createdAt}</small>
        <span className="actions">
          <a href="#"><i className="fa fa-flag"></i></a>
          <a href="#"><i className="fa fa-retweet"></i></a>
          <a href="#"><i className="fa fa-heart"></i></a>
        </span>
      </footer>
    </article>
  )
}
