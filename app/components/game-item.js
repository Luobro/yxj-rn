import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { withNavigation } from 'react-navigation'; // 让子组件可以获取 navigation
import { BASE_STYLE as baseStyle } from '../common/style'
import WhiteSpace from './white-space';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: baseStyle.SIZE_SPACING_MD,
  },
  leftContainer: {
    position: 'relative',
  },
  cover: {
    width: 96,
    height: 96,
    borderRadius: baseStyle.RADIUS_MD,
  },
  rightContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
    height: '100%',
  },
  title: {
    fontSize: baseStyle.FONT_SIZE_HEAD,
    opacity: baseStyle.OPACITY_HEAD,
  },
  price: {
    fontSize: baseStyle.FONT_SIZE_BODY,
    color: baseStyle.COLOR_IMPORTANT,
    opacity: baseStyle.OPACITY_HEAD,
  }
});

class GameItem extends Component {
  render() {
    const {
      goods_id: goodsId,
      cover_image: coverImage,
      name: title,
      price: {
        non_plus_user: {
          sale_price: salePrice
        }
      },
    } = this.props.item;
    return (
      <TouchableHighlight
        onPress = {() => {this.props.navigation.navigate('GameDetail', {goodsId, title})}}
      >
        <View style = {styles.container}>
          <View style = {styles.leftContainer}>
            <Image
              source = {{uri: coverImage}}
              style = {styles.cover}
            />
          </View>
          <WhiteSpace direction = 'h'/>
          <View style = {styles.rightContainer}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.price}>HK${salePrice}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


export default withNavigation(GameItem);
