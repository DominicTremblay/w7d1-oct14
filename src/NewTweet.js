import React from 'react';
import './NewTweet.scss';

const NewTweet = ({ tweetSubmit }) => {


  const handleSubmit = event => {
    event.preventDefault();
    tweetSubmit('TweetSubmitted');

  }

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
        </div>
      </header>

      <form method="POST" action="/tweets" onSubmit={handleSubmit} >
        <textarea
          name="text"
          placeholder="What are you humming about?"
        ></textarea>
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span className="counter">140</span>
        </footer>
      </form>
    </section>
  );
}

export default NewTweet;
