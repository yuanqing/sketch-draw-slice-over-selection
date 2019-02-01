/* eslint-disable eqeqeq */

const config = require('./config')
const readSettings = require('./settings/read-settings')

function calculateMaximumBounds (layers) {
  let maximumBounds = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: Number.MIN_VALUE,
      y: Number.MIN_VALUE
    }
  ]
  const length = layers.length
  let i = -1
  while (++i < length) {
    const layer = layers[i]
    const frame = layer.frame()
    const x = frame.x()
    const y = frame.y()
    maximumBounds = [
      {
        x: Math.min(maximumBounds[0].x, x),
        y: Math.min(maximumBounds[0].y, y)
      },
      {
        x: Math.max(maximumBounds[1].x, x + frame.width()),
        y: Math.max(maximumBounds[1].y, y + frame.height())
      }
    ]
  }
  return maximumBounds
}

function hexToRGB (hex) {
  return {
    r: parseInt(hex.substr(1, 2), 16),
    g: parseInt(hex.substr(3, 2), 16),
    b: parseInt(hex.substr(5, 2), 16)
  }
}

function createSliceLayer (settings, maximumBounds) {
  const sliceLayer = MSSliceLayer.new()
  const frame = sliceLayer.frame()
  const padding = settings.padding
  frame.setX(maximumBounds[0].x - padding)
  frame.setY(maximumBounds[0].y - padding)
  frame.setWidth(maximumBounds[1].x - maximumBounds[0].x + 2 * padding)
  frame.setHeight(maximumBounds[1].y - maximumBounds[0].y + 2 * padding)
  const backgroundColor = settings.backgroundColor
  if (backgroundColor != '' && backgroundColor.charAt(0) == '#') {
    sliceLayer.hasBackgroundColor = true
    const rgbColor = hexToRGB(backgroundColor)
    sliceLayer.setBackgroundColor(
      MSColor.colorWithRed_green_blue_alpha(
        rgbColor.r / 255,
        rgbColor.g / 255,
        rgbColor.b / 255,
        1
      )
    )
  }
  sliceLayer.setName(config.layerName)
  sliceLayer.setIsLocked(true)
  return sliceLayer
}

function onRun (context) {
  const document = context.document
  const page = document.currentPage()
  const settings = readSettings(config.identifier, config.defaultSettings)
  const selectedLayers = context.selection
  const hasSelection = selectedLayers.length > 0
  const layers = hasSelection ? selectedLayers : page.layers()
  if (layers.length == 0) {
    return
  }
  const maximumBounds = calculateMaximumBounds(layers)
  const sliceLayer = createSliceLayer(settings.values, maximumBounds)
  page.addLayers([sliceLayer])
  document.showMessage(
    hasSelection ? 'Drew Slice over selection' : 'Drew Slice over all layers'
  )
}

module.exports = onRun
