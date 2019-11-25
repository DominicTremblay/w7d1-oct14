import React from 'react';
import { action } from '@storybook/addon-actions';
import NewTweet from '../NewTweet';

export default {
  title: 'NewTweet',
  decorators: [storyFn => <div style={{ backgroundColor: 'white' }}>{storyFn()}</div>]
}

export const NewTweetDefault = () => <NewTweet />
export const NewTweetSubmit = () => <NewTweet tweetSubmit={action('Tweet Submitted')} />