import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const offlineBackgroundColor = '#b52424'
const onlineBackgroundColor = 'green'
const color = '#fff'

export default StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    bottom: 0,
  },
  text: { color },
  offlineContainer: {
    backgroundColor: offlineBackgroundColor,
  },
  onlineContainer: {
    backgroundColor: onlineBackgroundColor,
  },
})
