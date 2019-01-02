import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const backgroundColor = '#b52424'
const color = '#fff'

export default StyleSheet.create({
  offlineContainer: {
    backgroundColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    bottom: 0,
  },
  offlineText: { color },
})
