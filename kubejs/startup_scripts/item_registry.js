// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Morph Medals
	 event.create('creeper_medal').displayName('Creeping Medallion')
	 event.create('enderman_medal').displayName('Entropic Medallion')
})
onEvent('item.registry', event => {
	// Elixirs
	 event.create('bellicose_elixir').displayName('Bellicose Elixir')
	 .useAnimation("drink")
	 .use(() => true)
	 .useDuration(itemstack => 20)
	 .finishUsing((itemstack, level, entity) => {
//                 level.getServerOrSomething().runCommandSilent(whatever I want)
                 if (entity.player) {
                     entity.minecraftPlayer.addItem(Item.of("minecraft:glass_bottle").itemStack)

                 }
                 return itemstack;
             })
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("morejs.potion_brewing.register", (event) => {
    event.removeByPotion(null, "minecraft:amethyst_shard", null);
    event.removeByPotion(null, null, "recallpotion:recall_potion");
    event.addPotionBrewing("wildbackport:echo_shard", "minecraft:awkward", "recallpotion:recall_potion");
})

onEvent('item.modification', event => {
  event.modify('minecraft:saddle', item => {
    item.maxStackSize = 16
  })
})