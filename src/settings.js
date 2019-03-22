import {
  openUserInputDialog,
  saveUserInput,
  TEXT_BOX
} from 'sketch-plugin-helper'

const userInputConfig = {
  title: 'Settings for Draw Slice Over Selection',
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

export default function settings () {
  const userInput = openUserInputDialog(userInputConfig)
  if (userInput) {
    saveUserInput(userInput, { successMessage: 'Settings saved' })
  }
}
