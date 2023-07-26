// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Recipes Happening, Right Here Right Now')

onEvent('recipes', event => {
    // Alex's Mobs
  	event.shaped('alexsmobs:falconry_hood', [
    'FLL',
    'L  ',
    'C  '
  ], {
    F: 'minecraft:feather',
    L: 'minecraft:leather',
    C: 'minecraft:copper_ingot'
  })
	// Antique Atlas
	event.remove({output: 'antiqueatlas:empty_antique_atlas'})
	event.shapeless('antiqueatlas:empty_antique_atlas', ['minecraft:book', 'minecraft:map', 'supplementaries:antique_ink'])

    // Architect's Palette
    event.remove({id: 'architects_palette:nether_brass_blend'})
    event.remove({id: 'architects_palette:entrails_from_rotten_flesh_block_warping'})
    event.remove({id: 'architects_palette:wardstone_blend'})
    event.remove({id: 'architects_palette:oracle_jelly'})
    event.remove({id: 'architects_palette:cerebral_plate'})

	// Boomshot
    event.remove({id: 'boomshot:boomshot'})
    event.remove({id: 'boomshot:shellshot'})
  	event.shapeless('8x boomshot:shellshot', ['2x galosphere:silver_ingot', '2x minecraft:leather', 'minecraft:gunpowder'])
    // Brewin' and Chewin'
    event.remove({id: 'brewinandchewin:fermenting/glittering_grenadine'})
    event.remove({id: 'brewinandchewin:fermenting/withering_dross'})
    // Block Swapper
    event.remove({id: 'blockswapper:diamond_block_swapper'})
    event.remove({output: 'blockswapper:copper_block_swapper'})

    // Buzzier Bees
    event.remove({id: 'buzzier_bees:honey/glazed_porkchop'})
    // Create
    event.remove({id: 'create:crafting/kinetics/controller_rail'})
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
  	event.shaped('6x create:controller_rail', [
    'I I',
    'IDI',
    'IRI'
  ], {
    I: 'minecraft:gold_nugget',
    R: 'create:electron_tube',
    D: 'minecraft:stick'
  })
  	event.shaped('create:empty_blaze_burner', [
    ' T ',
    'TNT',
    ' T '
  ], {
    N: 'minecraft:netherrack',
    T: 'dustrial_decor:industrial_iron_billet'
  })

    // Clayworks
    event.remove({id: 'clayworks:kiln'})

    // 'Dustrial Decor
    event.remove({id: 'dustrial_decor:industrial_iron_block'})
    event.remove({id: 'dustrial_decor:anchor'})
    event.remove({id: 'dustrial_decor:hook'})
    event.remove({id: 'dustrial_decor:cardboard'})
  event.shaped('4x dustrial_decor:industrial_iron_block', [
    'BB',
    'BB'
  ], {
    B: 'dustrial_decor:industrial_iron_billet'
  })
  event.shaped('dustrial_decor:anchor', [
    ' A ',
    ' B ',
    'BBB'
  ], {
    B: 'dustrial_decor:industrial_iron_billet',
    A: 'dustrial_decor:large_chain'
  })
  event.shaped('dustrial_decor:hook', [
    ' A ',
    ' B ',
    'B  '
  ], {
    B: 'dustrial_decor:industrial_iron_billet',
    A: 'dustrial_decor:large_chain'
  })
  event.shaped('12x dustrial_decor:large_chain', [
    ' B ',
    ' A ',
    ' B '
  ], {
    B: 'dustrial_decor:industrial_iron_billet',
    A: 'dustrial_decor:industrial_iron_block'
  })
    // Ecologics
  event.remove({id: 'ecologics:tropical_stew'})
  event.remove({id: 'ecologics:beetroot_soup_from_coconut_husk'})
  event.remove({id: 'ecologics:mushroom_stew_from_coconut_husk'})
  event.remove({id: 'ecologics:rabbit_stew_from_brown_mushroom_and_coconut_husk'})
  event.remove({id: 'ecologics:rabbit_stew_from_red_mushroom_and_coconut_husk'})
  	event.shaped('ecologics:sandcastle', [
    ' T ',
    'SBS',
    'SSS'
  ], {
    T: 'minecraft:stick',
    S: 'immersive_weathering:sand_layer_block',
    B: 'ecologics:seashell'
  })
    // Farmer's Delight
    event.remove({id: 'farmersdelight:organic_compost_from_tree_bark'})
    event.remove({id: 'farmersdelight:organic_compost_from_rotten_flesh'})
    event.remove({id: 'farmersdelight:pie_crust'})
    // Galosphere
    event.remove({id: 'galosphere:smooth_amethyst'})
    event.remove({id: 'galosphere:smooth_allurite'})
    event.remove({id: 'galosphere:smooth_lumiere'})
    event.smelting('galosphere:smooth_amethyst', 'minecraft:amethyst_block')
    event.smelting('galosphere:smooth_allurite', 'galosphere:allurite_block')
    event.smelting('galosphere:smooth_lumiere', 'galosphere:lumiere_block')
    event.remove({id: 'galosphere:combustion_table'})
  	event.shaped('galosphere:combustion_table', [
    'TTT',
    'SBS',
    'S S'
  ], {
    T: 'galosphere:silver_ingot',
    S: '#minecraft:planks',
    B: 'minecraft:gunpowder'
  })
    // Guns Without Roses
  event.remove({id: 'gunswithoutroses:hunger_bullet'})
  event.shaped('gunswithoutroses:hunger_bullet', [
    'TDT',
    'ABA',
    'ADA'
  ], {
    A: 'minecraft:leather',
    B: 'undergarden:utherium_crystal',
    D: 'minecraft:netherite_scrap',
    T: 'undergarden:brute_tusk'
  })

    // Haunted Harvest
    event.remove({id: 'hauntedharvest:grim_apple'})

    // Heartstone
    event.remove({id: 'heartstone:heartstone'})
    event.shaped('2x heartstone:heartstone', [
    'H H',
    'HBH',
    ' H '
    ], {
    B: 'alexsmobs:soul_heart',
    H: 'create:polished_rose_quartz'
    })
    // Immersive Weathering
    event.remove({output: 'immersive_weathering:flower_crown'})
    event.remove({output: 'immersive_weathering:cracked_mud'})
    event.remove({id: 'immersive_weathering:fluvisol'})
    event.remove({id: 'immersive_weathering:permafrost'})
    event.remove({id: 'immersive_weathering:vertisol'})
    event.remove({id: 'immersive_weathering:cryosol'})
    event.remove({id: 'immersive_weathering:tuff'})
    event.smelting('immersive_weathering:cracked_mud', 'wildbackport:packed_mud')
    event.shaped('immersive_weathering:flower_crown', [
    'HHH',
    'H H',
    '   '
    ], {
    H: 'ecologics:azalea_flower'
    })
    // Incubation
    event.remove({output: 'incubation:fried_egg'})
  	event.shaped('incubation:twig_nest', [
    'T T',
    'SSS',
    '   '
  ], {
    T: 'twigs:twig',
    S: 'minecraft:stick'
  })
    // Literal Sky Block
    event.remove({mod: 'literalskyblock'})
  	event.shaped('8x literalskyblock:sky_block', [
    'GLG',
    'GBG',
    'GLG'
  ], {
    G: 'minecraft:glass',
    L: 'galosphere:lumiere_shard',
    B: 'quark:bottled_cloud'
  })
  event.shaped('8x literalskyblock:void_block', [
    'GLG',
    'GEG',
    'GLG'
  ], {
    G: 'minecraft:glass',
    L: 'minecraft:amethyst_shard',
    E: 'minecraft:end_stone'
  })
    // Mekanism
  	event.shaped('mekanism:cardboard_box', [
    'CCC',
    'C C',
    'CCC'
  ], {
    C: 'dustrial_decor:cardboard'
  })
    // Locksmith
    event.remove({id: 'locksmith:locksmithing_table'})
    event.remove({id: 'locksmith:lockpick'})
  	event.shaped('locksmith:locksmithing_table', [
    'TTT',
    'SBS',
    'S S'
  ], {
    T: 'minecraft:iron_nugget',
    S: '#minecraft:planks',
    B: 'dustrial_decor:industrial_iron_billet'
  })
  	event.shaped('locksmith:lockpick', [
    'NZI',
    'Z  ',
    'I  '
  ], {
    N: 'minecraft:netherite_ingot',
    Z: 'create:zinc_ingot',
    I: 'minecraft:iron_ingot'
  })

    // MmmMmmMmmMmmMmm
    event.remove({mod: 'dummmmmmy'})
  	event.shaped('dummmmmmy:target_dummy_placer', [
    ' H ',
    'SSS',
    ' L '
  ], {
    H: 'minecraft:hay_block',
    S: 'minecraft:stick',
    L: '#minecraft:logs'
  })

	// Mob Catcher
	event.remove({mod: 'mobcatcher'})
	event.shapeless('mobcatcher:net', ['2x architects_palette:nether_brass_ingot', '2x dustrial_decor:industrial_iron_billet',
	'minecraft:gunpowder'])

    event.shaped('mobcatcher:net_launcher', [
    'BT ',
    'TNT',
    ' SN'
  ], {
    B: 'architects_palette:nether_brass_ingot',
    T: 'dustrial_decor:industrial_iron_billet',
    N: 'minecraft:netherite_ingot',
    S: 'minecraft:stick'
  })
    // Nature's Compass
    event.remove({id: 'naturescompass:natures_compass'})
    // Nether's Delight
    event.remove({id: "nethersdelight:soul_compost_from_hoglin_hide"})
    event.remove({id: "nethersdelight:soul_compost_from_warped_roots"})
    // Paraglider
    event.remove({id: "paraglider:cosmetic/deku_leaf"})
    event.remove({id: "paraglider:cosmetic/paraglider"})
    // Quark
    event.remove({id: 'quark:abacus'})
    event.remove({id: 'quark:trowel'})
        event.shaped('4x quark:rainbow_rune', [
        ' T ',
        'TET',
        ' T '
      ], {
        E: 'alexsmobs:rainbow_jelly',
        T: 'quark:blank_rune'
      })
        event.shaped('quark:trowel', [
        'P  ',
        ' DD'
      ], {
        P: 'minecraft:stick',
        D: 'minecraft:iron_ingot'
      })
        event.shaped('quark:abacus', [
        'PSP',
        'PCP',
        'PSP'
      ], {
        P: '#minecraft:planks',
        S: 'twigs:pebble',
        C: 'minecraft:stick'
      })
    // Savage and Ravage
    event.remove({id: 'savage_and_ravage:blast_proof_plating'})
    // Snowy Spirit
    event.remove({id: 'snowyspirit:snow_globe'})
    event.remove({id: 'snowyspirit:eggnog'})
    event.shaped('snowyspirit:snow_globe', [
    'T',
    'B'
  ], {
    B: 'minecraft:smooth_stone_slab',
    T: 'immersive_weathering:frosty_glass'
  })
    // Supplementaries
    event.remove({id: 'supplementaries:cage'})
    event.remove({id: 'supplementaries:goblet'})
    event.shapeless('supplementaries:soap', ['immersive_weathering:tallow', 'immersive_weathering:ash_layer_block'])
    event.shaped('supplementaries:cage', [
    'TTT',
    'B B',
    'SSS'
  ], {
    B: 'minecraft:iron_bars',
    T: 'dustrial_decor:industrial_iron_billet',
    S: '#minecraft:wooden_slabs'
  })
    event.shaped('supplementaries:goblet', [
    'N N',
    'NSN',
    ' N '
  ], {
    N: 'galosphere:silver_nugget',
    S: 'galosphere:silver_ingot'
  })
    event.shaped('supplementaries:cage', [
    'T',
    'B',
    'T'
  ], {
    B: 'minecraft:iron_bars',
    T: 'dustrial_decor:industrial_iron_billet'
  })
    // Twigs
  event.remove({id: 'twigs:misc/rocky_dirt'})

    // The Undergarden
  event.remove({id: 'undergarden:bloody_stew'})
  event.remove({id: 'undergarden:inky_stew'})
  event.remove({id: 'undergarden:indigo_stew'})
  event.remove({id: 'undergarden:veiled_stew'})
    // Vanity
  event.remove({id: "vanity:styling_table"})
  event.shaped('vanity:styling_table', [
    'TTT',
    'ABA',
    'A A'
  ], {
    A: '#minecraft:planks',
    B: '#forge:dyes',
    T: 'minecraft:leather'
  })
  event.shapeless('vanity:concept_art', ['2x farmersdelight:canvas', '2x #forge:dyes'])

	// Vanilla Changes
	event.remove({id: 'minecraft:map'})
	event.remove({id: 'minecraft:shears'})
	event.remove({id: 'minecraft:grindstone'})
	event.remove({id: 'minecraft:smithing_table'})
	event.remove({id: 'minecraft:fletching_table'})
	event.remove({id: 'minecraft:cartography_table'})
	event.remove({id: 'minecraft:chain'})
	event.remove({id: 'minecraft:end_portal_frame'})
	event.remove({id: 'minecraft:lodestone'})
	event.remove({id: 'minecraft:compass'})
	event.remove({id: 'minecraft:coarse_dirt'})
	event.remove({id: 'minecraft:beetroot_soup'})
	event.remove({id: 'minecraft:mushroom_stew'})
	event.remove({id: 'minecraft:rabbit_stew'})
	event.remove({id: 'minecraft:rail'})
	event.remove({id: 'minecraft:prismarine'})
	event.remove({id: 'minecraft:prismarine_bricks'})
	event.remove({id: 'minecraft:dark_prismarine'})
	event.remove({id: 'minecraft:powered_rail'})
	event.remove({id: 'minecraft:detector_rail'})
	event.remove({id: 'minecraft:activator_rail'})
  	event.shaped('minecraft:shears', [
    ' Z',
    'Z '
  ], {
    Z: 'create:zinc_ingot'
  })
  	event.shaped('4x minecraft:prismarine', [
    'ZZ',
    'ZZ'
  ], {
    Z: 'minecraft:prismarine_shard'
  })
  	event.shaped('4x minecraft:prismarine_bricks', [
    'ZZ',
    'ZZ'
  ], {
    Z: 'minecraft:prismarine'
  })
  	event.shaped('16x minecraft:rail', [
    'I I',
    'IDI',
    'I I'
  ], {
    I: 'minecraft:iron_nugget',
    D: 'minecraft:stick'
  })
  	event.shaped('minecraft:map', [
    ' R ',
    'RPR',
    ' R '
  ], {
    R: 'minecraft:redstone',
    P: 'minecraft:paper'
  })
  	event.shaped('minecraft:compass', [
    ' R ',
    'RPR',
    ' R '
  ], {
    R: 'create:iron_sheet',
    P: 'minecraft:redstone'
  })
  	event.shaped('minecraft:lodestone', [
    'DRD',
    'RPR',
    'DRD'
  ], {
    R: 'minecraft:chiseled_stone_bricks',
    D: 'minecraft:cobbled_deepslate',
    P: 'minecraft:redstone'
  })
  	event.shaped('6x minecraft:powered_rail', [
    'I I',
    'IDI',
    'IRI'
  ], {
    I: 'minecraft:gold_nugget',
    R: 'minecraft:redstone',
    D: 'minecraft:stick'
  })
  	event.shaped('6x minecraft:detector_rail', [
    'I I',
    'IDI',
    'IRI'
  ], {
    I: 'minecraft:iron_nugget',
    R: 'minecraft:redstone',
    D: 'minecraft:stone_pressure_plate'
  })
  	event.shaped('6x minecraft:activator_rail', [
    'IRI',
    'IDI',
    'IRI'
  ], {
    I: 'minecraft:iron_nugget',
    R: 'minecraft:stick',
    D: 'minecraft:redstone_torch'
  })
    event.shaped('minecraft:grindstone', [
    'SLS',
    'PZP'
  ], {
    Z: 'create:zinc_ingot',
    P: '#minecraft:planks',
    S: 'minecraft:stick',
    L: 'minecraft:stone_slab'
  })
  event.shaped('minecraft:saddle', [
    ' L ',
    'LLL',
    'I I'
  ], {
    L: 'minecraft:leather',
    I: 'create:copper_nugget'
  })
  event.shaped('minecraft:chain', [
    'I  ',
    'L  ',
    'I  '
  ], {
    I: 'minecraft:iron_nugget',
    L: 'dustrial_decor:industrial_iron_billet'
  })
  event.shaped('minecraft:end_portal_frame', [
    'A A',
    'ABA',
    'EEE'
  ], {
    A: 'minecraft:dark_prismarine',
    B: 'minecraft:obsidian',
    E: 'minecraft:end_stone'
  })
  event.shaped('minecraft:smithing_table', [
    'TTT',
    'ABA',
    'A A'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:iron_ingot',
    T: 'dustrial_decor:industrial_iron_billet'
  })
  event.shaped('minecraft:fletching_table', [
    'TTT',
    'ABA',
    'A A'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:feather',
    T: 'minecraft:flint'
  })
  event.shaped('minecraft:cartography_table', [
    'TTT',
    'ABA',
    'A A'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:compass',
    T: 'minecraft:paper'
  })
  event.shaped('minecraft:name_tag', [
  ' R',
  'L '
  ], {
  R: 'minecraft:string',
  L: 'labels:label'
  })
  event.shaped('minecraft:item_frame', [
  'SSS',
  'SLS',
  'SSS'
  ], {
  S: 'minecraft:stick',
  L: 'minecraft:leather'
  })
  event.shapeless('minecraft:slime_ball', ['farmersdelight:wheat_dough', '#forge:dyes/lime'])
  event.shapeless('minecraft:glow_item_frame', ['minecraft:item_frame', 'minecraft:glowstone_dust'])

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})