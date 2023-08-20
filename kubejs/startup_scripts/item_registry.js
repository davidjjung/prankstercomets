// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
      event.create('ekanite_grit')
      event.create('monazite_grout')
      event.create('heliodor_glint')
      event.create('grave_moss')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("morejs.potion_brewing.register", (event) => {
    event.removeByPotion(null, "minecraft:amethyst_shard", null);
    event.removeByPotion(null, null, "recallpotion:recall_potion");
    event.addPotionBrewing("wildbackport:echo_shard", "minecraft:awkward", "recallpotion:recall_potion");

    // Elixirs. Remember: sequence is brewing catalyst, container, and result
    event.addCustomBrewing("undergarden:goo_ball", "foolish_asteroids:virulent_flask", "foolish_asteroids:mundane_elixir");
    event.addCustomBrewing("undergarden:utherium_crystal", "foolish_asteroids:mundane_elixir", "foolish_asteroids:awkward_elixir");
    event.addCustomBrewing("undergarden:blisterberry", "foolish_asteroids:awkward_elixir", "foolish_asteroids:turbulent_elixir");

    event.addCustomBrewing("undergarden:raw_gloomper_leg", "foolish_asteroids:mundane_elixir", "foolish_asteroids:bellicose_elixir");
    event.addCustomBrewing("undergarden:mogmoss", "foolish_asteroids:mundane_elixir", "foolish_asteroids:bucolic_elixir");
    event.addCustomBrewing("undergarden:underbeans", "foolish_asteroids:mundane_elixir", "foolish_asteroids:earthbound_elixir");
    event.addCustomBrewing("undergarden:blood_mushroom", "foolish_asteroids:mundane_elixir", "foolish_asteroids:estranged_elixir");
    event.addCustomBrewing("undergarden:veil_mushroom", "foolish_asteroids:mundane_elixir", "foolish_asteroids:evanescent_elixir");
    event.addCustomBrewing("alexsmobs:moose_antler", "foolish_asteroids:mundane_elixir", "foolish_asteroids:irksome_elixir");
    event.addCustomBrewing("minecraft:red_mushroom", "foolish_asteroids:mundane_elixir", "foolish_asteroids:mycological_elixir");
    event.addCustomBrewing("kubejs:monazite_grout", "foolish_asteroids:mundane_elixir", "foolish_asteroids:perspicacious_elixir");
    event.addCustomBrewing("minecraft:sea_pickle", "foolish_asteroids:mundane_elixir", "foolish_asteroids:quadratic_elixir");
    event.addCustomBrewing("undergarden:indigo_mushroom", "foolish_asteroids:mundane_elixir", "foolish_asteroids:sagacious_elixir");
    event.addCustomBrewing("autumnity:maple_leaves", "foolish_asteroids:mundane_elixir", "foolish_asteroids:susurrous_elixir");
    event.addCustomBrewing("ecologics:seashell", "foolish_asteroids:mundane_elixir", "foolish_asteroids:triturated_elixir");

    event.addCustomBrewing("kubejs:ekanite_grit", "foolish_asteroids:awkward_elixir", "foolish_asteroids:atomized_elixir");
    event.addCustomBrewing("immersive_weathering:ivy", "foolish_asteroids:awkward_elixir", "foolish_asteroids:boundless_elixir");
    event.addCustomBrewing("environmental:mud_ball", "foolish_asteroids:awkward_elixir", "foolish_asteroids:claustrophilic_elixir");
    event.addCustomBrewing("galosphere:allurite_shard", "foolish_asteroids:awkward_elixir", "foolish_asteroids:dilatory_elixir");
    event.addCustomBrewing("habitat:kabloom_fruit", "foolish_asteroids:awkward_elixir", "foolish_asteroids:endemic_elixir");
    event.addCustomBrewing("environmental:yak_hair", "foolish_asteroids:awkward_elixir", "foolish_asteroids:gracious_elixir");
    event.addCustomBrewing("minecraft:crimson_roots", "foolish_asteroids:awkward_elixir", "foolish_asteroids:hearsay_elixir");
    event.addCustomBrewing("minecraft:crimson_fungus", "foolish_asteroids:awkward_elixir", "foolish_asteroids:heresy_elixir");
    event.addCustomBrewing("undergarden:ditchbulb_paste", "foolish_asteroids:awkward_elixir", "foolish_asteroids:incendiary_elixir");
    event.addCustomBrewing("farmersrespite:coffee_beans", "foolish_asteroids:awkward_elixir", "foolish_asteroids:jittery_elixir");
    event.addCustomBrewing("galosphere:lumiere_shard", "foolish_asteroids:awkward_elixir", "foolish_asteroids:stentorian_elixir");
    event.addCustomBrewing("neapolitan:magic_beans", "foolish_asteroids:awkward_elixir", "foolish_asteroids:vainglorious_elixir");

    event.addCustomBrewing("immersive_weathering:ivy", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:benevolent_elixir");
    event.addCustomBrewing("minecraft:feather", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:empyrean_elixir");
    event.addCustomBrewing("architects_palette:entwine_rod", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:freaky_elixir");
    event.addCustomBrewing("alexsmobs:lost_tentacle", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:garrulous_elixir");
    event.addCustomBrewing("alexsmobs:rainbow_jelly", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:indomitable_elixir");
    event.addCustomBrewing("naturalist:bear_fur", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:loquacious_elixir");
    event.addCustomBrewing("immersive_weathering:icicle", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:parsimonious_elixir");
    event.addCustomBrewing("minecraft:glow_ink_sac", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:profound_elixir");
    event.addCustomBrewing("kubejs:heliodor_glint", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:seraphic_elixir");
    event.addCustomBrewing("immersive_weathering:ash_layer_block", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:tenebrous_elixir");
    event.addCustomBrewing("atmospheric:barrel_cactus", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:touchy_elixir");
    event.addCustomBrewing("immersive_weathering:pond_water", "foolish_asteroids:turbulent_elixir", "foolish_asteroids:wretched_elixir");

    // Misc removals
    event.removeByPotion(null, null, "minecraft:mundane");
    event.removeByPotion(null, null, "minecraft:thick");
})

onEvent('item.modification', event => {
  event.modify('minecraft:saddle', item => {
    item.maxStackSize = 16
  })
})