import {
  openSettingsDialog,
  saveSettings,
  showSuccessMessage,
  NUMERIC_TEXT_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Draw Slice Over Selection',
  formFields: [
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
    saveSettings(settings)
    showSuccessMessage('Saved settings')
  }
}
