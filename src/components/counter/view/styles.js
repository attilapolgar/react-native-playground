import { StyleSheet } from 'react-native'
import { palette, sizes } from '../../../styles'

export default StyleSheet.create({
  counter: {
    backgroundColor: palette.componentBackground,
    padding: sizes.mediumSpace,
    elevation: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    display: 'flex',
    flex: 1,
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.mediumSpace,
    margin: sizes.mediumSpace,
  },
  valueText: {
    fontSize: sizes.largeFontSize,
    fontWeight: 'bold',
  },
})
