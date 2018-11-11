@import 'settings.js'

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
        y: Math.min(maximumBounds[0].y, y),
      },
      {
        x: Math.max(maximumBounds[1].x, x + frame.width()),
        y: Math.max(maximumBounds[1].y, y + frame.height()),
      }
    ]
  }
  return maximumBounds
}

function createSliceLayer (maximumBounds, layerName) {
  const sliceLayer = MSSliceLayer.new()
  const frame = sliceLayer.frame()
  frame.setX(maximumBounds[0].x - Settings.padding)
  frame.setY(maximumBounds[0].y - Settings.padding)
  frame.setWidth(maximumBounds[1].x - maximumBounds[0].x + (2 * Settings.padding))
  frame.setHeight(maximumBounds[1].y - maximumBounds[0].y + (2 * Settings.padding))
  sliceLayer.setName(layerName)
  sliceLayer.setIsLocked(true)
  return sliceLayer
}

function onRun (context) {
  const document = context.document
  const page = document.currentPage()
  const selectedLayers = context.selection
  const hasSelection = selectedLayers.length > 0
  const layers = hasSelection ? selectedLayers : page.layers()
  if (layers.length == 0) {
    return
  }
  const maximumBounds = calculateMaximumBounds(layers)
  const sliceLayer = createSliceLayer(maximumBounds, Settings.sliceName)
  page.addLayers([sliceLayer])
  document.showMessage(hasSelection ? 'Drew Slice over selection' : 'Drew Slice over all layers')
}
