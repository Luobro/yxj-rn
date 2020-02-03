import React, { Component } from 'react';
import { View } from 'react-native';
import { BASE_STYLE as styleBase } from '../common/style'

class WhiteSpace extends Component {
  static defaultProps = {
    direction: 'v',
    size: 'md',
  };

  render() {
    const { size, direction } = this.props;
    const spaceValue = styleBase[`SIZE_SPACING_${String(size).toUpperCase()}`];
    let directionValue;
    let style = {};
    if (direction === 'h' || direction === 'horizontal') {
      directionValue = 'width';
    } else {
      directionValue = 'height';
    }

    style[directionValue] = spaceValue;
    return <View style={style} />
  }
}

export default WhiteSpace;