onEvent('rei.hide.fluids', event => {
  const mekanismGodDangIt = ['mekanism:hydrogen','mekanism:oxygen','mekanism:chlorine','mekanism:sulfur_dioxide',
  'mekanism:sulfur_trioxide','mekanism:sulfuric_acid','mekanism:hydrogen_chloride','mekanism:hydrofluoric_acid',
  'mekanism:uranium_oxide','mekanism:uranium_hexafluoride','mekanism:uranium_hexafluoride','mekanism:ethene',
  'mekanism:sodium','mekanism:superheated_sodium','mekanism:brine','mekanism:lithium','mekanism:steam',
  'mekanism:heavy_water','mekanism:nutritional_paste','mekanism:antimatter','mekanism:brine','mekanism:fissile_fuel',
  'mekanism:hydrofluoric_acid','mekanism:lithium','mekanism:nuclear_waste','mekanism:osmium','mekanism:plutonium',
  'mekanism:water_vapor','mekanism:bio','mekanism:carbon','mekanism:fungi','mekanism:diamond','mekanism:gold',
  'mekanism:redstone','mekanism:refined_obsidian','mekanism:tin','mekanism:aqua','mekanism:black','mekanism:blue',
  'mekanism:lime','mekanism:light_blue','mekanism:magenta','mekanism:orange','mekanism:pink','mekanism:purple',
  'mekanism:clean_gold','mekanism:clean_iron','mekanism:clean_copper','mekanism:yellow','mekanism:white','mekanism:red',
  'mekanism:dirty_gold','mekanism:dirty_copper','mekanism:clean_uranium','mekanism:clean_tin','mekanism:clean_osmium','mekanism:clean_lead',
  'mekanism:dirty_lead','mekanism:dirty_osmium','mekanism:dirty_iron','mekanism:dirty_tin','mekanism:dirty_uranium',
  'mekanism:brown','mekanism:cyan','mekanism:dark_red','mekanism:gray','mekanism:green','mekanism:light_gray',
  'mekanism:polonium','mekanism:spent_nuclear_waste']

  mekanismGodDangIt.forEach(item => {
    event.hide(item)
  })
})

