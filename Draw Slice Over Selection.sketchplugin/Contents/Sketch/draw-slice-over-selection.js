@import 'settings.js'

function calculateMaximumBounds (layers) {
  var maximumBounds = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: Number.MIN_VALUE,
      y: Number.MIN_VALUE
    }
  ]
  var length = layers.length
  var i = -1
  while (++i < length) {
    var layer = layers[i]
    var frame = layer.frame()
    var x = frame.x()
    var y = frame.y()
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
  var sliceLayer = MSSliceLayer.new()
  var frame = sliceLayer.frame()
  frame.setX(maximumBounds[0].x - Settings.padding)
  frame.setY(maximumBounds[0].y - Settings.padding)
  frame.setWidth(maximumBounds[1].x - maximumBounds[0].x + (2 * Settings.padding))
  frame.setHeight(maximumBounds[1].y - maximumBounds[0].y + (2 * Settings.padding))
  sliceLayer.setName(layerName)
  sliceLayer.setIsLocked(true)
  return sliceLayer
}

function onRun (context) {
  var document = context.document
  var page = document.currentPage()
  var selectedLayers = context.selection
  var layers = selectedLayers.length > 0 ? selectedLayers : page.layers()
  if (layers.length == 0) {
    return
  }
  const maximumBounds = calculateMaximumBounds(layers)
  const sliceLayer = createSliceLayer(maximumBounds, Settings.sliceName)
  page.addLayers([sliceLayer])
  document.showMessage('Drew Slice around selection')
}
