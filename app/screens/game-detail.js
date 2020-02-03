import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class GameDetail extends Component {
  render() {
    const { navigation } = this.props;
    const goodsId = navigation.getParam('goodsId', '');
    const title = navigation.getParam('title', '');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>goodsId: {goodsId}</Text>
        <Text>title: {title}</Text>
      </View>
    )
  }
}