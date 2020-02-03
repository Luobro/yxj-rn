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
import * as constants from './common/constants';

Object.assign(Component.prototype, {$api: api, $constants: constants});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Router />
    )
  }
}