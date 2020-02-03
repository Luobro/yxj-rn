import { StyleSheet } from 'react-native';
import { STYLE } from './constants';
export default StyleSheet.create({
  shadowNormal: {
    shadowColor: STYLE.COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: STYLE.OPACITY_WEAK,
    shadowRadius: 12,
  },
});

export { STYLE as BASE_STYLE };