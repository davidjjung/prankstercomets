onEvent('item.right_click', (event) => {
     if(event.item == 'kubejs:creeper_medal') {
          event.server.runCommandSilent(`morph ${event.player.name.string} minecraft:creeper`);
          event.player.addItemCooldown("kubejs:creeper_medal", 500);
          event.player.sendInventoryUpdate();
     }
});