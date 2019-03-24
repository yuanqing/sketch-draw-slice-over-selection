import {
  openSettingsDialog,
  saveSettings,
  NUMERIC_TEXT_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Draw Slice Over Selection',
  inputs: [
    {
      type: TEXT_BOX,
      key: 'backgroundColor',
      label: 'Background Color'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'padding',
      label: 'Padding'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
