import { call, put, takeLatest } from 'redux-saga/effects'
import { Image } from 'react-native'
import { Asset, Font } from 'expo'
import { PRELOAD_ASSETS_REQUESTED } from './action-types'
import { preloadAssetsFailed, preloadAssetsSucceeded } from './actions'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    }
    return Asset.fromModule(image).downloadAsync()
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

const cacheResourcesAsync = async () => {
  const imageAssets = cacheImages([
    // require('../../assets/img/falcon.jpg')
  ])

  const fontAssets = cacheFonts([])

  await Promise.all([...imageAssets, ...fontAssets])
}

function* fetchAllData() {
  try {
    const assets = yield call(cacheResourcesAsync)
    yield put(preloadAssetsSucceeded({ assets }))
  } catch (error) {
    yield put(preloadAssetsFailed({ errorMessage: error.message }))
  }
}

export default function* splashScreenSaga() {
  yield takeLatest(PRELOAD_ASSETS_REQUESTED, fetchAllData)
}
