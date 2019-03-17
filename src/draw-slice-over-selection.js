const {
  addLayersToPage,
  getAllLayers,
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} = require('sketch-plugin-helper')

const calculateMaximumBounds = require('./calculate-maximum-bounds')
const createSliceLayer = require('./create-slice-layer')

const userInputConfig = {
  title: 'Draw Slice Over Selection',
  inputs: [
    {
      key: 'backgroundColor',
      label: 'Background Color',
      type: TEXT_BOX
    },
    {
      key: 'padding',
      label: 'Padding',
      type: TEXT_BOX
    }
  ]
}

function drawSliceOverSelection () {
  const userInput = openUserInputDialog(userInputConfig)
  if (userInput) {
    saveUserInput(userInput)
  }
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length > 0
  const layers = hasSelection ? selectedLayers : getAllLayers()
  if (layers.length == 0) {
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

module.exports = drawSliceOverSelection
