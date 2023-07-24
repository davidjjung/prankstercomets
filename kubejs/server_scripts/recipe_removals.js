onEvent('recipes', event => {
  event.remove({output: '#quark:vertical_slab'})
  event.remove({output: '#quark:hedges'})
  event.remove({output: '#quark:posts'})
  event.remove({output: '#immersive_weathering:exposed_iron'})
  event.remove({output: '#immersive_weathering:weathered_iron'})
  event.remove({output: '#immersive_weathering:rusted_iron'})
  event.remove({output: 'minecraft:chest'})
  event.remove({output: 'minecraft:trapped_chest'})
  event.remove({mod: 'mekanism'})
  event.remove({mod: 'effortlessbuilding'})
  event.remove({mod: 'ftbquests'})
  event.remove({mod: 'waystones'})
  event.remove({mod: 'magic_doorknob'})
  event.remove({mod: 'itemfilters'})
  event.remove({output: 'everycomp:ap/quark/blossom_boards'})
  event.remove({output: 'everycomp:ap/quark/blossom_railing'})
  event.remove({output: 'everycomp:ap/quark/azalea_boards'})
  event.remove({output: 'everycomp:ap/quark/azalea_railing'})
  event.remove({output: '/dustrial_decor:.*vertical_slab/'})
  event.remove({output: '/sullysmod:.*button/'})
  event.remove({output: 'immersive_weathering:mulch'})
  event.remove({output: 'immersive_weathering:nulch'})
  event.remove({output: '/supplementaries:ash.*'})
  event.remove({output: 'quark:charcoal_block'})
  event.remove({id: 'everycomp:fd/environmental/wisteria_cabinet'})
  event.remove({id: 'everycomp:fd/environmental/willow_cabinet'})
  event.remove({id: 'everycomp:fd/environmental/cherry_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/rosewood_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/morado_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/aspen_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/kousa_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/grimwood_cabinet'})
  event.remove({id: 'everycomp:fd/atmospheric/yucca_cabinet'})
  event.remove({id: 'everycomp:fd/autumnity/maple_cabinet'})
  event.remove({output: '/architects_palette:.*board_.*/'})
  event.remove({input: 'create:wheat_flour'})

  const ap = ['architects_palette:oak_board_slab','architects_palette:spruce_board_slab','architects_palette:birch_board_slab',
  'architects_palette:jungle_board_slab','architects_palette:acacia_board_slab','architects_palette:dark_oak_board_slab',
  'architects_palette:crimson_board_slab','architects_palette:warped_board_slab','architects_palette:oak_board_stairs',
  'architects_palette:spruce_board_stairs', 'architects_palette:birch_board_stairs', 'architects_palette:jungle_board_stairs',
  'architects_palette:acacia_board_stairs', 'architects_palette:dark_oak_board_stairs', 'architects_palette:crimson_board_stairs',
  'architects_palette:warped_board_stairs','architects_palette:acacia_board_wall', 'architects_palette:dark_oak_board_wall',
  'architects_palette:crimson_board_wall','architects_palette:warped_board_wall','architects_palette:twisted_board_stairs',
  'architects_palette:twisted_board_wall','architects_palette:twisted_board_slab',
  ]

  const c = ['/create:.*cut_granite.*/','/create:.*small_granite.*','/create:.*cut_diorite.*/',
  '/create:.*small_diorite.*/','/create:.*cut_calcite.*/','/create:.*small_calcite.*/','/create:.*cut_tuff.*/',
  '/create:.*small_tuff.*/','/create:.*small_dripstone.*/','/create:.*cut_dripstone.*/','/create:.*cut_deepslate.*/',
  '/create:.*small_deepslate.*/','/create:.*small_limestone.*/','/create:.*cut_limestone.*/','/create:.*small_andesite.*/',
  '/create:.*cut_andesite.*/','/create:.*asurine.*/','/create:.*ochrum.*/','/create:.*crimsite.*/','/create:.*veridium.*/',
  '/create:.*scoria.*/','create:dough','create:wheat_flour']

  const dd = ['/dustrial_decor:rusty_.*/', '/dustrial_decor:sheet_.*/','dustrial_decor:cardboard_helmet',
  'dustrial_decor:cardboard_chestplate','dustrial_decor:cardboard_leggings','dustrial_decor:cardboard_boots',
  'dustrial_decor:cardboard_box','/dustrial_decor:cast_iron.*/']

  const q = ['quark:oak_chest', 'quark:spruce_chest', 'quark:acacia_chest','quark:jungle_chest', 'quark:dark_oak_chest',
   'quark:crimson_chest', 'quark:warped_chest','quark:oak_trapped_chest', 'quark:spruce_trapped_chest', 'quark:acacia_trapped_chest','quark:jungle_trapped_chest', 'quark:dark_oak_trapped_chest',
   'quark:crimson_trapped_chest', 'quark:warped_trapped_chest','quark:birch_chest','quark:birch_trapped_chest',
   '/quark:paper_lantern.*/','/quark:.*bookshelf/','quark:bamboo_block']

  const twigs = ['twigs:mossy_bricks','twigs:mossy_brick_slab','twigs:mossy_brick_stairs','twigs:mossy_brick_wall',
  '/twigs:polished_tuff.*/','/twigs:polished_calcite.*/','twigs:cracked_polished_tuff_bricks',
  'twigs:cracked_polished_calcite_bricks','/twigs:mossy_brick.*/', 'twigs:azalea_flowers']

  const iw = ['immersive_weathering:cracked_end_stone_bricks','immersive_weathering:cracked_end_stone_brick_slab',
  'immersive_weathering:cracked_end_stone_brick_stairs','immersive_weathering:cracked_end_stone_brick_wall',
  'immersive_weathering:exposed_iron_door','immersive_weathering:weathered_iron_door','immersive_weathering:rusted_iron_door',
  'immersive_weathering:exposed_iron_trapdoor','immersive_weathering:weathered_iron_trapdoor',
  'immersive_weathering:rusted_iron_trapdoor','immersive_weathering:exposed_iron_bars',
  'immersive_weathering:weathered_iron_bars','immersive_weathering:rusted_iron_bars','immersive_weathering:cut_iron',
  'immersive_weathering:exposed_cut_iron','immersive_weathering:weathered_cut_iron','immersive_weathering:rusted_cut_iron',
  'immersive_weathering:waxed_cut_iron','immersive_weathering:waxed_exposed_cut_iron',
  'immersive_weathering:waxed_weathered_cut_iron','immersive_weathering:waxed_rusted_cut_iron',
  'immersive_weathering:plate_iron','immersive_weathering:exposed_plate_iron','immersive_weathering:weathered_plate_iron',
  'immersive_weathering:rusted_plate_iron','immersive_weathering:waxed_plate_iron',
  'immersive_weathering:waxed_exposed_plate_iron','immersive_weathering:waxed_weathered_plate_iron',
  'immersive_weathering:waxed_rusted_plate_iron','immersive_weathering:cut_iron_slab',
  'immersive_weathering:exposed_cut_iron_slab','immersive_weathering:weathered_cut_iron_slab',
  'immersive_weathering:rusted_cut_iron_slab','immersive_weathering:waxed_cut_iron_slab',
  'immersive_weathering:waxed_exposed_cut_iron_slab','immersive_weathering:waxed_weathered_cut_iron_slab',
  'immersive_weathering:waxed_rusted_cut_iron_slab','immersive_weathering:plate_iron_slab',
  'immersive_weathering:exposed_plate_iron_slab','immersive_weathering:weathered_plate_iron_slab',
  'immersive_weathering:rusted_plate_iron_slab','immersive_weathering:waxed_plate_iron_slab',
  'immersive_weathering:waxed_exposed_plate_iron_slab','immersive_weathering:waxed_weathered_plate_iron_slab',
  'immersive_weathering:waxed_rusted_plate_iron_slab','immersive_weathering:cut_iron_stairs',
  'immersive_weathering:exposed_cut_iron_stairs','immersive_weathering:weathered_cut_iron_stairs',
  'immersive_weathering:rusted_cut_iron_stairs','immersive_weathering:waxed_cut_iron_stairs',
  'immersive_weathering:waxed_exposed_cut_iron_stairs','immersive_weathering:waxed_weathered_cut_iron_stairs',
  'immersive_weathering:waxed_rusted_cut_iron_stairs','immersive_weathering:plate_iron_stairs',
  'immersive_weathering:exposed_plate_iron_stairs','immersive_weathering:weathered_plate_iron_stairs',
  'immersive_weathering:rusted_plate_iron_stairs','immersive_weathering:waxed_plate_iron_stairs',
  'immersive_weathering:waxed_exposed_plate_iron_stairs','immersive_weathering:waxed_weathered_plate_iron_stairs',
  'immersive_weathering:waxed_rusted_plate_iron_stairs', '/immersive_weathering:.*_vertical_slab/',
  'immersive_weathering:azalea_flower_pile','ecologics:surface_moss','create:dough','create:wheat_flour',
  'immersive_weathering:cracked_bricks','apotheosis:potion_charm']

  event.remove({output: Item.of("apotheosis:potion_charm").ignoreNBT()})

  const v = ['minecraft:chest', 'minecraft:trapped_chest']

  const etc = ['/unvotedandshelved:.*pillar/','/sullysmod:.*button/','druidcraftrg:knife',
  'supplementaries:bamboo_spikes_tipped','create:wheat_flour']
  const mods = [ap, c, etc, dd, q, twigs, v, iw]
  mods.forEach(modid => {
    modid.forEach(item => {
      event.remove({output: item})
    })
  })
})