onEvent('rei.hide.items', event => {
  event.hide('#quark:hedges')
  event.hide('#quark:posts')
  event.hide('/atmospheric:.*post.*/')
  event.hide('/environmental:.*post.*/')
  event.hide('/environmental:.*leaf_carpet/')
  event.hide('/atmospheric:.*leaf_carpet/')
  event.hide('/environmental:.*leaf_pile/')
  event.hide('/atmospheric:.*leaf_pile/')
  event.hide('#quark:vertical_slab')
  event.hide('/immersive_weathering:.*_vertical_slab/')
  event.hide('/sullysmod:.*_vertical_slab/')
  event.hide('/.*_vertical_slab/')
  event.hide('/.*_vertical_planks/')
  event.hide('/.*chest_boat/')
  event.hide('/sullysmod:.*_button/')
  event.hide('/structure_gel:.*/')
  event.hide('/effortlessbuilding:.*/')
  event.hide('/itemfilters:.*/')
  event.hide('/quark:.*blossom.*/')
  event.hide('#immersive_weathering:bark')
  event.hide('immersive_weathering:mulch')
  event.hide('immersive_weathering:nulch')
  event.hide('/supplementaries:.*ash.*/')

  const quarkPosts = ['quark:acacia_post', 'quark:azalea_post', 'quark:birch_post', 'quark:blossom_post',
  'quark:crimson_post', 'quark:dark_oak_post', 'quark:jungle_post', 'quark:oak_post', 'quark:spruce_post',
  'quark:warped_post', 'habitat:fairy_ring_mushroom_post','autumnity:stripped_maple_post','autumnity:maple_post',
  'autumnity:vertical_maple_planks','upgrade_aquatic:stripped_river_post','upgrade_aquatic:river_post',
  'autumnity:vertical_river_planks','upgrade_aquatic:stripped_driftwood_post','upgrade_aquatic:driftwood_post',
  'upgrade_aquatic:vertical_driftwood_planks'
  ]
  quarkPosts.forEach(item => {
    event.hide(item)
  })
  const whatever = ['minecraft:structure_void','minecraft:repeating_command_block','minecraft:chain_command_block',
  'minecraft:command_block_minecart','ravageandcabbage:throwable_cabbage','citadel:debug','citadel:fancy_item',
  'citadel:effect_item','citadel:citadel_book','/twigs:.*polished_tuff.*/','/twigs:.*polished_calcite.*/',
  '/dustrial_decor:.*vertical_slab/','/immersive_weathering:.*vertical_slab/','/dustrial_decor:sheet_.*/',
  '/dustrial_decor:rusty.*/', 'dustrial_decor:cardboard_helmet','dustrial_decor:cardboard_chestplate',
  'dustrial_decor:cardboard_leggings','dustrial_decor:cardboard_boots','structure_gel:data_handler',
  'structure_gel:dynamic_spawner','structure_gel:building_tool', 'create:copper_backtank_placeable','create:netherite_backtank_placeable',
  '/unvotedandshelved:.*pillar/','ecologics:thin_ice','/create:.*cut_granite.*/','/create:.*small_granite.*/',
  '/create:.*small_diorite.*/','/create:.*cut_diorite.*/','/create:.*cut_calcite.*/','/create:.*small_calcite.*/',
  '/create:.*cut_tuff.*/','/create:.*small_tuff.*/','/create:.*small_dripstone.*/','/create:.*cut_dripstone.*/',
  '/create:.*cut_deepslate.*/','/create:.*small_deepslate.*/','/create:.*small_limestone.*/','/create:.*cut_limestone.*/',
  '/create:.*small_andesite.*/','/create:.*cut_andesite.*/','/create:.*encased.*cogwheel/','/create:.*asurine.*/',
  '/create:.*ochrum.*/','/create:.*crimsite_.*/','/create:.*veridium.*/','/create:.*scoria.*/',
  'immersive_weathering:cracked_deepslate_tile_vertical_slab','minecraft:chest','minecraft:trapped_chest',
  'randomium:any_item','#wildbackport:chest_boats','minecraft:petrified_oak_slab','minecraft:structure_block',
  'minecraft:jigsaw','quark:charcoal_block','lighting_glow_squids:newlight','domesticationinnovation:magnet',
  'domesticationinnovation:deflection_shield','domesticationinnovation:rotten_apple','druidcraftrg:knife',
  'druidcraftrg:rope','druidcraftrg:platform','druidcraftrg:beam','minecraft:debug_stick','ftbquests:barrier',
  'ftbquests:stage_barrier','minecraft:barrier','minecraft:light','blockswapper:copper_block_swapper',
  'ftbquests_missing_item','quark:bamboo_block','alexsmobs:tab_icon','alexsmobs:halo','dustrial_decor:cardboard_box',
  '/supplementaries:.*projectile/','galosphere:icon_item','/dustrial_decor:.*cast_iron.*/','immersive_weathering:azalea_flower_pile',
  'immersive_weathering:azalea_flowers','twigs:azalea_flowers','immersive_weathering:steel_wool','immersive_weathering:mulch_block',
  'immersive_weathering:nulch_block','/immersive_weathering:.*scales/','alexsmobs:tigers_blessing','alexsmobs:debilitating_sting',
  'alexsmobs:poison_resistance','alexsmobs:exsanguination','alexsmobs:vine_lasso_inventory','alexsmobs:vine_lasso_hand',
  'alexsmobs:banana_peel','alexsmobs:sand_circle','alexsmobs:red_sand_circle','alexsmobs:falconry_glove_hand',
  'alexsmobs:crimson_mosquito_larva','/alexsmobs:hemolymph.*/','/alexsmobs:blood.*/','alexsmobs:falconry_glove_inventory',
  'alexsmobs:froststalker_horn','alexsmobs:centipede_leg','alexsmobs:mosquito_larva','alexsmobs:crocodile_scute',
  'alexsmobs:crocodile_chestplate','alexsmobs:rattlesnake_rattle','alexsmobs:warped_muscle','alexsmobs:kangaroo_meat',
  'alexsmobs:cooked_kangaroo_meat','alexsmobs:kangaroo_hide','alexsmobs:kangaroo_burger','alexsmobs:gongylidia',
  'alexsmobs:banana','alexsmobs:ancient_dart','alexsmobs:sopa_de_macaco','/alexsmobs:tarantula.*/', 'alexsmobs:bear_fur',
  'alexsmobs:bear_dust','/alexsmobs:roadrunner.*/','alexsmobs:mosquito_proboscis','alexsmobs:gazelle_horn','alexsmobs:shark_tooth',
  'alexsmobs:shark_tooth_arrow','/alexsmobs:komodo.*/','alexsmobs:poison_bottle','alexsmobs:centipede_leggings',
  'alexsmobs:shrimp_fried_rice','alexsmobs:dropbear_claw','alexsmobs:cosmic_cod',
  'alexsmobs:mimic_octopus_bucket','alexsmobs:cosmic_cod_bucket','alexsmobs:leafcutter_ant_pupa',
  'alexsmobs:serrated_shark_tooth','/alexsmobs:.*locator/','alexsmobs:ambergris',
  'alexsmobs:froststalker_helmet','alexsmobs:pigshoes','alexsmobs:bison_fur','/alexsmobs:.*skelewag.*/','alexsmobs:fish_bones',
  'alexsmobs:acacia_blossom','/alexsmobs:void_worm.*/','alexsmobs:frilled_shark_bucket','alexsmobs:skelewag_sword_inventory',
  'alexsmobs:skelewag_sword_hand','alexsmobs:mysterious_worm','alexsmobs:shed_snake_skin','alexsmobs:void_worm_beak',
  'alexsmobs:void_worm_effigy','create:andesite_encased_shaft','create:andesite_encased_cogwheel','create:andesite_encased_large_cogwheel',
  'create:brass_encased_shaft','create:brass_encased_cogwheel','create:brass_encased_large_cogwheel','incubation:fried_egg',
  'immersive_weathering:quark/blue_blossom_leaf_pile','snowyspirit:eggnog','snowyspirit:quark/sled_blossom','snowyspirit:quark/sled_azalea',
  'supplementaries:quark/hanging_sign_blossom','supplementaries:quark/sign_post_blossom','supplementaries:quark/hanging_sign_azalea',
  'supplementaries:quark/sign_post_azalea','snowyspirit:habitat/sled_fairy_ring_mushroom','supplementaries:habitat/hanging_sign_fairy_ring_mushroom',
  'supplementaries:habitat/sign_post_fairy_ring_mushroom','supplementaries:bomb_projectile','supplementaries:bomb_blue_projectile',
  'supplementaries:bomb_spiky_projectile','ecologics:surface_moss','/paraglider:.*statue/','paraglider:heart_container',
  'paraglider:stamina_vessel','paraglider:spirit_orb','paraglider:anti_vessel','paraglider:essence','immersive_weathering:cracked_bricks',
  'apotheosis:lucky_foot','apotheosis:potion_charm','apotheosis:sundering','create_jetpack:jetpack_placeable',
  'upgrade_aquatic:river_chest_boat','upgrade_aquatic:driftwood_chest_boat','autumnity:maple_chest_boat',
  'upgrade_aquatic:river_furnace_boat','upgrade_aquatic:driftwood_furnace_boat','autumnity:maple_furnace_boat',
  'upgrade_aquatic:large_river_boat','upgrade_aquatic:large_driftwood_boat','autumnity:large_maple_boat',
  'upgrade_aquatic:jellyfish_bucket','ftbquests:screen_1','ftbquests:screen_3','ftbquests:screen_5','ftbquests:screen_7',
  'ftbquests:loot_crate_opener','ftbquests:missing_item','ftbquests:custom_icon','ftbquests:detector','ftbquests:lootcrate',
  'abnormals_delight:azalea_cabinet','abnormals_delight:poise_cabinet',  'architects_palette:warped_board_stairs',
  'architects_palette:oak_board_slab','architects_palette:spruce_board_slab','architects_palette:birch_board_slab',
  'architects_palette:jungle_board_slab','architects_palette:acacia_board_slab','architects_palette:dark_oak_board_slab',
  'architects_palette:crimson_board_slab','architects_palette:warped_board_slab','architects_palette:oak_board_stairs',
  'architects_palette:spruce_board_stairs', 'architects_palette:birch_board_stairs', 'architects_palette:jungle_board_stairs',
  'architects_palette:twisted_board_stairs','architects_palette:crimson_board_slab', 'architects_palette:warped_board_slab',
  'architects_palette:oak_board_wall','architects_palette:spruce_board_wall', 'architects_palette:birch_board_wall',
  'architects_palette:jungle_board_wall', 'architects_palette:twisted_board_wall','architects_palette:twisted_board_slab',
  'architects_palette:acacia_board_stairs', 'architects_palette:dark_oak_board_stairs', 'architects_palette:crimson_board_stairs',
  'architects_palette:acacia_board_wall', 'architects_palette:dark_oak_board_wall', 'architects_palette:crimson_board_wall',
  'architects_palette:warped_board_wall', "naturalist:venison", "naturalist:cooked_venison",
  'environmental:vertical_willow_planks', 'environmental:vertical_wisteria_planks', 'environmental:vertical_cherry_planks',
  'atmospheric:vertical_kousa_planks', 'atmospheric:vertical_yucca_planks', 'atmospheric:vertical_rosewood_planks',
  'atmospheric:vertical_morado_planks', 'atmospheric:vertical_grimwood_planks', 'atmospheric:vertical_aspen_planks',
  'environmental:willow_chest_boat', 'environmental:wisteria_chest_boat', 'environmental:cherry_chest_boat',
  'atmospheric:kousa_chest_boat', 'atmospheric:yucca_chest_boat', 'atmospheric:rosewood_chest_boat',
  'atmospheric:morado_chest_boat', 'atmospheric:grimwood_chest_boat', 'atmospheric:aspen_chest_boat',
  'environmental:willow_furnace_boat', 'environmental:wisteria_furnace_boat', 'environmental:cherry_furnace_boat',
  'atmospheric:kousa_furnace_boat', 'atmospheric:yucca_furnace_boat', 'atmospheric:rosewood_furnace_boat',
  'atmospheric:morado_furnace_boat', 'atmospheric:grimwood_furnace_boat', 'atmospheric:aspen_furnace_boat',
  'environmental:large_willow_boat', 'environmental:large_wisteria_boat', 'environmental:large_cherry_boat',
  'atmospheric:large_kousa_boat', 'atmospheric:large_yucca_boat', 'atmospheric:large_rosewood_boat',
  'atmospheric:large_morado_boat', 'atmospheric:large_grimwood_boat', 'atmospheric:large_aspen_boat',
  'create:bar_of_chocolate','create_central_kitchen:honey_cake_slice','create_central_kitchen:chocolate_cake_slice',
  'create_central_kitchen:passionfruit_cake_slice','create_central_kitchen:aloe_cake_slice','create_central_kitchen:yucca_cake_slice',
  'create_central_kitchen:pumpkin_cake_slice','create_central_kitchen:sweet_berry_cake_slice','environmental:blue_wisteria_leaf_pile',
  'environmental:white_wisteria_leaf_pile','environmental:pink_wisteria_leaf_pile','environmental:purple_wisteria_leaf_pile',
  'environmental:willow_leaf_pile','atmospheric:rosewood_leaf_pile','atmospheric:morado_leaf_pile','atmospheric:flowering_morado_leaf_pile',
  'atmospheric:yucca_leaf_pile','atmospheric:kousa_leaf_pile','atmospheric:aspen_leaf_pile','atmospheric:grimwood_leaf_pile',
  'autumnity:maple_leaf_pile','autumnity:red_maple_leaf_pile','autumnity:orange_maple_leaf_pile','autumnity:yellow_maple_leaf_pile',
  'autumnity:maple_leaf_carpet','autumnity:red_maple_leaf_carpet','autumnity:orange_maple_leaf_carpet','autumnity:yellow_maple_leaf_carpet',
  'upgrade_aquatic:river_leaf_pile','upgrade_aquatic:river_leaf_carpet',"woodworks:oak_boards","woodworks:spruce_boards","woodworks:birch_boards",
  "woodworks:jungle_boards","woodworks:acacia_boards","woodworks:dark_oak_boards","woodworks:crimson_boards","woodworks:warped_boards",
  "woodworks:oak_leaf_pile","woodworks:spruce_leaf_pile","woodworks:birch_leaf_pile","woodworks:jungle_leaf_pile","woodworks:acacia_leaf_pile",
  "woodworks:dark_oak_leaf_pile","woodworks:azalea_leaf_pile","woodworks:flowering_azalea_leaf_pile","woodworks:spruce_bookshelf",
  "woodworks:birch_bookshelf","woodworks:jungle_bookshelf","woodworks:acacia_bookshelf","woodworks:dark_oak_bookshelf","woodworks:crimson_bookshelf",
  "woodworks:warped_bookshelf","woodworks:spruce_beehive","woodworks:birch_beehive",
  "woodworks:jungle_beehive","woodworks:acacia_beehive","woodworks:dark_oak_beehive","woodworks:crimson_beehive","woodworks:warped_beehive",
  "woodworks:oak_chest","woodworks:spruce_chest","woodworks:birch_chest","woodworks:jungle_chest","woodworks:acacia_chest",
  "woodworks:dark_oak_chest","woodworks:crimson_chest","woodworks:warped_chest","woodworks:oak_trapped_chest","woodworks:spruce_trapped_chest",
  "woodworks:birch_trapped_chest","woodworks:jungle_trapped_chest","woodworks:acacia_trapped_chest","woodworks:dark_oak_trapped_chest",
  "woodworks:crimson_trapped_chest","woodworks:warped_trapped_chest"
  ]
  whatever.forEach(item => {
    event.hide(item)
  })

  const habitat = ['habitat:fairy_ring_mushroom_slab','habitat:fairy_ring_mushroom_stairs','habitat:fairy_ring_mushroom_stem',
  'habitat:fairy_ring_mushroom_planks','habitat:fairy_ring_mushroom_pressure_plate','habitat:fairy_ring_mushroom_fence',
  'habitat:fairy_ring_mushroom_fence_gate','habitat:fairy_ring_mushroom_button','habitat:fairy_ring_mushroom_trapdoor',
  'habitat:fairy_ring_mushroom_door','habitat:fairy_ring_mushroom_sign','habitat:fairy_ring_mushroom_chest',
  'habitat:fairy_ring_mushroom_trapped_chest','habitat:fairy_ring_mushroom_beehive','habitat:fairy_ring_mushroom_cabinet',
  'habitat:fairy_ring_mushroom_boat','habitat:stripped_fairy_ring_mushroom_stem','habitat:fairy_ring_mushroom_hyphae',
  'habitat:stripped_fairy_ring_mushroom_hyphae','habitat:fairy_ring_mushroom_ladder','habitat:fairy_ring_mushroom_bookshelf']
  habitat.forEach(item => {
    event.hide(item)
  })

  const supp = ['supplementaries:placeable_item']
  supp.forEach(item => {
    event.hide(item)
  })

  const ec = ['everycomp:all_woods','everycomp:c/quark/azalea_window_pane','everycomp:fd/quark/azalea_cabinet',
  'everycomp:tw/habitat/fairy_ring_mushroom_table','everycomp:tw/quark/blossom_table','everycomp:tw/quark/azalea_table',
  'everycomp:fd/quark/blossom_cabinet',
  'everycomp:c/habitat/fairy_ring_mushroom_window_pane','everycomp:c/quark/blossom_window_pane',
  'everycomp:c/quark/azalea_window','everycomp:c/habitat/fairy_ring_mushroom_window','everycomp:c/quark/blossom_window',
  'everycomp:all_woods','everycomp:ap/quark/azalea_railing','everycomp:ap/habitat/fairy_ring_mushroom_railing',
  'everycomp:ap/quark/blossom_railing','everycomp:ap/quark/azalea_boards','everycomp:ap/habitat/fairy_ring_mushroom_boards',
  'everycomp:ap/quark/blossom_boards','everycomp:fd/environmental/wisteria_cabinet','everycomp:fd/environmental/willow_cabinet',
  'everycomp:fd/environmental/cherry_cabinet','everycomp:fd/atmospheric/rosewood_cabinet','everycomp:fd/atmospheric/morado_cabinet',
  'everycomp:fd/atmospheric/aspen_cabinet','everycomp:fd/atmospheric/kousa_cabinet','everycomp:fd/atmospheric/grimwood_cabinet',
  'everycomp:fd/atmospheric/yucca_cabinet','everycomp:fd/autumnity/maple_cabinet','everycomp:fd/upgrade_aquatic/driftwood_cabinet',
  'everycomp:fd/upgrade_aquatic/river_cabinet'
  ]
  ec.forEach(item => {
    event.hide(item)
  })

  const quarkStrippedPosts = ['quark:stripped_acacia_post','quark:stripped_azalea_post',
  'quark:stripped_birch_post','quark:stripped_blossom_post','quark:stripped_crimson_post',
  'quark:stripped_dark_oak_post','quark:stripped_jungle_post','quark:stripped_oak_post',
  'quark:stripped_spruce_post','quark:stripped_warped_post','habitat:stripped_fairy_ring_mushroom_post']
  quarkStrippedPosts.forEach(item => {
    event.hide(item)
  })
  const quarkNuke = ['/quark:.*corundum.*/','/quark:.*azalea.*/','/quark:.*blossom.*/',
  '/quark:.*_stool/','/quark:.*shingles.*/','/quark:.*soul_sandstone.*/','/quark:.*granite.*/','/quark:.*diorite.*/',
  '/quark:.*andesite.*/','/quark:.*calcite.*/','/quark:.*dripstone.*/','/quark:.*tuff.*/','/quark:.*limestone.*/',
  '/quark:.*jasper.*/','/quark:.*shale.*/','/quark:.*myalite_.*/','/quark:.*permafrost.*/','/quark:.*_shard.*/',
  '/quark:.*cobblestone.*/','/quark:.*dirt.*/','/quark:.*netherrack.*/','/quark:.*deepslate.*/','/quark:.*blackstone.*/',
  'quark:gravisand', 'quark:crate', 'quark:stone_lamp', 'quark:stone_brick_lamp', 'quark:magnet', 'quark:magnetized_block',
  'quark:sturdy_stone', 'quark:iron_pillar', 'quark:pipe', 'quark:rope', 'quark:ancient_tome', 'quark:cloud',
  'quark:potato_crate', 'quark:carrot_crate','quark:beetroot_crate','quark:oak_chest','quark:birch_chest','quark:spruce_chest', 'quark:acacia_chest',
  'quark:jungle_chest', 'quark:dark_oak_chest', 'quark:crimson_chest', 'quark:warped_chest','quark:oak_trapped_chest',
  'quark:spruce_trapped_chest', 'quark:acacia_trapped_chest','quark:jungle_trapped_chest', 'quark:dark_oak_trapped_chest',
  'quark:crimson_trapped_chest', 'quark:warped_trapped_chest', 'quark:chute','quark:obsidian_pressure_plate',
  'quark:birch_trapped_chest','/quark:.*_leaf_carpet/','quark:matrix_enchanter','/quark:.*paper_lantern/',
  '/quark:.*bookshelf/']
  quarkNuke.forEach(item => {
    event.hide(item)
  })

  const verticalPlanks = ['quark:vertical_acacia_planks','quark:vertical_azalea_planks',
  'quark:vertical_birch_planks','quark:vertical_blossom_planks','quark:vertical_crimson_planks',
  'quark:vertical_dark_oak_planks','quark:vertical_jungle_planks','quark:vertical_oak_planks',
  'quark:vertical_spruce_planks','quark:vertical_warped_planks','habitat:fairy_ring_mushroom_vertical_slab',
  'twigs:stripped_bamboo_planks_vertical_slab','upgrade_aquatic:vertical_river_planks']
  verticalPlanks.forEach(item => {
    event.hide(item)
  })

  const everyCompVertPlanks = ['everycomp:q/architects_palette/vertical_twisted_planks',
  'everycomp:q/ecologics/vertical_coconut_planks','everycomp:q/ecologics/vertical_azalea_planks',
  'everycomp:q/ecologics/vertical_flowering_azalea_planks','everycomp:q/ecologics/vertical_walnut_planks',
  'everycomp:q/habitat/vertical_fairy_ring_mushroom_planks','everycomp:q/newworld/vertical_fir_planks',
  'everycomp:q/wildbackport/vertical_mangrove_planks','everycomp:q/twigs/vertical_bamboo_planks',
  'everycomp:q/undergarden/vertical_grongle_planks','everycomp:q/undergarden/vertical_smogstem_planks',
  'everycomp:q/undergarden/vertical_wigglewood_planks']
  everyCompVertPlanks.forEach(item => {
    event.hide(item)
  })

  const everyCompStrippedPost = ['everycomp:q/architects_palette/stripped_twisted_post',
  'everycomp:q/ecologics/stripped_coconut_post','everycomp:q/ecologics/stripped_flowering_azalea_post',
  'everycomp:q/ecologics/stripped_walnut_post','everycomp:q/newworld/stripped_fir_post',
  'everycomp:q/wildbackport/stripped_mangrove_post','everycomp:q/undergarden/stripped_grongle_post',
  'everycomp:q/undergarden/stripped_smogstem_post','everycomp:q/undergarden/stripped_wigglewood_post']
  everyCompStrippedPost.forEach(item => {
    event.hide(item)
  })

  const everyCompPost = ['everycomp:q/architects_palette/twisted_post','everycomp:q/ecologics/coconut_post',
  'everycomp:q/ecologics/flowering_azalea_post','everycomp:q/ecologics/walnut_post',
  'everycomp:q/newworld/fir_post','everycomp:q/wildbackport/mangrove_post',
  'everycomp:q/undergarden/grongle_post','everycomp:q/undergarden/smogstem_post',
  'everycomp:q/undergarden/wigglewood_post']
  everyCompPost.forEach(item => {
    event.hide(item)
  })
  const ecWoods = ['/everycomp:.*blossom.*/','/everycomp:.*fairy_ring_mushroom.*/','/everycomp:.*quark/azalea.*/',]
  ecWoods.forEach(item => {
    event.hide(item)
  })

  const mk = ['#create:no_infinite_draining','/mekanism:.*fluid_tank.*/','/mekanism:.*module.*/','/mekanism:.*ingot.*/',
  '/mekanism:.*dust.*/','/mekanism:.*nugget.*/','/mekanism:.*shard.*/','/mekanism:.*clump.*/','/mekanism:.*raw.*/',
  '/mekanism:.*ore.*/','/mekanism:.*factory.*/','/mekanism:.*induction.*/','/mekanism:.*port.*/','/mekanism:.*cube.*/',
  '/mekanism:.*block.*/','/mekanism:.*upgrade.*/','/mekanism:.*installer.*/','/mekanism:.*circuit.*/',
  '/mekanism:.*crystal.*/','/mekanism:.*e.*/','/mekanism:.*g.*/','/mekanism:.*t.*/','/mekanism:.*n.*/',
  '/mekanism:.*tank.*/','/mekanism:.*l.*/','/mekanism:.*u.*/','/mekanism:.*i.*/', 'mekanism:bounding_block']
  mk.forEach(item => {
    event.hide(item)
  })

  const apVertSlab = ['architects_palette:abyssaline_brick_vertical_slab',
  'architects_palette:abyssaline_tile_vertical_slab','architects_palette:entrails_vertical_slab',
  'architects_palette:plating_vertical_slab','architects_palette:myonite_vertical_slab',
  'architects_palette:myonite_brick_vertical_slab','architects_palette:mushy_myonite_brick_vertical_slab',
  'architects_palette:olivestone_brick_vertical_slab','architects_palette:olivestone_tile_vertical_slab',
  'architects_palette:algal_brick_vertical_slab','architects_palette:overgrown_algal_brick_vertical_slab',
  'architects_palette:coal_ore_brick_vertical_slab','architects_palette:lapis_ore_brick_vertical_slab',
  'architects_palette:iron_ore_brick_vertical_slab','architects_palette:emerald_ore_brick_vertical_slab',
  'architects_palette:redstone_ore_brick_vertical_slab','architects_palette:gold_ore_brick_vertical_slab',
  'architects_palette:diamond_ore_brick_vertical_slab','architects_palette:polished_packed_ice_vertical_slab',
  'architects_palette:sunmetal_vertical_slab','architects_palette:osseous_brick_vertical_slab',
  'architects_palette:withered_osseous_brick_vertical_slab','architects_palette:entwine_vertical_slab',
  'architects_palette:polished_glowstone_vertical_slab','architects_palette:gilded_sandstone_vertical_slab',
  'architects_palette:warpstone_vertical_slab','architects_palette:twisted_vertical_slab',
  'architects_palette:basalt_tile_vertical_slab','architects_palette:dripstone_brick_vertical_slab',
  'architects_palette:calcite_brick_vertical_slab','architects_palette:tuff_brick_vertical_slab',
  'architects_palette:nether_brass_vertical_slab','architects_palette:cut_nether_brass_vertical_slab',
  'architects_palette:smooth_nether_brass_vertical_slab','architects_palette:flint_tile_vertical_slab',
  'immersive_weathering:cut_iron_vertical_slab',
  'immersive_weathering:exposed_cut_iron_vertical_slab','immersive_weathering:weathered_cut_iron_vertical_slab',
  'immersive_weathering:rusted_cut_iron_vertical_slab','immersive_weathering:waxed_cut_iron_vertical_slab',
  'immersive_weathering:waxed_exposed_cut_iron_vertical_slab','immersive_weathering:waxed_weathered_cut_iron_vertical_slab',
  'immersive_weathering:waxed_rusted_cut_iron_vertical_slab','immersive_weathering:plate_iron_vertical_slab',
  'immersive_weathering:exposed_plate_iron_vertical_slab','immersive_weathering:weathered_plate_iron_vertical_slab',
  'immersive_weathering:rusted_plate_iron_vertical_slab','immersive_weathering:waxed_plate_iron_vertical_slab',
  'immersive_weathering:waxed_exposed_plate_iron_vertical_slab','immersive_weathering:waxed_weathered_plate_iron_vertical_slab',
  'immersive_weathering:waxed_rusted_plate_iron_vertical_slab','immersive_weathering:mossy_brick_vertical_slab',
  'immersive_weathering:mossy_stone_vertical_slab','immersive_weathering:cracked_brick_vertical_slab',
  'immersive_weathering:cracked_stone_brick_vertical_slab','immersive_weathering:cracked_polished_blackstone_brick_vertical_slab',
  'immersive_weathering:cracked_nether_brick_vertical_slab','immersive_weathering:cracked_deepslate_brick_vertical_slab',
  'immersive_weathering:cracked_end_stone_brick_vertical_slab','immersive_weathering:cracked_prismarine_brick_vertical_slab',
  ]
  apVertSlab.forEach(item => {
    event.hide(item)
  })

  const quarkTough = ['quark:iron_plate','quark:iron_plate_slab','quark:iron_plate_stairs',
  'quark:rusty_iron_plate','quark:rusty_iron_plate_slab','quark:rusty_iron_plate_stairs',
  '/quark:granite_.*/', 'quark:chiseled_granite_bricks','/quark:diorite_.*/', 'quark:chiseled_diorite_bricks',
  '/quark:andesite_*/', 'quark:chiseled_andesite_bricks']
  quarkTough.forEach(item => {
    event.hide(item)
  })

  const iwCrackedEndBricks = ['immersive_weathering:cracked_end_stone_bricks',
  'immersive_weathering:cracked_end_stone_brick_slab','immersive_weathering:cracked_end_stone_brick_stairs',
  'immersive_weathering:cracked_end_stone_brick_wall']
  iwCrackedEndBricks.forEach(item => {
    event.hide(item)
  })

  const iwIronBlocks = ['immersive_weathering:exposed_iron_door','immersive_weathering:weathered_iron_door',
  'immersive_weathering:rusted_iron_door','immersive_weathering:exposed_iron_trapdoor',
  'immersive_weathering:weathered_iron_trapdoor','immersive_weathering:rusted_iron_trapdoor',
  'immersive_weathering:exposed_iron_bars','immersive_weathering:weathered_iron_bars',
  'immersive_weathering:rusted_iron_bars','immersive_weathering:cut_iron','immersive_weathering:exposed_cut_iron',
  'immersive_weathering:weathered_cut_iron','immersive_weathering:rusted_cut_iron','immersive_weathering:waxed_cut_iron',
  'immersive_weathering:waxed_exposed_cut_iron','immersive_weathering:waxed_weathered_cut_iron',
  'immersive_weathering:waxed_rusted_cut_iron','immersive_weathering:plate_iron','immersive_weathering:exposed_plate_iron',
  'immersive_weathering:weathered_plate_iron','immersive_weathering:rusted_plate_iron',
  'immersive_weathering:waxed_plate_iron','immersive_weathering:waxed_exposed_plate_iron',
  'immersive_weathering:waxed_weathered_plate_iron','immersive_weathering:waxed_rusted_plate_iron',
  'immersive_weathering:cut_iron_slab','immersive_weathering:exposed_cut_iron_slab',
  'immersive_weathering:weathered_cut_iron_slab','immersive_weathering:rusted_cut_iron_slab',
  'immersive_weathering:waxed_cut_iron_slab','immersive_weathering:waxed_exposed_cut_iron_slab',
  'immersive_weathering:waxed_weathered_cut_iron_slab','immersive_weathering:waxed_rusted_cut_iron_slab',
  'immersive_weathering:plate_iron_slab','immersive_weathering:exposed_plate_iron_slab',
  'immersive_weathering:weathered_plate_iron_slab','immersive_weathering:rusted_plate_iron_slab',
  'immersive_weathering:waxed_plate_iron_slab','immersive_weathering:waxed_exposed_plate_iron_slab',
  'immersive_weathering:waxed_weathered_plate_iron_slab','immersive_weathering:waxed_rusted_plate_iron_slab',
  'immersive_weathering:cut_iron_stairs','immersive_weathering:exposed_cut_iron_stairs',
  'immersive_weathering:weathered_cut_iron_stairs','immersive_weathering:rusted_cut_iron_stairs',
  'immersive_weathering:waxed_cut_iron_stairs','immersive_weathering:waxed_exposed_cut_iron_stairs',
  'immersive_weathering:waxed_weathered_cut_iron_stairs','immersive_weathering:waxed_rusted_cut_iron_stairs',
  'immersive_weathering:plate_iron_stairs','immersive_weathering:exposed_plate_iron_stairs',
  'immersive_weathering:weathered_plate_iron_stairs','immersive_weathering:rusted_plate_iron_stairs',
  'immersive_weathering:waxed_plate_iron_stairs','immersive_weathering:waxed_exposed_plate_iron_stairs',
  'immersive_weathering:waxed_weathered_plate_iron_stairs','immersive_weathering:waxed_rusted_plate_iron_stairs',
  'immersive_weathering:waxed_iron_door','immersive_weathering:waxed_exposed_iron_door',
  'immersive_weathering:waxed_weathered_iron_door','immersive_weathering:waxed_rusted_iron_door',
  'immersive_weathering:waxed_iron_trapdoor','immersive_weathering:waxed_exposed_iron_trapdoor',
  'immersive_weathering:waxed_weathered_iron_trapdoor','immersive_weathering:waxed_rusted_iron_trapdoor',
  'immersive_weathering:waxed_iron_bars','immersive_weathering:waxed_exposed_iron_bars',
  'immersive_weathering:waxed_weathered_iron_bars','immersive_weathering:waxed_rusted_iron_bars',
  '/immersive_weathering:.*_vertical_slab/','/quark:crab.*/','quark:cooked_crab_leg',
  'immersive_weathering:quark/lavender_blossom_leaf_pile','immersive_weathering:quark/red_blossom_leaf_pile',
  'alexsmobs:spawn_egg_leafcutter_ant','immersive_weathering:quark/orange_blossom_leaf_pile',
  'alexsmobs:leafcutter_anthill','alexsmobs:leafcutter_ant_chamber','alexsmobs:crocodile_egg',
  'immersive_weathering:quark/pink_blossom_leaf_pile','immersive_weathering:quark/yellow_blossom_leaf_pile',
  'alexsmobs:shield_of_the_deep','create:dough','create:wheat_flour'
  ]
  iwIronBlocks.forEach(item => {
    event.hide(item)
  })

  event.hide(Ingredient.of('apotheosis:potion_charm').ignoreNBT())
  event.hide(Item.of('apotheosis:potion_charm').weakNBT())

  event.hide(Ingredient.of('supplementaries:bamboo_spikes_tipped').ignoreNBT())

  const negativePotions = [
  '{Damage:0,Potion:"minecraft:poison"}','{Damage:0,Potion:"minecraft:long_poison"}','{Damage:0,Potion:"minecraft:strong_poison"}',
  '{Damage:0,Potion:"minecraft:slowness"}','{Damage:0,Potion:"minecraft:long_slowness"}','{Damage:0,Potion:"minecraft:strong_slowness"}',
  '{Damage:0,Potion:"minecraft:harming"}','{Damage:0,Potion:"minecraft:strong_harming"}','{Damage:0,Potion:"sullysmod:unluck"}',
  '{Damage:0,Potion:"upgrade_aquatic:insomnia"}','{Damage:0,Potion:"upgrade_aquatic:insomnia_strong"}',
  '{Damage:0,Potion:"minecraft:weakness"}','{Damage:0,Potion:"minecraft:long_weakness"}',,'{Damage:0,Potion:"recallpotion:recall_potion"}',
  '{Damage:0,Potion:"undergarden:glowing"}','{Damage:0,Potion:"undergarden:long_glowing"}',
  '{Damage:0,Potion:"naturalist:glowing"}','{Damage:0,Potion:"naturalist:long_glowing"}',
  '{Damage:0,Potion:"apotheosis:fatigue"}', '{Damage:0,Potion:"apotheosis:long_fatigue"}', '{Damage:0,Potion:"apotheosis:strong_fatigue"}',
  '{Damage:0,Potion:"apotheosis:wither"}', '{Damage:0,Potion:"apotheosis:long_wither"}', '{Damage:0,Potion:"apotheosis:strong_wither"}',
  '{Damage:0,Potion:"apotheosis:sundering"}', '{Damage:0,Potion:"apotheosis:long_sundering"}', '{Damage:0,Potion:"apotheosis:strong_sundering"}',
  '{Damage:0,Potion:"undergarden:brittleness"}', '{Damage:0,Potion:"undergarden:long_brittleness"}', '{Damage:0,Potion:"undergarden:strong_brittleness"}',
  '{Damage:0,Potion:"undergarden:featherweight"}', '{Damage:0,Potion:"undergarden:long_featherweight"}', '{Damage:0,Potion:"undergarden:strong_featherweight"}',
  '{Damage:0,Potion:"bellybutton:itchy"}', '{Damage:0,Potion:"bellybutton:itchy_long"}', '{Damage:0,Potion:"bellybutton:itchy_strong"}',
  '{Damage:0,Potion:"buzzier_bees:unluck"}', '{Damage:0,Potion:"buzzier_bees:long_unluck"}', '{Damage:0,Potion:"buzzier_bees:strong_unluck"}',
  '{Damage:0,Potion:"upgrade_aquatic:repellence"}', '{Damage:0,Potion:"upgrade_aquatic:repellence_strong"}', '{Damage:0,Potion:"upgrade_aquatic:repellence_long"}',
  '{Damage:0,Potion:"upgrade_aquatic:vibing"}', '{Damage:0,Potion:"upgrade_aquatic:vibing_strong"}', '{Damage:0,Potion:"upgrade_aquatic:vibing_long"}',
  '{Damage:0,Potion:"atmospheric:worsening"}', '{Damage:0,Potion:"atmospheric:worsening_strong"}', '{Damage:0,Potion:"atmospheric:worsening_long"}',
  '{Damage:0,Potion:"rottencreatures:freeze"}', '{Damage:0,Potion:"rottencreatures:strong_freeze"}', '{Damage:0,Potion:"rottencreatures:long_freeze"}'
  ]
  const positiveNeutralPotions = [
  '{Damage:0,Potion:"minecraft:night_vision"}','{Damage:0,Potion:"minecraft:long_night_vision"}','{Damage:0,Potion:"minecraft:luck"}',
  '{Damage:0,Potion:"minecraft:invisibility"}','{Damage:0,Potion:"autumnity:extension"}','{Damage:0,Potion:"minecraft:long_invisibility"}',
  '{Damage:0,Potion:"minecraft:slow_falling"}','{Damage:0,Potion:"minecraft:long_slow_falling"}',
  '{Damage:0,Potion:"minecraft:fire_resistance"}','{Damage:0,Potion:"minecraft:long_fire_resistance"}',
  '{Damage:0,Potion:"minecraft:water_breathing"}','{Damage:0,Potion:"minecraft:long_water_breathing"}',
  '{Damage:0,Potion:"minecraft:swiftness"}','{Damage:0,Potion:"minecraft:long_swiftness"}','{Damage:0,Potion:"minecraft:strong_swiftness"}',
  '{Damage:0,Potion:"minecraft:leaping"}','{Damage:0,Potion:"minecraft:long_leaping"}','{Damage:0,Potion:"minecraft:strong_leaping"}',
  '{Damage:0,Potion:"minecraft:regeneration"}','{Damage:0,Potion:"minecraft:long_regeneration"}','{Damage:0,Potion:"minecraft:strong_regeneration"}',
  '{Damage:0,Potion:"minecraft:strength"}','{Damage:0,Potion:"minecraft:long_strength"}','{Damage:0,Potion:"minecraft:strong_strength"}',
  '{Damage:0,Potion:"habitat:blast_endurance"}','{Damage:0,Potion:"habitat:long_blast_endurance"}','{Damage:0,Potion:"habitat:strong_blast_endurance"}',
  '{Damage:0,Potion:"habitat:prickling"}','{Damage:0,Potion:"habitat:long_prickling"}','{Damage:0,Potion:"habitat:strong_prickling"}',
  '{Damage:0,Potion:"alexsmobs:knockback_resistance"}','{Damage:0,Potion:"alexsmobs:long_knockback_resistance"}','{Damage:0,Potion:"alexsmobs:strong_knockback_resistance"}',
  '{Damage:0,Potion:"alexsmobs:lava_vision"}','{Damage:0,Potion:"alexsmobs:long_lava_vision"}','{Damage:0,Potion:"alexsmobs:speed_iii"}',
  '{Damage:0,Potion:"alexsmobs:poison_resistance"}','{Damage:0,Potion:"alexsmobs:long_poison_resistance"}',
  '{Damage:0,Potion:"alexsmobs:bug_pheremones"}','{Damage:0,Potion:"alexsmobs:long_bug_pheremones"}',
  '{Damage:0,Potion:"alexsmobs:clinging"}','{Damage:0,Potion:"alexsmobs:long_clinging"}',
  '{Damage:0,Potion:"alexsmobs:soulsteal"}','{Damage:0,Potion:"alexsmobs:long_soulsteal"}','{Damage:0,Potion:"alexsmobs:strong_soulsteal"}',
  '{Damage:0,Potion:"apotheosis:resistance"}','{Damage:0,Potion:"apotheosis:long_resistance"}','{Damage:0,Potion:"apotheosis:strong_resistance"}',
  '{Damage:0,Potion:"apotheosis:absorption"}','{Damage:0,Potion:"apotheosis:long_absorption"}','{Damage:0,Potion:"apotheosis:strong_absorption"}',
  '{Damage:0,Potion:"apotheosis:haste"}','{Damage:0,Potion:"apotheosis:long_haste"}','{Damage:0,Potion:"apotheosis:strong_haste"}',
  '{Damage:0,Potion:"apotheosis:knowledge"}','{Damage:0,Potion:"apotheosis:long_knowledge"}','{Damage:0,Potion:"apotheosis:strong_knowledge"}',
  '{Damage:0,Potion:"quark:resilience"}','{Damage:0,Potion:"quark:long_resilience"}','{Damage:0,Potion:"quark:strong_resilience"}',
  '{Damage:0,Potion:"undergarden:virulent_resistance"}','{Damage:0,Potion:"undergarden:long_virulent_resistance"}',
  '{Damage:0,Potion:"ecologics:sliding"}','{Damage:0,Potion:"ecologics:long_sliding"}',
  '{Damage:0,Potion:"buzzier_bees:long_luck"}','{Damage:0,Potion:"buzzier_bees:strong_luck"}',
  '{Damage:0,Potion:"environmental:vitality"}','{Damage:0,Potion:"environmental:vitality_strong"}',
  '{Damage:0,Potion:"atmospheric:relief"}','{Damage:0,Potion:"atmospheric:relief_strong"}','{Damage:0,Potion:"atmospheric:relief_long"}'
  ]
  negativePotions.forEach(item => {
    event.hide(Item.of('apotheosis:potion_charm', item))
  })
  positiveNeutralPotions.forEach(item => {
    event.hide(Item.of('apotheosis:potion_charm', item))
  })
  negativePotions.forEach(item => {
    event.hide(Item.of('supplementaries:bamboo_spikes_tipped', item))
  })

})

onEvent('rei.remove.categories', event => {
  event.yeet('mekanism:nutritional_liquifier')
  event.yeet('mekanism:sps_casing')
  event.yeet('mekanism:boiler_casing')
  event.yeet('mekanism:energized_smelter')
  event.yeet('ftbquests:quest')
  event.yeet('minecraft:plugins/wax_scraping')
  event.yeet('minecraft:plugins/waxing')
  event.yeet('minecraft:plugins/pathing')
  event.yeet('minecraft:plugins/oxidizing')
  event.yeet('minecraft:plugins/oxidation_scraping')
  event.yeet('minecraft:plugins/stripping')
  event.yeet('minecraft:plugins/composting')
})