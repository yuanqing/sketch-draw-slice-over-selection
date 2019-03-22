import {
  addLayersToPage,
  getAllLayers,
  getSelectedLayers,
  getSavedUserInput,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

import calculateMaximumBounds from './calculate-maximum-bounds'
import createSliceLayer from './create-slice-layer'

export default function drawSliceOverSelection () {
  const userInput = getSavedUserInput()
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length > 0
  const layers = hasSelection ? selectedLayers : getAllLayers()
  if (layers.length === 0) {
    showErrorMessage('No layers')
    return
  }
  const maximumBounds = calculateMaximumBounds(layers)
  const { backgroundColor, padding } = userInput
  const sliceLayer = createSliceLayer(backgroundColor, padding, maximumBounds)
  addLayersToPage([sliceLayer])
  showSuccessMessage(
    hasSelection ? 'Drew slice over selection' : 'Drew slice over all layers'
  )
}
