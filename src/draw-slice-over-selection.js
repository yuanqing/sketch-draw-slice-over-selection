/* eslint-disable eqeqeq */

const {
  getAllLayers,
  getPage,
  getSelectedLayers,
  openSettingsDialog,
  saveSettings,
  showMessage
} = require('sketch-plugin-helper')

const calculateMaximumBounds = require('./calculate-maximum-bounds')
const createSliceLayer = require('./create-slice-layer')
const settingsConfig = require('./settings-config')

export default function () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings({ settings })
  }
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length > 0
  const layers = hasSelection ? selectedLayers : getAllLayers()
  if (layers.length == 0) {
    return
  }
  const maximumBounds = calculateMaximumBounds(layers)
  const sliceLayer = createSliceLayer(settings, maximumBounds)
  getPage().sketchObject.addLayers([sliceLayer])
  showMessage(
    hasSelection ? 'Drew slice over selection' : 'Drew slice over all layers'
  )
}
