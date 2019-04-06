import { getDefaultSettings, snapshotTest, findLayersByName } from 'sketch-plugin-helper'
import drawSliceOverSelection from '../draw-slice-over-selection'

snapshotTest(
  'Draw slice over the selected layers',
  '__fixtures__/input.sketch',
  '__fixtures__/selection.sketch',
  function () {
    findLayersByName('Artboard').forEach(function(layer) {
      layer.selected = true
    })
    drawSliceOverSelection({ settings: getDefaultSettings() })
  }
)

snapshotTest(
  'Draw slice over all layers on the page',
  '__fixtures__/input.sketch',
  '__fixtures__/all-layers.sketch',
  function () {
    drawSliceOverSelection({ settings: getDefaultSettings() })
  }
)
