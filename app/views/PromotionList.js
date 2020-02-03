import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import GameItem from '../components/GameItem';

export default class HomeScreen extends Component {
  state = { 
    list: [],
    page: 1,
    hasMore: true,
  };
  loadData = async () => {
    const list = await this.$api.getPromotionList('hot', 1);
    this.setState({list});
  };

  render() {
    this.$api;
    return ( 
      <FlatList 
        data = {this.state.list}
        renderItem = {({item}) => <GameItem item={item}/>}
        keyExtractor = {item => item.goods_id}
      />
    );
  }

  componentDidMount(){
    //React 组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用
    this.loadData();
  }
}