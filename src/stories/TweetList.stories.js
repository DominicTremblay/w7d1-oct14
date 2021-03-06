import React from 'react';
import { action } from '@storybook/addon-actions';
import TweetList from '../TweetList';

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

export default {
  title: 'TweetList',
  decorators: [storyFn => <div style={{ backgroundColor: 'white' }}>{storyFn()}</div>]

}

export const listOfTweets = () => <TweetList tweets={tweets} /> 