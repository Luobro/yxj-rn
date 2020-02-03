import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PromotionList from './screens/promotion-list';
import GameDetail from './screens/game-detail';


class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: PromotionList,
  Settings: SettingsScreen,
});

const StackNavigator = createStackNavigator({
  Main: TabNavigator,
  GameDetail: GameDetail,
}, {
  headerMode: 'float',
})

export default createAppContainer(StackNavigator);