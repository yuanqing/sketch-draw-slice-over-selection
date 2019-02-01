/* eslint-disable eqeqeq */

const config = require('../config')
const readSettings = require('./read-settings.js')
const saveSettings = require('./save-settings.js')
const createTextInput = require('../form/create-text-input.js')
const createLabel = require('../form/create-label.js')

function createDialog (values) {
  const alert = COSAlertWindow.new()
  alert.setMessageText('Add Artboard Borders')
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')

  const viewWidth = 250
  const viewHeight = 90
  const view = NSView.alloc().initWithFrame(
    NSMakeRect(0, 0, viewWidth, viewHeight)
  )
  alert.addAccessoryView(view)

  const rowHeight = 20
  const padding = 10
  const backgroundColorLabel = createLabel(
    'Background Color',
    0,
    viewHeight - 1 * rowHeight,
    viewWidth,
    rowHeight
  )
  const backgroundColorTextField = createTextInput(
    values.backgroundColor,
    0,
    viewHeight - 2 * rowHeight,
    viewWidth,
    rowHeight
  )
  const paddingLabel = createLabel(
    'Padding',
    0,
    viewHeight - 3 * rowHeight - 1 * padding,
    viewWidth,
    rowHeight
  )
  const paddingTextField = createTextInput(
    values.padding,
    0,
    viewHeight - 4 * rowHeight - 1 * padding,
    viewWidth,
    rowHeight
  )
  view.addSubview(backgroundColorLabel)
  view.addSubview(backgroundColorTextField)
  view.addSubview(paddingLabel)
  view.addSubview(paddingTextField)
  backgroundColorTextField.setNextKeyView(paddingTextField)

  return {
    run: alert.runModal,
    fields: {
      backgroundColor: backgroundColorTextField,
      padding: paddingTextField
    }
  }
}

function onRun (context) {
  const settings = readSettings(config.identifier, config.defaultSettings)
  const dialog = createDialog(settings.values)
  if (dialog.run() == '1000') {
    // the first button ('OK') was clicked
    saveSettings(settings.userDefaults, dialog.fields)
  }
}

module.exports = onRun
