import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { withNavigation } from 'react-navigation'; // 让子组件可以获取 navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  cover: {
    width: 96,
    height: 96,
  }
});

class GameItem extends Component {
  render() {
    const {
      goods_id: goodsId,
      cover_image: coverImage,
      price,
    } = this.props.item;

    return (
      <TouchableHighlight>
        <View style = {styles.container}>
          <Image
            source={{uri: coverImage}}
            style={styles.cover}
          />
          <Text>GameItem!</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


export default withNavigation(GameItem);
