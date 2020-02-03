/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Router from './Router'
import * as api from './common/api';

Object.assign(Component.prototype, {$api: api});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Router />
    )
  }
}