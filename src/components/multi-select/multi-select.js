import React, { PureComponent } from 'react'
import { func, array, string, bool } from 'prop-types'

import { Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { createOptionGroups } from './utils'
import OptionSelector from './option-selector'
import { Icon } from '../../'
import styles from './styles'

const propTypes = {
  onValueChange: func.isRequired,
  id: string.isRequired,
  value: array,
  placeholder: string,
  options: array,
  multiple: bool,
  groupBy: string,
}

const defaultProps = {
  options: [],
  groupBy: '',
}

class MultiSelect extends PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps

  state = {
    selectedOptions: [],
    options: this.props.options,
    groupBy: this.props.groupBy,
    optionGroups: createOptionGroups(this.props.options, this.props.groupBy),
    modalVisible: false,
    originalSelectedOptions: [],
  }

  handleOnHeaderPress = () => {
    // this.toggleOptions()
    this.setModalVisible(!this.state.modalVisible)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.setState({ modalVisible: false })
  }

  handleOptionSelect = option => {
    const { value, multiple } = this.props
    let selectedOptions
    if (multiple) {
      selectedOptions = value.includes(option)
        ? value.filter(o => o !== option)
        : [...value, option]
    } else {
      selectedOptions = [option]
      this.closeModal()
    }

    this.props.onValueChange(selectedOptions)
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  handleCancelPress = () => {
    this.setState({ modalVisible: false })
  }

  handleOkPress = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    const { value, placeholder, id } = this.props
    const { optionGroups } = this.state

    const displayValue = value.join(' ')

    const optionSelectorProps = {
      optionGroups,
      value,
      handleOptionSelect: this.handleOptionSelect,
      id,
    }

    const title = displayValue || placeholder
    const header = (
      <TouchableOpacity
        style={styles.header}
        onPress={this.handleOnHeaderPress}
      >
        <View style={styles.input}>
          <Text
            numberOfLines={1}
            style={[
              styles.headerText,
              this.state.modalVisible ? styles.modalHeaderText : null,
              displayValue ? null : styles.placeholderText,
            ]}
          >
            {title}
          </Text>
        </View>
        <Icon name="arrow-down" />
      </TouchableOpacity>
    )

    const footer = (
      <View style={styles.footer}>
        <Button
          transparent
          style={styles.footerButton}
          onPress={this.handleOkPress}
        >
          <Text>OK</Text>
        </Button>
      </View>
    )
    return (
      <View style={styles.container}>
        {header}
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContentWrapper}>
            <View style={styles.modalContent}>
              {header}

              <ScrollView>
                <OptionSelector {...optionSelectorProps} />
              </ScrollView>

              {footer}
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default MultiSelect
