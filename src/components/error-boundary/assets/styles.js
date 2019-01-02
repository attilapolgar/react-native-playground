import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    color: colors.gray,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: colors.gray,
  },

  image: { width: 200, height: 200, marginTop: 100 },
})
