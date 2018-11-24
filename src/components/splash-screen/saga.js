import { call, put, takeLatest } from 'redux-saga/effects'
import { PRELOAD_ASSETS_REQUESTED } from './action-types'
import { preloadAssetsFailed, preloadAssetsSucceeded } from './actions'
import { Image } from 'react-native'
import { Asset, Font } from 'expo'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

const _cacheResourcesAsync = async () => {
  const imageAssets = cacheImages([
    // require('../../assets/img/falcon.jpg')
  ])

  const fontAssets = cacheFonts([])

  await Promise.all([...imageAssets, ...fontAssets])
}

function* fetchAllData() {
  try {
    const assets = yield call(_cacheResourcesAsync)
    yield put(preloadAssetsSucceeded({ assets }))
  } catch (error) {
    yield put(preloadAssetsFailed({ errorMessage: error.message }))
  }
}

export default function* splashScreenSaga() {
  yield takeLatest(PRELOAD_ASSETS_REQUESTED, fetchAllData)
}
