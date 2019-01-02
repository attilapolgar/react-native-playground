import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const MiniOfflineSign = () => (
  <View style={styles.offlineContainer}>
    <Text style={styles.offlineText}>No Internet Connection</Text>
  </View>
)
export default MiniOfflineSign
