import React from 'react'
import { bool } from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

const MiniOfflineSign = ({ isConnected }) => (
  <View
    style={[
      styles.container,
      isConnected ? styles.onlineContainer : styles.offlineContainer,
    ]}
  >
    {isConnected ? (
      <Text style={styles.text}>Connected</Text>
    ) : (
      <Text style={styles.text}>No Internet Connection</Text>
    )}
  </View>
)

MiniOfflineSign.propTypes = {
  isConnected: bool.isRequired,
}
export default MiniOfflineSign
