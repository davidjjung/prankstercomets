onEvent('item.tooltip', tooltip => {
  // Alex's Abnormalities
  const aaSSWalls = ['alexsabnormalities:shark_tooth_tiles','alexsabnormalities:shark_tooth_bricks',
  'alexsabnormalities:cachalot_whale_tooth_bricks','alexsabnormalities:cachalot_whale_tooth_tiles',
  'alexsabnormalities:bone_serpent_tooth_bricks','alexsabnormalities:bone_serpent_tooth_tiles',
  'alexsabnormalities:crocodile_scute_shingles','alexsabnormalities:crocodile_scute_pavement',
  'alexsabnormalities:spiked_scute_shingles','alexsabnormalities:spiked_scute_pavement'
  ]
  aaSSWalls.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Architect's Palette
  const apSlabs = ['architects_palette:abyssaline_bricks', 'architects_palette:abyssaline_tiles',
  'architects_palette:hadaline_bricks','architects_palette:hadaline_tiles']
  apSlabs.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab').italic(true))
    })
  })
  const apSS = ['architects_palette:entrails','architects_palette:gilded_sandstone',
  'architects_palette:sunmetal_block','architects_palette:entwine_block','architects_palette:oracle_block']
  apSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const apSW = ['architects_palette:polished_glowstone','architects_palette:hazard_block']
  apSW.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Wall').italic(true))
    })
  })

  tooltip.addAdvanced('architects_palette:ancient_plating', (item, advanced, text) => {
    text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall, Fence').italic(true))
  })
  tooltip.addAdvanced('architects_palette:sheet_metal_block', (item, advanced, text) => {
    text.add(1, Text.darkGray('Alt: Wall').italic(true))
  })

  const apSSWall = ['architects_palette:plating_block','architects_palette:smooth_nether_brass',
  'architects_palette:polished_packed_ice','architects_palette:warpstone','architects_palette:nether_brass',
  'architects_palette:cut_nether_brass','architects_palette:myonite','architects_palette:myonite_bricks',
  'architects_palette:olivestone_bricks','architects_palette:algal_bricks','architects_palette:overgrown_algal_bricks',
  'architects_palette:coal_ore_bricks','architects_palette:diamond_ore_bricks','architects_palette:gold_ore_bricks',
  'architects_palette:redstone_ore_bricks','architects_palette:lapis_ore_bricks','architects_palette:iron_ore_bricks',
  'architects_palette:emerald_ore_bricks','architects_palette:dripstone_bricks','architects_palette:tuff_bricks',
  'architects_palette:calcite_bricks','architects_palette:osseous_bricks','architects_palette:withered_osseous_bricks',
  'architects_palette:olivestone_tiles','architects_palette:flint_tiles','architects_palette:basalt_tiles',
  'architects_palette:esoterrack','architects_palette:esoterrack_bricks','architects_palette:onyx',
  'architects_palette:onyx_bricks','architects_palette:wardstone','architects_palette:wardstone_bricks',
  'architects_palette:tread_plate','architects_palette:oracle_bricks','architects_palette:dark_oracle_bricks',
  'architects_palette:oracle_tiles','architects_palette:cerebral_blocks','architects_palette:cerebral_tiles']
  apSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  const apWaxed = ['architects_palette:copper_nub', 'architects_palette:exposed_copper_nub',
  'architects_palette:weathered_copper_nub', 'architects_palette:oxidized_copper_nub'
  ]
  apWaxed.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Waxed').italic(true))
    })
  })

  // Atmospheric
  const aSlabs = ['atmospheric:cut_arid_sandstone','atmospheric:cut_red_arid_sandstone']
    aSlabs.forEach( id => {
      tooltip.addAdvanced(id, (item, advanced, text) => {
        text.add(1, Text.darkGray('Alt: Slab').italic(true))
      })
    })

  const aSS = ['atmospheric:smooth_arid_sandstone','atmospheric:smooth_red_arid_sandstone']
  aSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const aSSWall = ['atmospheric:cut_ivory_travertine','atmospheric:cut_peach_travertine','atmospheric:cut_persimmon_travertine',
  'atmospheric:cut_saffron_travertine','atmospheric:arid_sandstone','atmospheric:red_arid_sandstone',
  'atmospheric:arid_sandstone_bricks','atmospheric:red_arid_sandstone_bricks'
  ]
  aSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Buzzier Bees
  const bbSSWall = ['buzzierbees:honeycomb_bricks', 'buzzier_bees:honeycomb_tiles']
  bbSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Clayworks
  const claySSWall = [
  'clayworks:white_terracotta_bricks', 'clayworks:orange_terracotta_bricks', 'clayworks:magenta_terracotta_bricks',
  'clayworks:light_blue_terracotta_bricks', 'clayworks:yellow_terracotta_bricks', 'clayworks:lime_terracotta_bricks',
  'clayworks:pink_terracotta_bricks', 'clayworks:gray_terracotta_bricks', 'clayworks:light_gray_terracotta_bricks',
  'clayworks:cyan_terracotta_bricks', 'clayworks:purple_terracotta_bricks', 'clayworks:blue_terracotta_bricks',
  'clayworks:brown_terracotta_bricks', 'clayworks:green_terracotta_bricks', 'clayworks:red_terracotta_bricks',
  'clayworks:black_terracotta_bricks', 'clayworks:terracotta_bricks'
  ]
  claySSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Environmental
  const eSS = ['environmental:cattail_thatch','environmental:duckweed_thatch','environmental:grass_thatch']
  eSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const eSSWall = ['environmental:mud_bricks']
  eSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Farmer's Respite
  const frSLong = ['farmersrespite:green_tea', 'farmersrespite:yellow_tea', 'farmersrespite:black_tea',
  'farmersrespite:coffee', 'farmersdelight:apple_cider', 'farmersrespite:rose_hip_tea']
  frSLong.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Strong, Long').italic(true))
    })
  })
  const frStrong = ['farmersrespite:purulent_tea']
  frStrong.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Strong').italic(true))
    })
  })
  const frLong = ['farmersrespite:dandelion_tea']
  frLong.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Long').italic(true))
    })
  })
  // Immersive Weathering

  // Etc.
  const etcSlabs = ['supplementaries:checker_block']
  etcSlabs.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab').italic(true))
    })
  })

  const etcStorages = ['#supplementaries:presents','carpenter:oak_chest','carpenter:spruce_chest','carpenter:birch_chest',
  'carpenter:dark_oak_chest','carpenter:crimson_chest','carpenter:warped_chest','carpenter:jungle_chest',
  'carpenter:acacia_chest','everycomp:q/undergarden/smogstem_chest','everycomp:q/undergarden/grongle_chest',
  'everycomp:q/undergarden/wigglewood_chest','everycomp:q/architects_palette/twisted_chest','everycomp:q/twigs/bamboo_chest',
  'everycomp:q/newworld/fir_chest','everycomp:q/ecologics/walnut_chest','everycomp:q/ecologics/coconut_chest',
  'everycomp:q/ecologics/flowering_azalea_chest','everycomp:q/wildbackport/mangrove_chest','autumnity:maple_chest',
  'upgrade_aquatic:driftwood_chest','upgrade_aquatic:river_chest','atmospheric:rosewood_chest', 'atmospheric:morado_chest',
  'atmospheric:yucca_chest', 'atmospheric:kousa_chest', 'atmospheric:aspen_chest', 'atmospheric:grimwood_chest',
  'environmental:cherry_chest', 'environmental:wisteria_chest', 'environmental:willow_chest']
  etcStorages.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Trapped').italic(true))
    })
  })

  const etcSS = ['quark:duskbound_block','quark:midori_block','galosphere:lumiere_block','galosphere:allurite_block',
  'galosphere:smooth_lumiere','galosphere:smooth_allurite','galosphere:smooth_amethyst','galosphere:amethyst_bricks',
  'galosphere:lumiere_bricks','galosphere:allurite_bricks','twigs:bamboo_thatch','twigs:polished_amethyst','twigs:polished_rhyolite',
  'twigs:polished_schist','twigs:polished_bloodstone','dustrial_decor:mini_padded_block',
  'dustrial_decor:bolted_industrial_iron_block','dustrial_decor:smooth_cardboard','dustrial_decor:cast_iron_bricks',
  'dustrial_decor:cinder_bricks','savage_and_ravage:blastproof_plates','upgrade_aquatic:luminous_prismarine',
  'upgrade_aquatic:beachgrass_thatch','neapolitan:frond_thatch'
  ]
  etcSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const etcSSWall = ['ecologics:seashell_tiles','ecologics:ice_bricks','ecologics:snow_bricks','supplementaries:blackstone_tiles',
  'supplementaries:stone_tiles', 'supplementaries:lapis_bricks','twigs:mossy_bricks','twigs:cobblestone_bricks',
  'twigs:mossy_cobblestone_bricks','twigs:polished_amethyst_bricks','twigs:twisting_polished_blackstone_bricks',
  'twigs:weeping_polished_blackstone_bricks','twigs:rhyolite','twigs:schist','twigs:bloodstone','twigs:polished_rhyolite_bricks',
  'twigs:polished_schist_bricks','twigs:polished_bloodstone_bricks','immersive_weathering:mossy_bricks',
  'immersive_weathering:mossy_stone','immersive_weathering:cracked_bricks','immersive_weathering:cracked_prismarine_bricks',
  'savage_and_ravage:gloomy_tiles','create:cut_scorchia','create:cut_polished_scorchia','create:cut_scorchia_bricks',
  'create:small_scorchia_bricks','wildbackport:mud_bricks','supplementaries:blackstone_tiles','upgrade_aquatic:tooth_tiles',
  'upgrade_aquatic:tooth_bricks','upgrade_aquatic:scute_shingles','autumnity:snail_shell_bricks','autumnity:snail_shell_tiles',
  'upgrade_aquatic:kelpy_stone_bricks','upgrade_aquatic:tongue_kelpy_stone_bricks','upgrade_aquatic:polar_kelpy_stone_bricks',
  'upgrade_aquatic:ochre_kelpy_stone_bricks','upgrade_aquatic:coralstone','upgrade_aquatic:bubble_coralstone',
  'upgrade_aquatic:tube_coralstone','upgrade_aquatic:horn_coralstone','upgrade_aquatic:brain_coralstone',
  'upgrade_aquatic:fire_coralstone','upgrade_aquatic:acan_coralstone','upgrade_aquatic:finger_coralstone',
  'upgrade_aquatic:star_coralstone','upgrade_aquatic:moss_coralstone','upgrade_aquatic:petal_coralstone',
  'upgrade_aquatic:branch_coralstone','upgrade_aquatic:rock_coralstone','upgrade_aquatic:pillow_coralstone',
  'upgrade_aquatic:silk_coralstone','upgrade_aquatic:chrome_coralstone','upgrade_aquatic:prismarine_coralstone',
  'upgrade_aquatic:elder_prismarine_coralstone','upgrade_aquatic:dead_coralstone','upgrade_aquatic:kelpy_cobblestone',
  'upgrade_aquatic:tongue_kelpy_cobblestone','upgrade_aquatic:polar_kelpy_cobblestone','upgrade_aquatic:thorny_kelpy_cobblestone',
  'upgrade_aquatic:ochre_kelpy_cobblestone','neapolitan:chocolate_bricks','neapolitan:chocolate_tiles']
  etcSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  const qSSWall = ['quark:sandstone_bricks', 'quark:red_sandstone_bricks', 'quark:blue_nether_bricks']
  qSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // The Undergarden & Sully's Mod
  const uSS = ['undergarden:depthrock_tiles', 'undergarden:cloggrum_tiles','sullysmod:rough_jade_block',
  'sullysmod:rough_jade_bricks','sullysmod:smoothed_rough_jade','sullysmod:rough_jade_tiles','sullysmod:polished_jade_block',
  'sullysmod:polished_jade_bricks','sullysmod:polished_jade_tiles','sullysmod:polished_jade_shingles',
  'sullysmod:polished_small_jade_bricks']
  uSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const uSSWall = ['undergarden:depthrock','undergarden:polished_depthrock','undergarden:depthrock_bricks',
  'undergarden:shiverstone','undergarden:shiverstone_bricks','undergarden:tremblecrust','undergarden:tremblecrust_bricks']
  uSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  // Vanilla
  const vSlabs = ['minecraft:smooth_stone', 'minecraft:cut_sandstone', 'minecraft:cut_red_sandstone']
  vSlabs.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab').italic(true))
    })
  })

  const vSS = ['minecraft:purpur_block', 'minecraft:smooth_sandstone', 'minecraft:smooth_red_sandstone',
  'minecraft:quartz_block', 'minecraft:smooth_quartz', 'minecraft:polished_granite','minecraft:amethyst_block']
  vSS.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs').italic(true))
    })
  })

  const vWaxed = ['minecraft:copper_block','minecraft:exposed_copper','minecraft:weathered_copper','minecraft:oxidized_copper',
  'twigs:copper_pillar','twigs:exposed_copper_pillar','twigs:weathered_copper_pillar','twigs:oxidized_copper_pillar',
  'unvotedandshelved:copper_button','unvotedandshelved:exposed_copper_button','unvotedandshelved:weathered_copper_button',
  'unvotedandshelved:oxidized_copper_button']
  vWaxed.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Waxed').italic(true))
    })
  })

  const vSSWaxed = ['minecraft:cut_copper','minecraft:exposed_cut_copper','minecraft:weathered_cut_copper','minecraft:oxidized_cut_copper',
  'create:copper_shingles','create:exposed_copper_shingles','create:weathered_copper_shingles','create:oxidized_copper_shingles',
  'create:copper_tiles','create:exposed_copper_tiles','create:weathered_copper_tiles','create:oxidized_copper_tiles',]
  vSSWaxed.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Waxed').italic(true))
    })
  })

  const vSSWall = ['minecraft:stone','minecraft:cobblestone','minecraft:bricks','minecraft:red_nether_bricks',
  'minecraft:mossy_cobblestone','minecraft:stone_bricks','minecraft:mossy_stone_bricks','minecraft:sandstone',
  'minecraft:red_sandstone','minecraft:end_stone_bricks','minecraft:granite','minecraft:andesite','minecraft:diorite',
  'minecraft:prismarine','minecraft:prismarine_bricks','minecraft:dark_prismarine','minecraft:blackstone',
  'minecraft:polished_blackstone','minecraft:polished_blackstone_bricks','minecraft:cobbled_deepslate',
  'minecraft:polished_deepslate','minecraft:deepslate_bricks','minecraft:cracked_deepslate_bricks',
  'minecraft:deepslate_tiles','minecraft:cracked_deepslate_tiles','minecraft:tuff','minecraft:calcite',
  'minecraft:white_terracotta',  'minecraft:orange_terracotta',  'minecraft:magenta_terracotta',
  'minecraft:light_blue_terracotta',  'minecraft:yellow_terracotta',  'minecraft:lime_terracotta',
  'minecraft:pink_terracotta',  'minecraft:gray_terracotta',  'minecraft:light_gray_terracotta',
  'minecraft:cyan_terracotta',  'minecraft:purple_terracotta',  'minecraft:blue_terracotta',
  'minecraft:brown_terracotta',  'minecraft:green_terracotta',  'minecraft:red_terracotta',
  'minecraft:black_terracotta', 'minecraft:terracotta']
  vSSWall.forEach( id => {
    tooltip.addAdvanced(id, (item, advanced, text) => {
      text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall').italic(true))
    })
  })

  tooltip.addAdvanced('minecraft:nether_bricks', (item, advanced, text) => {
    text.add(1, Text.darkGray('Alt: Slab, Stairs, Wall, Fence, Fence Gate').italic(true))
  })
})