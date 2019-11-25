import React from 'react';
import Tweet from './Tweet';


const TweetList = ({ tweets }) => {

  const tweetList = tweets.map(tweet => <Tweet {...tweet} />)

  return (
    <section id="tweet-list">
      {
        tweetList
      }
    </section>
  );
}

export default TweetList;
