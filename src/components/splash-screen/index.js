import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'native-base'
import { preloadAssetsRequested } from './actions'

class SplashScreen extends Component {
  componentDidMount = () => {
    this.props.preloadAssets()
  }
  componentDidUpdate = () => {
    this.props.preloadState.success && this.props.onFinish()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>loading</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  preloadState: state.preload.preloadState
})

const mapDispatchToProps = dispatch => ({
  preloadAssets: () => dispatch(preloadAssetsRequested())
})

SplashScreen.propTypes = {
  preloadState: PropTypes.object.isRequired,
  onFinish: PropTypes.func.isRequired,
  preloadAssets: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
