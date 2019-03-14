const { TEXT_BOX } = require('sketch-plugin-helper')

module.exports = {
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
