import React from 'react';
import { action } from '@storybook/addon-actions';
import Nav from '../Nav';

export default {
  title: 'Nav'
}

export const defaultNav = () => <Nav />
export const NavWithClick = () => <Nav writeTweet={action('Write Tweet')} />
