onEvent('item.right_click', (event) => {
     if(event.item == 'kubejs:bellicose_elixir') {
          event.server.runCommandSilent(`scale set pehkui:jump_height 2.5 ${event.player.name.string}`);
          event.server.runCommandSilent(`scale set pehkui:base 1.3 ${event.player.name.string}`);
          event.server.runCommandSilent(`scale set pehkui:motion 0.7 ${event.player.name.string}`);
          event.player.sendInventoryUpdate();
     }
});