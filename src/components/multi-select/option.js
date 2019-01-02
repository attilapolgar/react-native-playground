import React from 'react'
import { string, func, bool } from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Option = ({ label, onPress = () => null, isSelected = false }) => (
  <TouchableOpacity
    style={[styles.option, isSelected ? styles.selectedOptionRow : null]}
    onPress={() => onPress(label)}
  >
    <Text
      style={[styles.optionText, isSelected ? styles.selectedOptionText : null]}
    >
      {label}
    </Text>
  </TouchableOpacity>
)

Option.propTypes = {
  label: string.isRequired,
  onPress: func.isRequired,
  isSelected: bool,
}
export default Option
