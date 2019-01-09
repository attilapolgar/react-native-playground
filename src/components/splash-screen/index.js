import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { preloadAssetsRequested } from './actions'
import styles from './styles'

class SplashScreen extends Component {
  componentDidMount = () => {
    const { preloadAssets } = this.props
    preloadAssets()
  }

  componentDidUpdate = () => {
    const { preloadState, onFinish } = this.props
    if (preloadState.success) {
      onFinish()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>loading</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  preloadState: state.preload.preloadState,
})

const mapDispatchToProps = dispatch => ({
  preloadAssets: () => dispatch(preloadAssetsRequested()),
})

SplashScreen.propTypes = {
  preloadState: PropTypes.object.isRequired,
  onFinish: PropTypes.func.isRequired,
  preloadAssets: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
