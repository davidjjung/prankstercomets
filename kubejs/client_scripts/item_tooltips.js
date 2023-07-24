onEvent('item.tooltip', tooltip => {
  // Boomshot
  tooltip.addAdvanced('boomshot:boomshot', (item, advanced, text) => {
  text.remove(1)
    if (!tooltip.shift) {
      text.add(1, [Text.darkGray('Hold ['), Text.of('Shift').gray(), Text.darkGray('] for Summary')])
    } else {
      text.add(1, [Text.darkGray('Hold ['), Text.of('Shift').white(), Text.darkGray('] for Summary')])
      text.add(3, [Text.darkPurple('Bwoomph! Use '), Text.lightPurple('Shell Shots')])
      text.add(4, Text.darkPurple('to send yourself flying.'))
    }
  })
  tooltip.addAdvanced('boomshot:bombblaster', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
      if (!tooltip.shift) {
        text.add(1, [Text.darkGray('Hold ['), Text.of('Shift').gray(), Text.darkGray('] for Summary')])
      } else {
        text.add(1, [Text.darkGray('Hold ['), Text.of('Shift').white(), Text.darkGray('] for Summary')])
        text.add(2, Text.of(''))
        text.add(3, [Text.darkPurple('Use '), Text.lightPurple('Shell Shots '), Text.darkPurple('to send')])
        text.add(4, Text.darkPurple('yourself flying even farther.'))
        text.add(6, Text.darkPurple('Fires twice before cooling down.'))
      }
    })

  // Mob Catcher
  tooltip.addAdvanced('mobcatcher:net_launcher', (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.gray('Hold '), Text.white('SHIFT '), Text.gray('for stats')])
    } else {
      text.add(1, [Text.darkGreen('Fire delay: '), Text.white('Variable')])
      text.add(2, [Text.darkGreen('Accuracy: '), Text.white('Hold trigger for a more precise shot')])
      text.add(3, Text.gray('Shift+R-Click to toggle between Capturing and Releasing.'))
    }
  })
  tooltip.addAdvanced('mobcatcher:net', (item, advanced, text) => {
    text.add(1, Text.darkGreen('0 Damage')),
    text.add(2, Text.gray('Captures mobs, reusable'))
  })
})