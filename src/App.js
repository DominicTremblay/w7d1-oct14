import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import TweetList from './TweetList';

const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



function App() {

  return (
    <Fragment>
      <Nav />
      <Header name='Bob' profileImg='/images/profile-hex.png' />
      <main class="container">
        <TweetList tweets={tweets} />
      </main>
    </Fragment>
  );
}

export default App;
