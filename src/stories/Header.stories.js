import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../Header';

export default {
  title: 'Header'
}

export const defaultHeader = () => <Header />
export const headerWithProps = () => <Header username='Bob' profileImg='/images/profile-hex.png' />
