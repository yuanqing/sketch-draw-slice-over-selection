import {
  test,
  findLayersByNameOnCurrentPage
} from 'sketch-plugin-helper'
import drawSliceOverSelection from '../draw-slice-over-selection'

const settings = {
  backgroundColor: '#f9f9f9',
  padding: 100
}

test(
  'Draw slice over the selected layers',
  '__fixtures__/input.sketch',
  '__fixtures__/selection.sketch',
  function () {
    findLayersByNameOnCurrentPage('Artboard').forEach(function (layer) {
      layer.selected = true
    })
    drawSliceOverSelection({ settings })
  }
)

test(
  'Draw slice over all layers on the page',
  '__fixtures__/input.sketch',
  '__fixtures__/all-layers.sketch',
  function () {
    drawSliceOverSelection({ settings })
  }
)
