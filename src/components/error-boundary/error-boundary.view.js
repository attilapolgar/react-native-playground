import React from 'react'
import { View, Text, Image } from 'react-native'

import copy from './assets/copy'
import styles from './assets/styles'
import errorImage from './assets/error-screen-image.png'

const ErrorBoundaryView = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{copy.title}</Text>
    <Text style={styles.text}>{copy.textLine1}</Text>
    <Text style={styles.text}>{copy.textLine2}</Text>

    <Image style={styles.image} source={errorImage} />
  </View>
)

export default ErrorBoundaryView
