onEvent('rei.hide.items', event => {
  const aa = [
  'alexsabnormalities:shark_tooth_tile_slab', 'alexsabnormalities:shark_tooth_tile_stairs', 'alexsabnormalities:shark_tooth_tile_wall',
  'alexsabnormalities:shark_tooth_brick_slab', 'alexsabnormalities:shark_tooth_brick_stairs', 'alexsabnormalities:shark_tooth_brick_wall',
  'alexsabnormalities:cachalot_whale_tooth_brick_slab', 'alexsabnormalities:cachalot_whale_tooth_brick_stairs', 'alexsabnormalities:cachalot_whale_tooth_brick_wall',
  'alexsabnormalities:cachalot_whale_tooth_tile_slab', 'alexsabnormalities:cachalot_whale_tooth_tile_stairs', 'alexsabnormalities:cachalot_whale_tooth_tile_wall',
  'alexsabnormalities:bone_serpent_tooth_brick_slab', 'alexsabnormalities:bone_serpent_tooth_brick_stairs', 'alexsabnormalities:bone_serpent_tooth_brick_wall',
  'alexsabnormalities:bone_serpent_tooth_tile_slab', 'alexsabnormalities:bone_serpent_tooth_tile_stairs', 'alexsabnormalities:bone_serpent_tooth_tile_wall',
  'alexsabnormalities:crocodile_scute_shingle_slab', 'alexsabnormalities:crocodile_scute_shingle_stairs', 'alexsabnormalities:crocodile_scute_shingle_wall',
  'alexsabnormalities:crocodile_scute_pavement_slab', 'alexsabnormalities:crocodile_scute_pavement_stairs', 'alexsabnormalities:crocodile_scute_pavement_wall',
  'alexsabnormalities:spiked_scute_shingle_slab', 'alexsabnormalities:spiked_scute_shingle_stairs', 'alexsabnormalities:spiked_scute_shingle_wall',
  'alexsabnormalities:spiked_scute_pavement_slab', 'alexsabnormalities:spiked_scute_pavement_stairs', 'alexsabnormalities:spiked_scute_pavement_wall'
  ]

  const atmos = [
  'atmospheric:cut_arid_sandstone_slab','atmospheric:cut_red_arid_sandstone_slab',
  'atmospheric:smooth_arid_sandstone_stairs', 'atmospheric:smooth_arid_sandstone_slab',
  'atmospheric:smooth_red_arid_sandstone_stairs', 'atmospheric:smooth_red_arid_sandstone_slab',
  'atmospheric:ivory_travertine_slab', 'atmospheric:ivory_travertine_stairs', 'atmospheric:ivory_travertine_wall',
  'atmospheric:peach_travertine_slab', 'atmospheric:peach_travertine_stairs', 'atmospheric:peach_travertine_wall',
  'atmospheric:persimmon_travertine_slab', 'atmospheric:persimmon_travertine_stairs', 'atmospheric:persimmon_travertine_wall',
  'atmospheric:saffron_travertine_slab', 'atmospheric:saffron_travertine_stairs', 'atmospheric:saffron_travertine_wall',
  'atmospheric:arid_sandstone_slab', 'atmospheric:arid_sandstone_stairs', 'atmospheric:arid_sandstone_wall',
  'atmospheric:red_arid_sandstone_slab', 'atmospheric:red_arid_sandstone_stairs', 'atmospheric:red_arid_sandstone_wall',
  'atmospheric:arid_sandstone_brick_slab', 'atmospheric:arid_sandstone_brick_stairs', 'atmospheric:arid_sandstone_brick_wall',
  'atmospheric:red_arid_sandstone_brick_slab', 'atmospheric:red_arid_sandstone_brick_stairs', 'atmospheric:red_arid_sandstone_brick_wall'
  ]

  const ap = ['architects_palette:abyssaline_brick_slab','architects_palette:abyssaline_tile_slab',
  'architects_palette:entrails_stairs','architects_palette:entrails_slab','architects_palette:polished_glowstone_slab',
  'architects_palette:polished_glowstone_wall','architects_palette:sunmetal_stairs','architects_palette:sunmetal_slab',
  'architects_palette:entwine_stairs','architects_palette:entwine_slab','architects_palette:gilded_sandstone_stairs',
  'architects_palette:gilded_sandstone_slab','architects_palette:plating_stairs','architects_palette:plating_slab',
  'architects_palette:plating_wall','architects_palette:smooth_nether_brass_stairs',
  'architects_palette:smooth_nether_brass_slab','architects_palette:smooth_nether_brass_wall',
  'architects_palette:polished_packed_ice_stairs','architects_palette:polished_packed_ice_slab',
  'architects_palette:polished_packed_ice_wall','architects_palette:warpstone_stairs','architects_palette:warpstone_slab',
  'architects_palette:warpstone_wall','architects_palette:nether_brass_stairs','architects_palette:nether_brass_slab',
  'architects_palette:nether_brass_wall','architects_palette:cut_nether_brass_stairs','architects_palette:cut_nether_brass_slab',
  'architects_palette:cut_nether_brass_wall','architects_palette:myonite_stairs','architects_palette:myonite_slab',
  'architects_palette:myonite_wall','architects_palette:myonite_brick_stairs','architects_palette:myonite_brick_slab',
  'architects_palette:myonite_brick_wall','architects_palette:mushy_myonite_brick_stairs',
  'architects_palette:mushy_myonite_brick_slab','architects_palette:mushy_myonite_brick_wall',
  'architects_palette:olivestone_brick_stairs','architects_palette:olivestone_brick_slab',
  'architects_palette:olivestone_brick_wall','architects_palette:algal_brick_stairs','architects_palette:algal_brick_slab',
  'architects_palette:algal_brick_wall','architects_palette:overgrown_algal_brick_stairs',
  'architects_palette:overgrown_algal_brick_slab','architects_palette:overgrown_algal_brick_wall',
  'architects_palette:coal_ore_brick_stairs','architects_palette:coal_ore_brick_slab','architects_palette:coal_ore_brick_wall',
  'architects_palette:lapis_ore_brick_stairs','architects_palette:lapis_ore_brick_slab','architects_palette:lapis_ore_brick_wall',
  'architects_palette:redstone_ore_brick_stairs','architects_palette:redstone_ore_brick_slab',
  'architects_palette:redstone_ore_brick_wall','architects_palette:iron_ore_brick_stairs',
  'architects_palette:iron_ore_brick_slab','architects_palette:iron_ore_brick_wall',
  'architects_palette:emerald_ore_brick_stairs','architects_palette:emerald_ore_brick_slab',
  'architects_palette:emerald_ore_brick_wall','architects_palette:diamond_ore_brick_stairs',
  'architects_palette:diamond_ore_brick_slab','architects_palette:diamond_ore_brick_wall',
  'architects_palette:gold_ore_brick_stairs','architects_palette:gold_ore_brick_slab',
  'architects_palette:gold_ore_brick_wall','architects_palette:dripstone_brick_stairs',
  'architects_palette:dripstone_brick_slab','architects_palette:dripstone_brick_wall',
  'architects_palette:calcite_brick_stairs','architects_palette:calcite_brick_slab','architects_palette:calcite_brick_wall',
  'architects_palette:tuff_brick_stairs','architects_palette:tuff_brick_slab','architects_palette:tuff_brick_wall',
  'architects_palette:osseous_brick_stairs','architects_palette:osseous_brick_slab','architects_palette:osseous_brick_wall',
  'architects_palette:withered_osseous_brick_stairs','architects_palette:withered_osseous_brick_slab',
  'architects_palette:withered_osseous_brick_wall','architects_palette:olivestone_tile_stairs','architects_palette:olivestone_tile_slab',
  'architects_palette:olivestone_tile_wall','architects_palette:flint_tile_stairs','architects_palette:flint_tile_slab',
  'architects_palette:flint_tile_wall','architects_palette:basalt_tile_stairs','architects_palette:basalt_tile_slab',
  'architects_palette:basalt_tile_wall','architects_palette:hadaline_brick_slab','architects_palette:hadaline_tile_slab',
  'architects_palette:esoterrack_slab', 'architects_palette:esoterrack_stairs', 'architects_palette:esoterrack_wall',
  'architects_palette:esoterrack_brick_slab', 'architects_palette:esoterrack_brick_stairs', 'architects_palette:esoterrack_brick_wall',
  'architects_palette:onyx_slab', 'architects_palette:onyx_stairs', 'architects_palette:onyx_wall',
  'architects_palette:onyx_brick_slab', 'architects_palette:onyx_brick_stairs', 'architects_palette:onyx_brick_wall',
  'architects_palette:wardstone_slab', 'architects_palette:wardstone_stairs', 'architects_palette:wardstone_wall',
  'architects_palette:wardstone_brick_slab', 'architects_palette:wardstone_brick_stairs', 'architects_palette:wardstone_brick_wall',
  'architects_palette:tread_plate_slab', 'architects_palette:tread_plate_stairs', 'architects_palette:tread_plate_wall',
  'architects_palette:oracle_brick_slab', 'architects_palette:oracle_brick_stairs', 'architects_palette:oracle_brick_wall',
  'architects_palette:dark_oracle_brick_slab', 'architects_palette:dark_oracle_brick_stairs', 'architects_palette:dark_oracle_brick_wall',
  'architects_palette:oracle_tile_slab', 'architects_palette:oracle_tile_stairs', 'architects_palette:oracle_tile_wall',
  'architects_palette:cerebral_slab', 'architects_palette:cerebral_stairs', 'architects_palette:cerebral_wall',
  'architects_palette:cerebral_tile_slab', 'architects_palette:cerebral_tile_stairs', 'architects_palette:cerebral_tile_wall',
  'architects_palette:ancient_plating_slab', 'architects_palette:ancient_plating_stairs', 'architects_palette:ancient_plating_wall',
  'architects_palette:ancient_plating_fence','architects_palette:oracle_stairs','architects_palette:oracle_slab',
  'architects_palette:sheet_metal_wall','architects_palette:hazard_wall','architects_palette:hazard_slab','architects_palette:waxed_copper_nub',
   'architects_palette:waxed_exposed_copper_nub', 'architects_palette:waxed_weathered_copper_nub', 'architects_palette:waxed_oxidized_copper_nub'
  ]

  const bb = ['buzzier_bees:honeycomb_brick_slab','buzzier_bees:honeycomb_brick_stairs','buzzier_bees:honeycomb_brick_wall',
  'buzzier_bees:honeycomb_tile_slab','buzzier_bees:honeycomb_tile_stairs','buzzier_bees:honeycomb_tile_wall',
  'savage_and_ravage:blast_proof_stairs','savage_and_ravage:blast_proof_slab','savage_and_ravage:gloomy_tile_stairs',
  'savage_and_ravage:gloomy_tile_slab','savage_and_ravage:gloomy_tile_wall']

  const c = ['create:copper_shingle_slab','create:exposed_copper_shingle_slab','create:weathered_copper_shingle_slab','create:oxidized_copper_shingle_slab',
  'create:copper_tile_slab','create:exposed_copper_tile_slab','create:weathered_copper_tile_slab','create:oxidized_copper_tile_slab',
  'create:copper_shingle_stairs','create:exposed_copper_shingle_stairs','create:weathered_copper_shingle_stairs','create:oxidized_copper_shingle_stairs',
  'create:copper_tile_stairs','create:exposed_copper_tile_stairs','create:weathered_copper_tile_stairs','create:oxidized_copper_tile_stairs',
  'create:waxed_copper_shingles','create:waxed_exposed_copper_shingles','create:waxed_weathered_copper_shingles','create:waxed_oxidized_copper_shingles',
  'create:waxed_copper_tiles','create:waxed_exposed_copper_tiles','create:waxed_weathered_copper_tiles','create:waxed_oxidized_copper_tiles',
  'create:waxed_copper_shingle_slab','create:waxed_exposed_copper_shingle_slab','create:waxed_weathered_copper_shingle_slab','create:waxed_oxidized_copper_shingle_slab',
  'create:waxed_copper_tile_slab','create:waxed_exposed_copper_tile_slab','create:waxed_weathered_copper_tile_slab','create:waxed_oxidized_copper_tile_slab',
  'create:waxed_copper_shingle_stairs','create:waxed_exposed_copper_shingle_stairs','create:waxed_weathered_copper_shingle_stairs','create:waxed_oxidized_copper_shingle_stairs',
  'create:waxed_copper_tile_stairs','create:waxed_exposed_copper_tile_stairs','create:waxed_weathered_copper_tile_stairs','create:waxed_oxidized_copper_tile_stairs',
  'create:cut_scorchia_slab','create:polished_cut_scorchia_slab','create:cut_scorchia_brick_slab','create:small_scorchia_brick_slab',
  'create:cut_scorchia_stairs','create:polished_cut_scorchia_stairs','create:cut_scorchia_brick_stairs','create:small_scorchia_brick_stairs',
  'create:cut_scorchia_wall','create:polished_cut_scorchia_wall','create:cut_scorchia_brick_wall','create:small_scorchia_brick_wall']

  const clay = ['clayworks:white_terracotta_stairs','clayworks:orange_terracotta_stairs','clayworks:magenta_terracotta_stairs',
  'clayworks:light_blue_terracotta_stairs','clayworks:yellow_terracotta_stairs','clayworks:lime_terracotta_stairs',
  'clayworks:pink_terracotta_stairs','clayworks:gray_terracotta_stairs','clayworks:light_gray_terracotta_stairs',
  'clayworks:cyan_terracotta_stairs','clayworks:purple_terracotta_stairs','clayworks:blue_terracotta_stairs',
  'clayworks:brown_terracotta_stairs','clayworks:green_terracotta_stairs','clayworks:red_terracotta_stairs',
  'clayworks:black_terracotta_stairs','clayworks:terracotta_stairs',
  'clayworks:white_terracotta_slab', 'clayworks:orange_terracotta_slab', 'clayworks:magenta_terracotta_slab',
  'clayworks:light_blue_terracotta_slab', 'clayworks:yellow_terracotta_slab', 'clayworks:lime_terracotta_slab',
  'clayworks:pink_terracotta_slab', 'clayworks:gray_terracotta_slab', 'clayworks:light_gray_terracotta_slab',
  'clayworks:cyan_terracotta_slab', 'clayworks:purple_terracotta_slab', 'clayworks:blue_terracotta_slab',
  'clayworks:brown_terracotta_slab', 'clayworks:green_terracotta_slab', 'clayworks:red_terracotta_slab',
  'clayworks:black_terracotta_slab','clayworks:terracotta_slab',
  'clayworks:white_terracotta_wall', 'clayworks:orange_terracotta_wall', 'clayworks:magenta_terracotta_wall',
  'clayworks:light_blue_terracotta_wall', 'clayworks:yellow_terracotta_wall', 'clayworks:lime_terracotta_wall',
  'clayworks:pink_terracotta_wall', 'clayworks:gray_terracotta_wall', 'clayworks:light_gray_terracotta_wall',
  'clayworks:cyan_terracotta_wall', 'clayworks:purple_terracotta_wall', 'clayworks:blue_terracotta_wall',
  'clayworks:brown_terracotta_wall', 'clayworks:green_terracotta_wall', 'clayworks:red_terracotta_wall',
  'clayworks:black_terracotta_wall','clayworks:terracotta_wall',
  'clayworks:white_terracotta_brick_stairs',  'clayworks:orange_terracotta_brick_stairs',  'clayworks:magenta_terracotta_brick_stairs',
  'clayworks:light_blue_terracotta_brick_stairs',  'clayworks:yellow_terracotta_brick_stairs',  'clayworks:lime_terracotta_brick_stairs',
  'clayworks:pink_terracotta_brick_stairs',  'clayworks:gray_terracotta_brick_stairs',  'clayworks:light_gray_terracotta_brick_stairs',
  'clayworks:cyan_terracotta_brick_stairs',  'clayworks:purple_terracotta_brick_stairs',  'clayworks:blue_terracotta_brick_stairs',
  'clayworks:brown_terracotta_brick_stairs',  'clayworks:green_terracotta_brick_stairs',  'clayworks:red_terracotta_brick_stairs',
  'clayworks:black_terracotta_brick_stairs','clayworks:terracotta_brick_stairs',
  'clayworks:white_terracotta_brick_slab', 'clayworks:orange_terracotta_brick_slab', 'clayworks:magenta_terracotta_brick_slab',
  'clayworks:light_blue_terracotta_brick_slab', 'clayworks:yellow_terracotta_brick_slab', 'clayworks:lime_terracotta_brick_slab',
  'clayworks:pink_terracotta_brick_slab', 'clayworks:gray_terracotta_brick_slab', 'clayworks:light_gray_terracotta_brick_slab',
  'clayworks:cyan_terracotta_brick_slab', 'clayworks:purple_terracotta_brick_slab', 'clayworks:blue_terracotta_brick_slab',
  'clayworks:brown_terracotta_brick_slab', 'clayworks:green_terracotta_brick_slab', 'clayworks:red_terracotta_brick_slab',
  'clayworks:black_terracotta_brick_slab','clayworks:terracotta_brick_slab',
  'clayworks:white_terracotta_brick_wall', 'clayworks:orange_terracotta_brick_wall', 'clayworks:magenta_terracotta_brick_wall',
  'clayworks:light_blue_terracotta_brick_wall', 'clayworks:yellow_terracotta_brick_wall', 'clayworks:lime_terracotta_brick_wall',
  'clayworks:pink_terracotta_brick_wall', 'clayworks:gray_terracotta_brick_wall', 'clayworks:light_gray_terracotta_brick_wall',
  'clayworks:cyan_terracotta_brick_wall', 'clayworks:purple_terracotta_brick_wall', 'clayworks:blue_terracotta_brick_wall',
  'clayworks:brown_terracotta_brick_wall', 'clayworks:green_terracotta_brick_wall', 'clayworks:red_terracotta_brick_wall',
  'clayworks:black_terracotta_brick_wall','clayworks:terracotta_brick_wall'
  ]

  const ec = ['everycomp:q/undergarden/smogstem_trapped_chest','everycomp:q/undergarden/grongle_trapped_chest',
'everycomp:q/undergarden/wigglewood_trapped_chest','everycomp:q/architects_palette/twisted_trapped_chest',
'everycomp:q/twigs/bamboo_trapped_chest','everycomp:q/newworld/fir_trapped_chest',
'everycomp:q/ecologics/walnut_trapped_chest','everycomp:q/ecologics/coconut_trapped_chest',
'everycomp:q/ecologics/flowering_azalea_trapped_chest','everycomp:q/wildbackport/mangrove_trapped_chest',
'autumnity:maple_trapped_chest','upgrade_aquatic:driftwood_trapped_chest','upgrade_aquatic:river_trapped_chest',
'atmospheric:rosewood_trapped_chest','atmospheric:morado_trapped_chest','atmospheric:yucca_trapped_chest',
'atmospheric:kousa_trapped_chest','atmospheric:aspen_trapped_chest','atmospheric:grimwood_trapped_chest',
'quark:nether_brick_chest'
]

  const dd = ['dustrial_decor:mini_padded_slab','dustrial_decor:mini_padded_stairs',
  'dustrial_decor:bolted_industrial_iron_slab','dustrial_decor:bolted_industrial_iron_stairs',
  'dustrial_decor:smooth_cardboard_slab','dustrial_decor:smooth_cardboard_stairs',
  'dustrial_decor:cast_iron_brick_slab','dustrial_decor:cast_iron_brick_stairs','dustrial_decor:cinder_brick_slab',
  'dustrial_decor:cinder_brick_stairs']

  const env = ['environmental:mud_brick_slab', 'environmental:mud_brick_stairs', 'environmental:mud_brick_wall',
  'environmental:cattail_thatch_slab', 'environmental:cattail_thatch_stairs',
  'environmental:duckweed_thatch_slab', 'environmental:duckweed_thatch_stairs',
  'environmental:grass_thatch_slab', 'environmental:grass_thatch_stairs'
  ]

  const etc = ['ecologics:snow_brick_slab','ecologics:snow_brick_stairs','ecologics:snow_brick_stairs',
  'ecologics:snow_brick_wall','ecologics:ice_brick_slab','ecologics:ice_brick_stairs','ecologics:ice_brick_stairs',
  'ecologics:ice_brick_wall','ecologics:seashell_tile_slab','ecologics:seashell_tile_stairs','ecologics:seashell_tile_stairs',
  'ecologics:seashell_tile_wall','galosphere:amethyst_stairs','galosphere:amethyst_slab','galosphere:smooth_amethyst_stairs',
  'galosphere:smooth_amethyst_slab','galosphere:allurite_stairs','galosphere:allurite_slab','galosphere:smooth_allurite_stairs',
  'galosphere:smooth_allurite_slab','galosphere:lumiere_stairs','galosphere:lumiere_slab','galosphere:smooth_lumiere_stairs',
  'galosphere:smooth_lumiere_slab','galosphere:amethyst_brick_stairs','galosphere:lumiere_brick_stairs',
  'galosphere:allurite_brick_stairs','galosphere:amethyst_brick_slab','galosphere:lumiere_brick_slab',
  'galosphere:allurite_brick_slab','carpenter:trapped_oak_chest','carpenter:trapped_birch_chest','carpenter:trapped_acacia_chest',
  'carpenter:trapped_crimson_chest','carpenter:trapped_warped_chest','carpenter:trapped_jungle_chest',
  'quark:prismarine_trapped_chest','quark:purpur_trapped_chest','carpenter:trapped_spruce_chest','carpenter:trapped_dark_oak_chest',
  'wildbackport:mud_brick_stairs','wildbackport:mud_brick_slab','wildbackport:mud_brick_wall','neapolitan:frond_thatch_stairs',
  'neapolitan:frond_thatch_slab','neapolitan:chocolate_brick_slab', 'neapolitan:chocolate_brick_stairs', 'neapolitan:chocolate_brick_wall',
  'neapolitan:chocolate_tile_slab', 'neapolitan:chocolate_tile_stairs', 'neapolitan:chocolate_tile_wall']

  const fr = ['farmersrespite:strong_green_tea','farmersrespite:long_green_tea','farmersrespite:strong_yellow_tea',
  'farmersrespite:long_yellow_tea','farmersrespite:strong_black_tea','farmersrespite:long_black_tea',
  'farmersrespite:long_dandelion_tea','farmersrespite:strong_purulent_tea','farmersrespite:strong_rose_hip_tea',
  'farmersrespite:strong_apple_cider','farmersrespite:long_apple_cider','farmersrespite:long_rose_hip_tea',
  'farmersrespite:long_coffee','farmersrespite:strong_coffee']

  const iw = ['immersive_weathering:prismarine_brick_wall','immersive_weathering:dark_prismarine_brick_wall',
  'immersive_weathering:cracked_deepslate_brick_slab','immersive_weathering:cracked_deepslate_brick_stairs',
  'immersive_weathering:cracked_deepslate_brick_wall','immersive_weathering:cracked_deepslate_tile_slab',
  'immersive_weathering:cracked_deepslate_tile_stairs','immersive_weathering:cracked_deepslate_tile_wall',
  'immersive_weathering:mossy_brick_stairs','immersive_weathering:mossy_brick_slab',
  'immersive_weathering:mossy_stone_stairs','immersive_weathering:mossy_stone_slab','immersive_weathering:cracked_brick_slab',
  'immersive_weathering:mossy_stone_wall','immersive_weathering:mossy_stone_wall','immersive_weathering_cracked_brick_stairs',
  'immersive_weathering:stone_wall','immersive_weathering:mossy_brick_wall','immersive_weathering:cracked_brick_wall',
  'immersive_weathering:cracked_stone_brick_wall','immersive_weathering:cracked_stone_brick_stairs',
  'immersive_weathering:cracked_stone_brick_slab','immersive_weathering:cracked_polished_blackstone_brick_stairs',
  'immersive_weathering:cracked_polished_blackstone_brick_stairs','immersive_weathering:cracked_polished_blackstone_brick_slab',
  'immersive_weathering:cracked_polished_blackstone_brick_wall','immersive_weathering:cracked_nether_brick_slab',
  'immersive_weathering:cracked_nether_brick_wall','immersive_weathering:cracked_nether_brick_stairs',
  'immersive_weathering:cracked_prismarine_brick_wall','immersive_weathering:cracked_prismarine_brick_stairs',
  'immersive_weathering:cracked_prismarine_brick_slab','immersive_weathering:dark_prismarine_wall']

  const q = ['quark:sandstone_bricks_slab','quark:red_sandstone_bricks_slab','quark:sandstone_bricks_stairs',
  'quark:red_sandstone_bricks_stairs','quark:sandstone_bricks_wall','quark:red_sandstone_bricks_wall',
  'quark:nether_brick_fence_gate', '/quark:blue_nether_bricks_.*/','quark:duskbound_block_slab','quark:duskbound_block_stairs',
  'quark:midori_slab','quark:midori_stairs','quark:midori_block_stairs','quark:midori_block_slab','quark:thatch_stairs',
  'quark:thatch_slab']

  const s = ['/supplementaries:trapped_present_.*/', 'supplementaries:trapped_present',
  'supplementaries:lapis_bricks_slab','supplementaries:lapis_bricks_stairs',
  'supplementaries:lapis_bricks_wall','supplementaries:blackstone_tile_slab','supplementaries:blackstone_tile_stairs','supplementaries:blackstone_tile_stairs',
  'supplementaries:blackstone_tile_wall','supplementaries:stone_tile_slab','supplementaries:stone_tile_stairs','supplementaries:stone_tile_stairs',
  'supplementaries:stone_tile_wall','supplementaries:checker_slab']

  const sully = ['sullysmod:rough_jade_stairs','sullysmod:rough_jade_brick_stairs','sullysmod:smoothed_rough_jade_stairs',
  'sullysmod:smoothed_rough_jade_slab','sullysmod:polished_jade_shingle_slab','sullysmod:polished_jade_shingle_stairs',
  'sullysmod:polished_small_jade_brick_slab','sullysmod:polished_small_jade_brick_stairs',
  'sullysmod:rough_jade_tile_stairs','sullysmod:polished_jade_stairs','sullysmod:polished_jade_brick_stairs',
  'sullysmod:polished_jade_tile_stairs','sullysmod:rough_jade_slab','sullysmod:rough_jade_brick_slab','sullysmod:smoothed_rough_jade',
  'sullysmod:rough_jade_tile_slab','sullysmod:polished_jade_slab','sullysmod:polished_jade_brick_slab',
  'sullysmod:polished_jade_tile_slab']

  const tw = ['twigs:smooth_basalt_brick_slab','twigs:smooth_basalt_brick_stairs','twigs:smooth_basalt_brick_wall',
  'twigs:bamboo_thatch_stairs','twigs:bamboo_thatch_slab','twigs:mossy_brick_stairs','twigs:mossy_brick_slab',
  'twigs:mossy_brick_wall','twigs:mossy_cobblestone_brick_stairs','twigs:mossy_cobblestone_brick_slab',
  'twigs:mossy_cobblestone_brick_wall','twigs:cobblestone_brick_stairs','twigs:cobblestone_brick_slab',
  'twigs:cobblestone_brick_wall','twigs:polished_amethyst_stairs','twigs:polished_amethyst_slab',
  'twigs:polished_amethyst_brick_stairs','twigs:polished_amethyst_brick_slab','twigs:polished_amethyst_brick_wall',
  'twigs:weeping_polished_blackstone_brick_stairs','twigs:twisting_polished_blackstone_brick_stairs',
  'twigs:weeping_polished_blackstone_brick_slab','twigs:twisting_polished_blackstone_brick_slab',
  'twigs:twisting_polished_blackstone_brick_wall','twigs:weeping_polished_blackstone_brick_wall',
  'twigs:calcite_stairs','twigs:calcite_wall','twigs:calcite_slab','twigs:tuff_stairs','twigs:tuff_wall',
  'twigs:tuff_slab','twigs:rhyolite_stairs','twigs:rhyolite_slab','twigs:rhyolite_wall','twigs:schist_stairs',
  'twigs:schist_slab','twigs:schist_wall','twigs:bloodstone_stairs','twigs:bloodstone_slab','twigs:bloodstone_wall',
  'twigs:polished_rhyolite_stairs','twigs:polished_rhyolite_slab','twigs:polished_schist_stairs',
  'twigs:polished_schist_slab','twigs:polished_bloodstone_stairs','twigs:polished_bloodstone_slab',
  'twigs:polished_rhyolite_brick_stairs','twigs:polished_rhyolite_brick_slab','twigs:polished_schist_brick_stairs',
  'twigs:polished_schist_brick_slab','twigs:polished_bloodstone_brick_stairs','twigs:polished_bloodstone_brick_slab',
  'twigs:polished_rhyolite_brick_wall','twigs:polished_schist_brick_wall','twigs:polished_bloodstone_brick_wall',
  'twigs:waxed_copper_pillar','twigs:waxed_exposed_copper_pillar','twigs:waxed_weathered_copper_pillar','twigs:waxed_oxidized_copper_pillar',
  'unvotedandshelved:waxed_copper_button','unvotedandshelved:waxed_exposed_copper_button','unvotedandshelved:waxed_weathered_copper_button',
  'unvotedandshelved:waxed_oxidized_copper_button','immersive_weathering:cracked_brick_stairs']

  const u = ['undergarden:depthrock_stairs','undergarden:depthrock_slab','undergarden:depthrock_wall','undergarden:polished_depthrock_stairs',
  'undergarden:polished_depthrock_slab','undergarden:polished_depthrock_wall','undergarden:depthrock_tile_slab',
  'undergarden:depthrock_brick_stairs','undergarden:depthrock_brick_slab','undergarden:cloggrum_tile_slab'
  ,'undergarden:depthrock_brick_wall','undergarden:shiverstone_stairs','undergarden:shiverstone_slab','undergarden:shiverstone_wall',
  'undergarden:shiverstone_brick_stairs','undergarden:shiverstone_brick_slab','undergarden:shiverstone_brick_wall',
  'undergarden:tremblecrust_stairs','undergarden:tremblecrust_slab','undergarden:tremblecrust_wall','undergarden:tremblecrust_brick_stairs',
  'undergarden:tremblecrust_brick_slab','undergarden:tremblecrust_brick_wall','undergarden:depthrock_tile_stairs',
  'undergarden:depthrock_tile_wall', 'undergarden:cloggrum_tile_stairs', 'undergarden:cloggrum_tile_wall']

  const ua = ['upgrade_aquatic:coralstone_slab','upgrade_aquatic:bubble_coralstone_slab','upgrade_aquatic:tube_coralstone_slab',
  'upgrade_aquatic:horn_coralstone_slab','upgrade_aquatic:brain_coralstone_slab','upgrade_aquatic:fire_coralstone_slab',
  'upgrade_aquatic:acan_coralstone_slab','upgrade_aquatic:finger_coralstone_slab','upgrade_aquatic:star_coralstone_slab',
  'upgrade_aquatic:moss_coralstone_slab','upgrade_aquatic:pillow_coralstone_slab',
  'upgrade_aquatic:petal_coralstone_slab','upgrade_aquatic:branch_coralstone_slab','upgrade_aquatic:rock_coralstone_slab',
  'upgrade_aquatic:silk_coralstone_slab','upgrade_aquatic:chrome_coralstone_slab','upgrade_aquatic:prismarine_coralstone_slab',
  'upgrade_aquatic:elder_prismarine_coralstone_slab','upgrade_aquatic:dead_coralstone_slab','upgrade_aquatic:coralstone_stairs',
  'upgrade_aquatic:bubble_coralstone_stairs','upgrade_aquatic:tube_coralstone_stairs','upgrade_aquatic:horn_coralstone_stairs',
  'upgrade_aquatic:brain_coralstone_stairs','upgrade_aquatic:fire_coralstone_stairs','upgrade_aquatic:acan_coralstone_stairs',
  'upgrade_aquatic:finger_coralstone_stairs','upgrade_aquatic:star_coralstone_stairs','upgrade_aquatic:moss_coralstone_stairs',
  'upgrade_aquatic:petal_coralstone_stairs','upgrade_aquatic:branch_coralstone_stairs','upgrade_aquatic:rock_coralstone_stairs',
  'upgrade_aquatic:silk_coralstone_stairs','upgrade_aquatic:chrome_coralstone_stairs','upgrade_aquatic:prismarine_coralstone_stairs',
  'upgrade_aquatic:elder_prismarine_coralstone_stairs','upgrade_aquatic:dead_coralstone_stairs','upgrade_aquatic:pillow_coralstone_stairs',
  'upgrade_aquatic:coralstone_wall',
  'upgrade_aquatic:bubble_coralstone_wall','upgrade_aquatic:tube_coralstone_wall','upgrade_aquatic:horn_coralstone_wall',
  'upgrade_aquatic:brain_coralstone_wall','upgrade_aquatic:fire_coralstone_wall','upgrade_aquatic:acan_coralstone_wall',
  'upgrade_aquatic:finger_coralstone_wall','upgrade_aquatic:star_coralstone_wall','upgrade_aquatic:moss_coralstone_wall',
  'upgrade_aquatic:petal_coralstone_wall','upgrade_aquatic:branch_coralstone_wall','upgrade_aquatic:rock_coralstone_wall',
  'upgrade_aquatic:silk_coralstone_wall','upgrade_aquatic:chrome_coralstone_wall','upgrade_aquatic:prismarine_coralstone_wall',
  'upgrade_aquatic:elder_prismarine_coralstone_wall','upgrade_aquatic:dead_coralstone_wall','upgrade_aquatic:pillow_coralstone_wall',
  'autumnity:snail_shell_brick_slab','autumnity:snail_shell_brick_stairs','autumnity:snail_shell_brick_wall',
  'autumnity:snail_shell_tile_slab','autumnity:snail_shell_tile_stairs','autumnity:snail_shell_tile_wall',
  'upgrade_aquatic:kelpy_cobblestone_stairs','upgrade_aquatic:tongue_kelpy_cobblestone_stairs','upgrade_aquatic:polar_kelpy_cobblestone_stairs',
  'upgrade_aquatic:thorny_kelpy_cobblestone_stairs','upgrade_aquatic:ochre_kelpy_cobblestone_stairs',
  'upgrade_aquatic:kelpy_cobblestone_slab','upgrade_aquatic:tongue_kelpy_cobblestone_slab','upgrade_aquatic:polar_kelpy_cobblestone_slab',
  'upgrade_aquatic:thorny_kelpy_cobblestone_slab','upgrade_aquatic:ochre_kelpy_cobblestone_slab',
  'upgrade_aquatic:kelpy_cobblestone_wall','upgrade_aquatic:tongue_kelpy_cobblestone_wall','upgrade_aquatic:polar_kelpy_cobblestone_wall',
  'upgrade_aquatic:thorny_kelpy_cobblestone_wall','upgrade_aquatic:ochre_kelpy_cobblestone_wall',
  'upgrade_aquatic:kelpy_stone_brick_slab','upgrade_aquatic:tongue_kelpy_stone_brick_slab','upgrade_aquatic:polar_kelpy_stone_brick_slab',
  'upgrade_aquatic:thorny_kelpy_stone_brick_slab','upgrade_aquatic:ochre_kelpy_stone_brick_slab',
  'upgrade_aquatic:kelpy_stone_brick_stairs','upgrade_aquatic:tongue_kelpy_stone_brick_stairs','upgrade_aquatic:polar_kelpy_stone_brick_stairs',
  'upgrade_aquatic:thorny_kelpy_stone_brick_stairs','upgrade_aquatic:ochre_kelpy_stone_brick_stairs',
  'upgrade_aquatic:kelpy_stone_brick_wall','upgrade_aquatic:tongue_kelpy_stone_brick_wall','upgrade_aquatic:polar_kelpy_stone_brick_wall',
  'upgrade_aquatic:thorny_kelpy_stone_brick_wall','upgrade_aquatic:ochre_kelpy_stone_brick_wall','upgrade_aquatic:scute_shingle_stairs',
  'upgrade_aquatic:scute_shingle_slab','upgrade_aquatic:scute_shingle_wall','upgrade_aquatic:scute_pavement_stairs',
  'upgrade_aquatic:tooth_stairs','upgrade_aquatic:tooth_wall','upgrade_aquatic:tooth_slab',
  'upgrade_aquatic:tooth_brick_stairs','upgrade_aquatic:tooth_brick_wall','upgrade_aquatic:tooth_brick_slab',
  'upgrade_aquatic:scute_pavement_slab','upgrade_aquatic:scute_pavement_wall','upgrade_aquatic:beachgrass_thatch_slab',
  'upgrade_aquatic:beachgrass_thatch_stairs','upgrade_aquatic:luminous_prismarine_slab','upgrade_aquatic:luminous_prismarine_stairs',
  ]

  const v = ['minecraft:command_block','minecraft:waxed_copper_block','minecraft:cut_copper_stairs','minecraft:waxed_cut_copper_stairs',
  'minecraft:cut_copper_slab','minecraft:waxed_cut_copper','minecraft:waxed_exposed_cut_copper',
  'minecraft:waxed_cut_copper_slab','minecraft:waxed_exposed_copper','minecraft:waxed_weathered_cut_copper','minecraft:waxed_oxidized_cut_copper',
  'minecraft:exposed_cut_copper_stairs','minecraft:waxed_exposed_cut_copper_stairs','minecraft:exposed_cut_copper_slab',
  'minecraft:waxed_exposed_cut_copper_slab','minecraft:waxed_weathered_copper','minecraft:weathered_cut_copper_stairs',
  'minecraft:waxed_weathered_cut_copper_stairs','minecraft:weathered_cut_copper_slab',
  'minecraft:waxed_weathered_cut_copper_slab','minecraft:waxed_oxidized_copper','minecraft:oxidized_cut_copper_stairs',
  'minecraft:waxed_oxidized_cut_copper_stairs','minecraft:oxidized_cut_copper_slab','minecraft:waxed_oxidized_cut_copper_slab',
  'minecraft:smooth_stone_slab','minecraft:stone_slab','minecraft:stone_stairs','minecraft:stone_wall','minecraft:cobblestone_slab',
  'minecraft:cobblestone_stairs','minecraft:cobblestone_wall','minecraft:mossy_cobblestone_slab','minecraft:mossy_cobblestone_stairs',
  'minecraft:mossy_cobblestone_wall','minecraft:stone_brick_slab','minecraft:stone_brick_stairs','minecraft:stone_brick_wall',
  'minecraft:mossy_stone_brick_slab','minecraft:mossy_stone_brick_stairs','minecraft:mossy_stone_brick_wall','minecraft:sandstone_slab',
  'minecraft:cut_sandstone_slab','minecraft:red_sandstone_slab','minecraft:cut_red_sandstone_slab','minecraft:sandstone_wall',
  'minecraft:red_sandstone_wall','minecraft:brick_slab','minecraft:brick_stairs','minecraft:brick_wall','minecraft:granite_slab',
  'minecraft:granite_stairs','minecraft:granite_wall','minecraft:andesite_slab','minecraft:andesite_stairs','minecraft:andesite_wall',
  'minecraft:diorite_slab','minecraft:diorite_stairs','minecraft:diorite_wall','minecraft:prismarine_slab','minecraft:prismarine_stairs',
  'minecraft:prismarine_wall','minecraft:prismarine_brick_slab','minecraft:prismarine_brick_stairs',
  'minecraft:dark_prismarine_slab','minecraft:dark_prismarine_stairs','minecraft:dark_prismarine_wall',
  'minecraft:red_nether_brick_slab','minecraft:red_nether_brick_stairs','minecraft:red_nether_brick_wall',
  'minecraft:nether_brick_slab','minecraft:nether_brick_stairs','minecraft:nether_brick_wall','minecraft:nether_brick_fence',
  'minecraft:purpur_slab','minecraft:purpur_stairs','minecraft:end_stone_brick_slab','minecraft:end_stone_brick_stairs',
  'minecraft:end_stone_brick_wall','minecraft:quartz_slab','minecraft:smooth_quartz_slab','minecraft:quartz_stairs',
  'minecraft:smooth_quartz_stairs','minecraft:red_sandstone_stairs','minecraft:smooth_red_sandstone_stairs',
  'minecraft:polished_granite_stairs', 'minecraft:polished_granite_slab','minecraft:polished_diorite_stairs',
  'minecraft:polished_diorite_slab','minecraft:blackstone_slab','minecraft:polished_andesite_slab',
  'minecraft:polished_andesite_stairs','minecraft:cobbled_deepslate_stairs','minecraft:cobbled_deepslate_wall',
  'minecraft:cobbled_deepslate_slab','minecraft:polished_deepslate_stairs','minecraft:polished_deepslate_wall',
  'minecraft:polished_deepslate_slab','minecraft:deepslate_brick_stairs','minecraft:deepslate_brick_wall',
  'minecraft:deepslate_brick_slab','minecraft:deepslate_tile_slab','minecraft:deepslate_tile_stairs',
  'minecraft:deepslate_tile_wall','minecraft:smooth_red_sandstone_slab',
  'minecraft:blackstone_stairs','minecraft:blackstone_wall','minecraft:polished_blackstone_slab',
  'minecraft:polished_blackstone_stairs','minecraft:polished_blackstone_wall','minecraft:polished_blackstone_brick_slab',
  'minecraft:polished_blackstone_brick_stairs','minecraft:polished_blackstone_brick_wall','minecraft:sandstone_stairs',
  'minecraft:smooth_sandstone_stairs','minecraft:smooth_sandstone_slab']

  const mods = [aa, atmos, clay, env, ap, bb, c, dd, ec, etc, fr, iw, q, s, sully, tw, u, ua, v]
  mods.forEach(modid => {
    modid.forEach(item => {
      event.hideNoFilter(item)
    })
  })
})