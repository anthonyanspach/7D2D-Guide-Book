{/*   */}
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import filter from 'lodash.filter';

import { styles } from '../assets/styles/Styles';

const DATA = [
  {
    id: 1,
    title: 'Baseball Cap',
    navComp: 'BaseballCapItem',
  },
  {
    id: 2,
    title: 'Cowboy Hat',
    navComp: 'CowboyHatItem',
  },
  {
    id: 3,
    title: 'Press Boy Hat',
    navComp: 'PressBoyHatItem',
  },
  {
    id: 4,
    title: 'Skull Cap',
    navComp: 'SkullCapItem',
  },
  {
    id: 5,
    title: 'Lucky Goggles',
    navComp: 'LuckyGogglesItem'
  },
  {
    id: 6,
    title: 'Ski Goggles',
    navComp: 'SkiGogglesItem'
  },
  {
    id: 7,
    title: 'Nerdy Glasses',
    navComp: 'NerdyGlassesItem',
  },
  {
    id: 8,
    title: 'Night Vision Goggles',
    navComp: 'NightVisionGogglesItem',
  },
  {
    id: 9,
    title: 'Shades',
    navComp: 'ShadesItem',
  },
  {
    id: 10,
    title: 'Tough Guy Sunglasses',
    navComp: 'ToughGuySunglassesItem',
  },
  {
    id: 11,
    title: 'Bandana',
    navComp: 'BandanaItem',
  },
  {
    id: 12,
    title: 'Cigar',
    navComp: 'CigarItem',
  },
  {
    id: 13,
    title: 'Leather Poncho',
    navComp: 'LeatherPonchoItem',
  },
  {
    id: 14,
    title: 'College Jacket',
    navComp: 'CollegeJacketItem',
  },
  {
    id: 15,
    title: 'Jacket',
    nacComp: 'JacketItem',
  },
  {
    id: 16,
    title: 'Leather Duster',
    navComp: 'LeatherDusterItem',
  },
  {
    id: 17,
    title: 'Puffer Coat',
    navComp: 'PufferCoatItem',
  },
  {
    id: 18,
    title: 'Suit Jacket',
    navComp: 'SuitJacketItem',
  },
  {
    id: 19,
    title: 'BDU Top',
    navComp: 'BDUTopItem',
  },
  {
    id: 20,
    title: 'Hazmat Shirt',
    navComp: 'HazmatShirtItem',
  },
  {
    id: 21,
    title: 'Hooded Sweatshirt',
    navComp: 'HoodedSweatshirtItem',
  },
  {
    id: 22,
    title: 'Flannel Shirt',
    navComp: 'FlannelShirtItem',
  },
  {
    id: 23,
    title: 'Plant Fiber Shirt',
    navComp: 'PlantFiberShirtItem',
  },
  {
    id: 24,
    title: 'Shirt',
    navComp: 'ShirtItem',
  },
  {
    id: 25,
    title: 'Sweatshirt',
    navComp: 'SweatshirtItem',
  },
  {
    id: 26,
    title: 'Tank Top',
    navComp: 'TankTopItem',
  },
  {
    id: 27,
    title: 'T Shirt',
    navComp: 'TShirtItem',
  },
  {
    id: 28,
    title: 'BDU Bottoms',
    navComp: 'BDUBottomsItem',
  },
  {
    id: 29,
    title: 'Denim Pants',
    navComp: 'DenimPantsItem',
  },
  {
    id: 30,
    title: 'Shorts',
    navComp: 'ShortsItem',
  },
  {
    id: 31,
    title: 'Overalls',
    navComp: 'OverallsItem',
  },
  {
    id: 32,
    title: 'Skirt',
    navComp: 'SkirtItem',
  },
  {
    id: 33,
    title: 'Suit Pants',
    navComp: 'SuitPantsItem',
  },
  {
    id: 34,
    title: 'Hi Pro Running Shoes',
    navComp: 'HiProRunningShoesItem',
  },
  {
    id: 35,
    title: 'Cowboy Boots',
    navComp: 'CowboyBootsItem',
  },
  {
    id: 36,
    title: 'Dress Shoes',
    navComp: 'DressShoesItem',
  },
  {
    id: 37,
    title: 'Gothic Boots',
    navComp: 'GothicBootsItem',
  },
  {
    id: 38,
    title: 'Running Shoes',
    navComp: 'RunningShoesItem',
  },
  {
    id: 39,
    title: 'Worn Boots',
    navComp: 'WornBootsItem',
  },
  {
    id: 40,
    title: 'Plant Fiber Boots',
    navComp: 'PlantFiberBootsItem',
  },
  {
    id: 41,
    title: 'Plant Fiber Gloves',
    NavComp: 'PlantFiberGlovesItem',
  },
  {
    id: 42,
    title: 'Plant Fiber Hat',
    navComp: 'PlantFiberHatItem',
  },
  {
    id: 43,
    title: 'Plant Fiber Hood',
    navComp: 'PlantFiberHoodItem',
  },
  {
    id: 44,
    title: 'Plant Fiber Pants',
    navComp: 'PlantFiberPantsItem',
  },
  {
    id: 45,
    title: 'Plant Fiber Shirt',
    navComp: 'PlantFiberShirtItem',
  },
  {
    id: 46,
    title: 'Padded Gloves',
    navComp: 'PaddedGlovesItem',
  },
  {
    id: 47,
    title: 'Padded Hood',
    navComp: 'PaddedHoodItem',
  },
  {
    id: 48,
    title: 'Padded Chest Armor',
    navComp: 'PaddedChestArmorItem',
  },
  {
    id: 49,
    title: 'Padded Leg Armor',
    navComp: 'PaddedLegArmorItem',
  },
  {
    id: 50,
    title: 'Padded Boots',
    navComp: 'PaddedBootsItem',
  },
  {
    id: 51,
    title: 'Leather Boots',
    navComp: 'LeatherBootsItem',
  },
  {
    id: 52,
    title: 'Leather Gloves',
    navComp: 'LeatherGlovesItem',
  },
  {
    id: 53,
    title: 'Leather Hood',
    navComp: 'LeatherHoodItem',
  },
  {
    id: 54,
    title: 'Leather Chest Armor',
    navComp: 'LeatherChestArmorItem',
  },
  {
    id: 55,
    title: 'Leather Leg Armor',
    navComp: 'LeatherLegArmorItem',
  },
  {
    id: 56,
    title: 'Military Boots',
    navComp: 'MilitaryBootsItem',
  },
  {
    id: 57,
    title: 'Military Stealth Boots',
    navComp: 'MilitaryStealthBootsItem',
  },
  {
    id: 58,
    title: 'Military Gloves',
    navComp: 'MilitaryGlovesItem',
  },
  {
    id: 59,
    title: 'Military Helmet',
    navComp: 'MilitaryHelmetItem',
  },
  {
    id: 60,
    title: 'Military Leg Armor',
    navComp: 'MilitaryLegArmorItem',
  },
  {
    id: 61,
    title: 'Military Vest',
    navComp: 'MilitaryVestItem',
  },
  {
    id: 62,
    title: 'Mining Helmet',
    navComp: 'MiningHelmetItem',
  },
  {
    id: 63,
    title: 'Scrap Boots',
    navComp: 'ScrapBootsItem',
  },
  {
    id: 64,
    title: 'Scrap Chest Armor',
    navComp: 'ScrapChestArmorItem',
  },
  {
    id: 65,
    title: 'Scrap Gloves',
    navComp: 'ScrapGlovesItem',
  },
  {
    id: 66,
    title: 'Scrap Helmet',
    navComp: 'ScrapHelmetItem',
  },
  {
    id: 67,
    title: 'Scrap Leg Armor',
    navComp: 'ScrapLegArmorItem',
  },
  {
    id: 68,
    title: 'Iron Boots',
    navComp: 'IronBootsItem',
  },
  {
    id: 69,
    title: 'Iron Chest Armor',
    navComp: 'IronChestArmorItem',
  },
  {
    id: 70,
    title: 'Iron Gloves',
    navComp: 'IronGlovesItem',
  },
  {
    id: 71,
    title: 'Iron Helmet',
    navComp: 'IronHelmetItem',
  },
  {
    id: 72,
    title: 'Iron Leg Armor',
    navComp: 'IronLegArmorItem',
  },
  {
    id: 73,
    title: 'Steel Boots',
    navComp: 'SteelBootsItem',
  },
  {
    id: 74,
    title: 'Steel Chest Armor',
    navComp: 'SteelChestArmorItem',
  },
  {
    id: 75,
    title: 'Steel Gloves',
    navComp: 'SteelGlovesItem',
  },
  {
    id: 76,
    title: 'Steel Helmet',
    navComp: 'SteelHelmetItem',
  },
  {
    id: 77,
    title: 'Steel Leg Armor',
    navComp: 'SteelLegArmorItem',
  },
  {
    id: 78,
    title: 'Hazmat Boots',
    navComp: 'HazmatBootsItem',
  },
  {
    id: 79,
    title: 'Hazmat Gloves',
    navComp: 'HazmatGlovesItem',
  },
  {
    id: 80,
    title: 'Hazmat Mask',
    navComp: 'HazmatMaskItem',
  },
  {
    id: 81,
    title: 'Hazmat Pants',
    navComp: 'HazmatPantsItem',
  },
  {
    id: 82,
    title: 'Ghillie Suit Hood',
    navComp: 'GhillieSuitHoodItem',
  },
  {
    id: 83,
    title: 'Ghillie Suit Jacket',
    navComp: 'GhillieSuitJacketItem',
  },
  {
    id: 84,
    title: 'Ghillie Suit Pants',
    navComp: 'GhillieSuitPantsItem',
  },
  {
    id: 85,
    title: 'Stone Axe',
    navComp: 'StoneAxeItem',
  },
  {
    id: 86,
    title: 'Tazas Stone Axe',
    navComp: 'TazaStoneAxeItem',
  },
  {
    id: 87,
    title: 'Claw Hammer',
    navComp: 'ClawHammerItem',
  },
  {
    id: 88,
    title: 'Nail Gun',
    navComp: 'NailGunItem',
  },
  {
    id: 89,
    title: 'Bone Knife',
    navComp: 'BoneKnifeItem',
  },
  {
    id: 90,
    title: 'Candy Cane Knife',
    navComp: 'CandyCaneKnifeItem',
  },
  {
    id: 91,
    title: 'Hunting Knife',
    navComp: 'HuntingKnifeItem',
  },
  {
    id: 92,
    title: 'Machete',
    navComp: 'MacheteItem',
  },
  {
    id: 93,
    title: 'Wrench',
    navComp: 'WrenchItem',
  },
  {
    id: 94,
    title: 'Ratchet',
    navComp: 'RatchetItem',
  },
  {
    id: 95,
    title: 'Impact Driver',
    navComp: 'ImpactDriverItem',
  },
  {
    id: 96,
    title: 'Stone Shovel',
    navComp: 'StoneShovelItem',
  },
  {
    id: 97,
    title: 'Iron Shovel',
    navComp:'IronShovelItem',
  },
  {
    id: 98,
    title: 'Iron Pickaxe',
    navComp: 'IronPickaxeItem',
  },
  {
    id: 99,
    title: 'Steel Shovel',
    navComp: 'SteelShovelItem',
  },
  {
    id: 100,
    title: 'Steel Pickaxe',
    navComp: 'SteelPickaxeItem',
  },
  {
    id: 101,
    title: 'Auger',
    navComp: 'AugerItem',
  },
  {
    id: 102,
    title: 'Iron Fireaxe',
    navComp: 'IronFireaxeItem',
  },
  {
    id: 103,
    title: 'Steel Axe',
    navComp: 'SteelAxeItem',
  },
  {
    id: 104,
    title: 'Chainsaw',
    navComp: 'ChainsawItem',
  },
  {
    id: 105,
    title: 'Bucket',
    navComp: 'BucketItem',
  },
  {
    id: 106,
    title: 'Paint Brush',
    navComp: 'PaintBrushItem',
  },
  {
    id: 107,
    title: 'Lickpick',
    navComp: 'LockpickItem',
  },
  {
    id: 108,
    title: 'Wire Tool',
    navComp: 'WireToolItem',
  },
  {
    id: 109,
    title: 'Campfire',
    navComp: 'CampfireItem',
  },
  {
    id: 110,
    title: 'Forge',
    navComp: 'ForgeItem',
  },
  {
    id: 111,
    title: 'Workbench',
    navComp: 'WorkbenchItem',
  },
  {
    id: 112,
    title: 'Cement Mixer',
    navComp: 'CementMixerItem',
  },
  {
    id: 113,
    title: 'Chemistry Station',
    navComp: 'ChemistryStationItem',
  },
  {
    id: 114,
    title: 'Dew Collector',
    navComp: 'DewCollectorItem',
  },
  {
    id: 115,
    title: 'Wood Window',
    navComp: 'WoodWindowItem',
  },
  {
    id: 116,
    title: 'Asphalt',
    navComp: 'AsphaltItem',
  },
  {
    id: 117,
    title: 'Brink Stairs',
    navComp: 'BrinkStairsItem',
  },
  {
    id: 118,
    title: 'Cobblestone Stairs',
    navComp: 'CobblestoneStairsItem',
  },
  {
    id: 119,
    title: 'Concrete Stairs',
    navComp: 'ConcreteStairsItem',
  },
  {
    id: 120,
    title: 'Flagstone Stairs',
    navComp: 'FlagstoneStairsItem',
  },
  {
    id: 121,
    title: 'Reinforced Scrap Iron Stairs',
    navComp: 'ReinforcedScrapIronStairsItem',
  },
  {
    id: 122,
    title: 'Steel Stairs',
    navComp: 'SteelStairsItem',
  },
  {
    id: 123,
    title: 'Wooden Stairs',
    navComp: 'WoodenStairsItem',
  },
  {
    id: 124,
    title: 'Plywood',
    navComp: 'PlywoodItem',
  },
  {
    id: 125,
    title: 'Basic Light Bulb',
    navComp: 'BasicLightBulbItem',
  },
  {
    id: 126,
    title: 'Burning Barrel',
    navComp: 'BurningBarrelItem',
  },
  {
    id: 127,
    title: 'Candle',
    navComp: 'CandleItem',
  },
  {
    id: 128,
    title: 'Old Outdoor Light',
    navComp: 'OldOutdoorLightItem',
  },
  {
    id: 129,
    title: 'Iron Hatch',
    navComp: 'IronHatchItem',
  },
  {
    id: 130,
    title: 'Iron Hatch V2',
    navComp: 'IronHatchV2Item',
  },
  {
    id: 131,
    title: 'Iron Hatch V3',
    navComp: 'IronHatchV3Item',
  },
  {
    id: 132,
    title: 'Steel Hatch',
    navComp: 'SteelHatchItem',
  },
  {
    id: 133,
    title: 'Steel Hatch Powered',
    navComp: 'SteelHatchPoweredItem',
  },
  {
    id: 134,
    title: 'Vault Hatch V2',
    navComp: 'VaultHatchV2Item',
  },
  {
    id: 135,
    title: 'Vault Hatch V3',
    navComp: 'VaultHatchV3Item',
  },
  {
    id: 136,
    title: 'Wooden Hatch',
    navComp: 'WoodenHatchItem',
  },
  {
    id: 137,
    title: 'Wooden Hatch V2',
    navComp: 'WoodenHatchV2Item',
  },
  {
    id: 138,
    title: 'Wooden Hatch V3',
    navComp: 'WoodenHatchV3Item',
  },
  {
    id: 139,
    title: 'Air Conditioner',
    navComp: 'AirConditionerItem',
  },
  {
    id: 140,
    title: 'Bedroll',
    navComp: 'BedrollItem',
  },
  {
    id: 141,
    title: 'Brass Faucet',
    navComp: 'BrassFaucetItem',
  },
  {
    id: 142,
    title: 'Washing Machine',
    navComp: 'WashingMachineItem',
  },
  {
    id: 143,
    title: 'Wood Frame',
    navComp: 'WoodFrameItem',
  },
  {
    id: 144,
    title: 'Wood Fence',
    navComp: 'WoodFenceItem',
  },
  {
    id: 145,
    title: 'Garage Door Metal',
    navComp: 'GarageDoorMetalItem',
  },
  {
    id: 146,
    title: 'Garage Door Metal V2',
    navComp: 'GarageDoorMetalV2Item',
  },
  {
    id: 147,
    title: 'Garage Door Metal V3',
    navComp: 'GarageDoorMetalV3Item',
  },
  {
    id: 148,
    title: 'Iron Door',
    navComp: 'IronDoorItem',
  },
  {
    id: 149,
    title: 'Iron Door V2',
    navComp: 'IronDoorV2Item',
  },
  {
    id: 150,
    title: 'Iron Door V3',
    navComp: 'IronDoorV3Item',
  },
  {
    id: 151,
    title: 'Jail Door',
    navComp: 'JailDoorItem',
  },
  {
    id: 152,
    title: 'Metal Reinforced Wooden Door',
    navComp: 'MetalReinforcedWoodenDoorItem',
  },
  {
    id: 153,
    title: 'Reinforced Drawbridge',
    navComp: 'ReinforcedDrawbridgeItem',
  },
  {
    id: 154,
    title: 'Reinforced Drawbridge Powered',
    navComp: 'ReinforcedDrawbridgePoweredItem',
  },
  {
    id: 155,
    title: 'Reinforced Secure Wooden Door',
    navComp: 'ReinforcedSecureWoodenDoorItem',
  },
  {
    id: 156,
    title: 'Vault Door',
    navComp: 'VaultDoorItem',
  },
  {
    id: 157,
    title: 'Vault Door V2',
    navComp: 'VaultDoorV2Item',
  },
  {
    id: 158,
    title: 'Vault Door V3',
    navComp: 'VaultDoorV3Item',
  },
  {
    id: 159,
    title: 'Wood Door',
    navComp: 'WoodDoorItem',
  },
  {
    id: 160,
    title: 'Cupboard',
    navComp: 'CupboardItem',
  },
  {
    id: 161,
    title: 'Green Drawer',
    navComp: 'GreenDrawerItem',
  },
  {
    id: 162,
    title: 'Gun Safe',
    navComp: 'GunSafeItem',
  },
  {
    id: 163,
    title: 'Mail Box',
    navComp: 'MailBoxItem',
  },
  {
    id: 164,
    title: 'Mail Drop Box',
    navComp: 'MailDropBoxItem',
  },
  {
    id: 165,
    title: 'Microwave',
    navComp: 'MicrowaveItem',
  },
  {
    id: 166,
    title: 'Secure Storage Chest',
    navComp: 'SecureStorageChestItem',
  },
  {
    id: 167,
    title: 'Storage Box',
    navComp: 'StorageBoxItem',
  },
  {
    id: 168,
    title: 'Trash Can',
    navComp: 'TrashCanItem',
  },
  {
    id: 169,
    title: 'Wooden Chest',
    navComp: 'WoodenChestItem',
  },
  {
    id: 170,
    title: 'Awning Red Block',
    navComp: 'AwningRedBocks',
  },
  {
    id: 171,
    title: 'Bricks Block',
    navComp: 'BrickBlocks',
  },
  {
    id: 172,
    title: 'Clay Roof Block',
    navComp: 'ClayRoofBlocks',
  },
  {
    id: 173,
    title: 'Cobblestone Block',
    navComp: 'CobblestoneBlocks',
  },
  {
    id: 174,
    title: 'Concrete Block',
    navComp: 'ConcreteBlocks',
  },
  {
    id: 175,
    title: 'Concrete Form Block',
    navComp: 'ConcreteFormBlocks',
  },
  {
    id: 176,
    title: 'Land Claim Block',
    navComp: 'LandClaimBlocks',
  },
  {
    id: 177,
    title: 'Metal Reinforced Wood Block',
    navComp: 'MetalReinforcedWoodBlocks',
  },
  {
    id: 178,
    title: 'Metal Trussing Block',
    navComp: 'MetalTrussing',
  },
  {
    id: 179,
    title: 'Poured Reinforced Concrete Block',
    navComp: 'PouredReinforcedConcreteBlocks',
  },
  {
    id: 180,
    title: 'Reinforced Iron Block',
    navComp: 'ReinforcedIronBlocks',
  },
  {
    id: 181,
    title: 'Stainless Steel Block',
    navComp: 'StainlessSteelBlocks',
  },
  {
    id: 182,
    title: 'Steel Block',
    navComp: 'SteelBlocks',
  },
  {
    id: 183,
    title: 'Wood Block',
    navComp: 'WoodBlocks',
  },
  {
    id: 184,
    title: 'Wooden Shingles Block',
    navComp: 'WoodenShinglesBlocks',
  },
  {
    id: 185,
    title: 'Hay Bale',
    navComp: 'HayBale',
  },
  {
    id: 186,
    title: 'Awning Wedge',
    navComp: 'AwningWedge',
  },
  {
    id: 187,
    title: 'Brass Faucet V2',
    navComp: 'BrassFaucetV2',
  },
  {
    id: 188,
    title: 'Brick Paver Block',
    navComp: 'BrickPaverBlock',
  },
  {
    id: 189,
    title: 'Bulletproof Glass',
    navComp: 'BulletproofGlass',
  },
  {
    id: 190,
    title: 'Cement',
    navComp: 'Cement',
  },
  {
    id: 191,
    title: 'Cobblestone Wedge',
    navComp: 'CobblestoneWedge',
  },
  {
    id: 192,
    title: 'Farm Plot',
    navComp: 'FarmPlot',
  },
  {
    id: 193,
    title: 'Fluorescent Light',
    navComp: 'FluorescentLight',
  },
  {
    id: 194,
    title: 'Industrial Light',
    navComp: 'IndustrialLight',
  },
  {
    id: 195,
    title: 'Industrial Light Bulb',
    navComp: 'IndustrialLightBulb',
  },
  {
    id: 196,
    title: 'Iron Bars',
    navComp: 'IronBars',
  },
  {
    id: 197,
    title: 'Iron Ladder',
    navComp: 'IronLadder',
  },
  {
    id: 198,
    title: 'Metal Catwalk',
    navComp: 'MetalCatwalk',
  },
  {
    id: 199,
    title: 'Metal Reinforced Wood Ramp',
    navComp: 'MetalReinforcedWoodRamp',
  },
  {
    id: 200,
    title: 'Reinforced Wood Ramp',
    navComp: 'ReinforcedWoodRamp',
  },
  {
    id: 201,
    title: 'Scrap Iron Ramp',
    navComp: 'ScrapIronRamp',
  },
  {
    id: 202,
    title: 'Shower Glass Block',
    navComp: 'ShowerGlassBlock',
  },
  {
    id: 203,
    title: 'Solid Rebar Ramp Frame',
    navComp: 'SolidRebarRampFrame',
  },
  {
    id: 204,
    title: 'Steel Ladder',
    navComp: 'SteelLadder',
  },
  {
    id: 205,
    title: 'Venetian Blinds',
    navComp: 'VenetianBlinds',
  },
  {
    id: 206,
    title: 'Wood Catwalk',
    navComp: 'WoodCatwalk',
  },
  {
    id: 207,
    title: 'Wood Ramp',
    navComp: 'WoodRamp',
  },
  {
    id: 208,
    title: 'Wood Ramp Frame',
    navComp: 'WoodRampFrame',
  },
  {
    id: 209,
    title: 'Wooden Ladder',
    navComp: 'WoodenLadder',
  },
  {
    id: 210,
    title: 'Wooden Club',
    navComp: 'WoodenClubItem',
  },
  {
    id: 211,
    title: 'Candy Cane Club',
    navComp: 'CandyCaneClub',
  },
  {
    id: 212,
    title: 'Steel Club',
    navComp: 'SteelClub',
  },
  {
    id: 213,
    title: 'Baseball Bat',
    navComp: 'BaseballBat',
  },
  {
    id: 214,
    title: 'Stone Sledgehammer',
    navComp: 'StoneSledgehammer',
  },
  {
    id: 215,
    title: 'Iron Sledgehammer',
    navComp: 'IronSledgehammer',
  },
  {
    id: 216,
    title: 'Steel Sledgehammer',
    navComp: 'SteelSledgehammer',
  },
  {
    id: 217,
    title: 'Stone Spear',
    navComp: 'StoneSpear',
  },
  {
    id: 218,
    title: 'Iron Spear',
    navComp: 'IronSpear',
  },
  {
    id: 219,
    title: 'Steel Spear',
    navComp: 'SteelSpear',
  },
  {
    id: 220,
    title: 'Knuckle Wraps',
    NavComp: 'KnuckleWraps',
  },
  {
    id: 221,
    title: 'Iron Knuckles',
    navComp: 'Ironknuckles',
  },
  {
    id: 222,
    title: 'Steel Knuckles',
    navComp: 'SteelKnuckles',
  },
  {
    id: 223,
    title: 'Pipe Baton',
    navComp: 'PipeBaton',
  },
  {
    id: 224,
    title: 'Stun Baton',
    navComp: 'StunBaton',
  },
  {
    id: 225,
    title: 'Primitive Bow',
    navComp: 'PrimitiveBow',
  },
  {
    id: 226,
    title: 'Wooden Bow',
    navComp: 'WoodenBow',
  },
  {
    id: 227,
    title: 'Iron Crossbow',
    navComp: 'IronCrossbow',
  },
  {
    id: 228,
    title: 'Compound Bow',
    navComp: 'CompoundBow',
  },
  {
    id: 229,
    title: 'Compound Crossbow',
    navComp: 'CompoundCrossbow',
  },
  {
    id: 230,
    title: 'Pipe Pistol',
    navComp: 'PipePistol',
  },
  {
    id: 231,
    title: 'Pistol',
    navComp: 'Pistol',
  },
  {
    id: 232,
    title: '.44 Magnum',
    navComp: 'A44Magnum',
  },
  {
    id: 233,
    title: '.44 Desert Vulture',
    navComp: 'A44DesertVulture',
  },
  {
    id: 234,
    title: 'SMG 5',
    navComp: 'SMG',
  },
  {
    id: 235,
    title: 'Pipe Shotgun',
    navComp: 'PipeShotgun',
  },
  {
    id: 236,
    title: 'Double Barrel Shotgun',
    navComp: 'DoubleBarrelShotgun',
  },
  {
    id: 237,
    title: 'Pump Shotgun',
    navComp: 'PumpShotgun',
  },
  {
    id: 238,
    title: 'Auto Shotgun',
    navComp: 'AutoShotgun',
  },
  {
    id: 239,
    title: 'Pipe Machine Gun',
    navComp: 'PipeMachineGun',
  },
  {
    id: 240,
    title: 'AK 47 Machine Gun',
    navComp: 'AK47MachineGunItem',
  },
  {
    id: 241,
    title: 'Tactical Assault Rifle',
    navComp: 'TacticalAssaultRifle',
  },
  {
    id: 242,
    title: 'M60 Machine Gun',
    navComp: 'M60MachineGun',
  },
  {
    id: 243,
    title: 'Pipe Rifle',
    navComp: 'PipeRifle',
  },
  {
    id: 244,
    title: 'Hunting Rifle',
    navComp: 'HuntingRifle',
  },
  {
    id: 245,
    title: 'Lever Action Rifle',
    navComp: 'LeverActionRifle',
  },
  {
    id: 246,
    title: 'Sniper Rifle',
    navComp: 'SniperRifle',
  },
  {
    id: 247,
    title: 'Robotic Sledge',
    navComp: 'RoboticSledge',
  },
  {
    id: 248,
    title: 'Robotic Turret',
    navComp: 'RoboticTurret',
  },
  {
    id: 249,
    title: 'Rocket Launcher',
    navComp: 'RocketLauncher',
  },
  {
    id: 250,
    title: 'Exploding Arrow',
    navComp: 'ExplodingArrow',
  },
  {
    id: 251,
    title: 'Exploding Crossbow Bolt',
    navComp: 'ExplodingCrrossbowBolt',
  },
  {
    id: 252,
    title: 'Rusty Barrel',
    navComp: 'RustyBarrel',
  },
  {
    id: 253,
    title: 'Tin Land Mine',
    navComp: 'TinLandMine',
  },
  {
    id: 254,
    title: 'Cooking Pot Mine',
    navComp: 'CookingPotMine',
  },
  {
    id: 255,
    title: 'Hub Cap Mine',
    navComp: 'HubCapMine',
  },
  {
    id: 256,
    title: 'Air Filter Land Mine',
    navComp: 'AirFilterLandMine',
  },
  {
    id: 257,
    title: 'Timed Charge',
    navComp: 'TimedCharge',
  },
  {
    id: 258,
    title: 'Molotov Cocktail',
    navComp: 'MolotovCocktail',
  },
  {
    id: 259,
    title: 'Pipe Bomb',
    navComp: 'PipeBomb',
  },
  {
    id: 260,
    title: 'Contact Grenade',
    navComp: 'ContactGrenade',
  },
  {
    id: 261,
    title: 'Grenade',
    navComp: 'Grenade',
  },
  {
    id: 262,
    title: 'Stick of Dynamite',
    navComp: 'StickofDynamite',
  },
  {
    id: 263,
    title: 'Barbed Fence Wire',
    navComp: 'BarbedFenceWireItem',
  },
  {
    id: 264,
    title: 'Blade Trap',
    navComp: 'BladeTrapItem',
  },
  {
    id: 265,
    title: 'Dart Trap',
    navComp: 'DartTrapItem',
  },
  {
    id: 266,
    title: 'Electric Fence Post',
    navComp: 'ElectricFencePostItem',
  },
  {
    id: 267,
    title: 'Iron Spikes',
    navComp: 'IronSpikesItem',
  },
  {
    id: 268,
    title: 'Shotgun Auto Turret',
    navComp: 'ShotgunAutoTurretItem',
  },
  {
    id: 269,
    title: 'SMG Auto Turret',
    navComp: 'SMGAutoTurretItem',
  },
  {
    id: 270,
    title: 'Wood Spikes',
    navComp: 'WoodSpikesItem',
  },
  {
    id: 271,
    title: 'Animal Fat',
    navComp: 'AnimalFatItem',
  },
  {
    id: 272,
    title: 'Blueberries',
    navComp: 'blueberriesItem',
  },
  {
    id: 273,
    title: 'Ear of Corn',
    navComp: 'EarofCornItem',
  },
  {
    id: 274,
    title: 'Ear of Super Corn',
    navComp: 'EarofSuperCornItem',
  },
  {
    id: 275,
    title: 'Egg',
    navComp: 'EggItem',
  },
  {
    id: 276,
    title: 'Mushrooms',
    navComp: 'MushroomsItem',
  },
  {
    id: 277,
    title: 'Potato',
    navComp: 'PotatoItem',
  },
  {
    id: 278,
    title: 'Pumpkin',
    navComp: 'PumpkinItem',
  },
  {
    id: 279,
    title: 'Raw Meat',
    navComp: 'RawMeatItem',
  },
  {
    id: 280,
    title: 'Rotting Flesh',
    navComp: 'RottingFleshItem',
  },
  {
    id: 281,
    title: 'Yucca Fruit',
    navComp: 'YuccaFruitItem',
  },
  {
    id: 282,
    title: 'Can of Cat Food',
    navComp: 'CanCatFoodItem',
  },
  {
    id: 283,
    title: 'Can of Chili',
    navComp: 'CanChiliItem',
  },
  {
    id: 284,
    title: 'Can of Dog Food',
    navComp: 'CanDogFoodItem',
  },
  {
    id: 285,
    title: 'Can of Miso',
    navComp: 'CanMisoItem',
  },
  {
    id: 286,
    title: 'Can of Pasta',
    navComp: 'CanPastaItem',
  },
  {
    id: 287,
    title: 'Can of Pears',
    navComp: 'CanPearsItem',
  },
  {
    id: 288,
    title: 'Can of Peas',
    navComp: 'CanPeasItem',
  },
  {
    id: 289,
    title: 'Can of Salmon',
    navComp: 'CanSalmonItem',
  },
  {
    id: 290,
    title: 'Can of Sham',
    navComp: 'CanShamItem',
  },
  {
    id: 291,
    title: 'Can of Stock',
    navComp: 'CanStockItem',
  },
  {
    id: 292,
    title: 'Can of Tuna',
    navComp: 'CanTunaItem',
  },
  {
    id: 293,
    title: 'Chicken Ration',
    navComp: 'ChickenRationItem',
  },
  {
    id: 294,
    title: 'Chicken Soup',
    navComp: 'ChickenSoupItem',
  },
  {
    id: 295,
    title: 'Lamb Ration',
    navComp: 'LambRationItem',
  },
  {
    id: 296,
    title: 'Large Beef Ration',
    navComp: 'LargeBeefRationItem',
  },
  {
    id: 297,
    title: 'Boiled Egg',
    navComp: 'BoiledEggItem',
  },
  {
    id: 298,
    title: 'Boiled Meat',
    navComp: 'BoiledMeatItem',
  },
  {
    id: 299,
    title: 'Charred Meat',
    navComp: 'CharredMeatItem',
  },
  {
    id: 300,
    title: 'Corn Bread',
    navComp: 'CornBreadItem',
  },
  {
    id: 301,
    title: 'Grilled Corn',
    navComp: 'GrilledCornItem',
  },
  {
    id: 302,
    title: 'Grilled Meat',
    navComp: 'GrilledMeatItem',
  },
  {
    id: 303,
    title: 'Blueberry Pie',
    navComp: 'BlueberryPieItem',
  },
  {
    id: 304,
    title: 'Meat Stew',
    navComp: 'MeatStewItem',
  },
  {
    id: 305,
    title: 'Pumpkin Bread',
    navComp: 'PumpkinBreadItem',
  },
  {
    id: 306,
    title: 'Pumpkin Cheesecake',
    navComp: 'PumpkinCheeseCakeItem',
  },
  {
    id: 307,
    title: 'Pumpkin Pie',
    navComp: 'PumpkinPieItem',
  },
  {
    id: 308,
    title: 'Steak and Potato Meal',
    navComp: 'SteakPotatoMealItem',
  },
  {
    id: 309,
    title: 'Vegetable Stew',
    navComp: 'VegetableStewItem',
  },
  {
    id: 310,
    title: 'Chili Dog',
    navComp: 'ChiliDogItem',
  },
  {
    id: 311,
    title: 'Fish Tacos',
    navComp: 'FishTacosItem',
  },
  {
    id: 312,
    title: 'Gumbo Stew',
    navComp: 'GumboStewItem',
  },
  {
    id: 313,
    title: 'Hobo Stew',
    navComp: 'HoboStewItem',
  },
  {
    id: 314,
    title: 'Sham Chowder',
    navComp: 'ShamChowderItem',
  },
  {
    id: 315,
    title: 'Shepards Pie',
    navComp: 'ShpardsPieItem',
  },
  {
    id: 316,
    title: 'Spaghetti',
    navComp: 'SpaghettiItem',
  },
  {
    id: 317,
    title: 'Tuna Fish Gravy Toast',
    navComp: 'TunaFushGravyToastItem',
  },
  {
    id: 318,
    title: 'Coffee',
    navComp: 'CoffeeItem',
  },
  {
    id: 319,
    title: 'Goldenrod Tea',
    navComp: 'GoldenrodTeaItem',
  },
  {
    id: 320,
    title: 'Murky Water',
    navComp: 'MurkyWaterItem',
  },
  {
    id: 321,
    title: 'Red Tea',
    navComp: 'RedTeaItem',
  },
  {
    id: 322,
    title: 'Water',
    navComp: 'WaterItem',
  },
  {
    id: 323,
    title: 'Yucca Juice',
    navComp: 'YuccaJuiceItem',
  },
  {
    id: 324,
    title: 'Beer',
    navComp: 'BeerItem',
  },
  {
    id: 325,
    title: 'Blackstrap Coffee',
    navComp: 'BlackstrapCoffeeItem',
  },
  {
    id: 326,
    title: 'Mega Crush',
    navComp: 'MegaCrushItem',
  },
  {
    id: 327,
    title: 'Pure Mineral Water',
    navComp: 'PureMineralWaterItem',
  },
  {
    id: 328,
    title: 'Yucca Juice Smoothie',
    navComp: 'YuccaJuiceSmoothieItem',
  },
  {
    id: 329,
    title: 'Grandpas Awesome Sauce',
    navComp: 'GrandpaAwesomeSauceItem',
  },
  {
    id: 330,
    title: 'Grandpas Fergitn Elixir',
    navComp: 'GrandpaFergitElixirItem',
  },
  {
    id: 331,
    title: 'Grandpas Learnn Elixir',
    navComp: 'GrandpaLearnElixirItem',
  },
  {
    id: 332,
    title: 'Grandpas Moonshine',
    navComp: 'GrandpasMoonshineItem',
  },
  {
    id: 333,
    title: 'Survival Mechanics',
    navComp: 'SurvivalScreen',
  },
  {
    id: 334,
    title: 'Combat and Damage',
    navComp: 'CombatDamageScreen',
  },
  {
    id: 335,
    title: 'Leveling Mechanics',
    navComp: 'LevelingScreen',
  },
  {
    id: 336,
    title: 'Crafting Mechanics',
    navComp: 'CraftingSystemScreen',
  },
  {
    id: 337,
    title: 'Repairing Items',
    navComp: 'RepairingItemScreen',
  },
  {
    id: 338,
    title: 'Menu Interface',
    navComp: 'ItemSystemScreen',
  },
  {
    id: 339,
    title: 'Resources Mechanics',
    navComp: 'ResourcesSystemScreen',
  },
  {
    id: 340,
    title: 'Constructing Builds',
    navComp: 'ConstructingBuildingsScreen',
  },
  {
    id: 341,
    title: 'Ambience Mechanics',
    navComp: 'AmbienceSystemScreen',
  },
  {
    id: 342,
    title: 'Zombies Mechanics',
    navComp: 'ZombiesScreen',
  },
  {
    id: 343,
    title: 'Electricy Mechanics',
    navComp: 'ElectricyScreen',
  },
  {
    id: 344,
    title: 'Health Mechanics',
    navComp: 'HealthSystemScreen',
  },
  {
    id: 345,
    title: 'Mining Mechanics',
    navComp: 'MiningSystemScreen',
  },
  {
    id: 346,
    title: 'Hat',
    navComp: 'HatsScreen',
  },
  {
    id: 347,
    title: 'Glasses',
    navComp: 'GlassesScreen',
  },
  {
    id: 348,
    title: 'Face',
    navComp: 'FaceScreen',
  },
  {
    id: 349,
    title: 'Overcoats',
    navComp: 'OvercoatsScreen',
  },
  {
    id: 350,
    title: 'Shirts',
    navComp: 'ShirtsScreen',
  },
  {
    id: 351,
    title: 'Pants',
    navComp: 'PantsScreen',
  },
  {
    id: 352,
    title: 'Light Armor Helmets',
    navComp: 'LightHelmetsArmorScreen',
  },
  {
    id: 353,
    title: 'Heavy Armor Helmets',
    navComp: 'HeavyHelmetsArmorScreen',
  },
  {
    id: 354,
    title: 'Plant Fiber Armor Set',
    navComp: 'PlantFiberScreen',
  },
  {
    id: 355,
    title: 'Padded Armor Set',
    navComp: 'PaddedArmorScreen',
  },
  {
    id: 356,
    title: 'Leather Armor Set',
    navComp: 'LeatherArmorScreen',
  },
  {
    id: 357,
    title: 'Military Armor Set',
    navComp: 'MilitaryArmorScreen',
  },
  {
    id: 358,
    title: 'Scrap Armor Set',
    navComp: 'ScrapArmorScreen',
  },
  {
    id: 359,
    title: 'Iron Armor Set',
    navComp: 'IronArmorScreen',
  },
  {
    id: 360,
    title: 'Steel Armor Set',
    navComp: 'SteelArmorScreen',
  },
  {
    id: 361,
    title: 'Hazmat Suit Set',
    navComp: 'HazmatSuitScreen',
  },
  {
    id: 362,
    title: 'Ghillie Suit Set',
    navComp: 'GhilluieSuitScreen',
  },
  {
    id: 363,
    title: 'Construction Tools',
    navComp: 'ConstructionToolsScreen',
  },
  {
    id: 364,
    title: 'Butchering Tools',
    navComp: 'ButcheringToolsScreen',
  },
  {
    id: 365,
    title: 'Disassembly Tools',
    navComp: 'DisassemblyToolsScreen',
  },
  {
    id: 366,
    title: 'Mining Tools',
    navComp: 'MiningToolsScreen',
  },
  {
    id: 367,
    title: 'Woodcutting Tools',
    navComp: 'WoodcuttingToolsScreen',
  },
  {
    id: 368,
    title: 'Special Tools',
    navComp: 'SpecialTools Screen',
  },
  {
    id: 369,
    title: 'Workstations',
    navComp: 'WorkstationsScreen',
  },
  {
    id: 370,
    title: 'Windows',
    navComp: 'WindowsScreen',
  },
  {
    id: 371,
    title: 'Terrain',
    navComp: 'TerrainScreen',
  },
  {
    id: 372,
    title: 'Stairs',
    navComp: 'StairsScreen',
  },
  {
    id: 373,
    title: 'Siding',
    navComp: 'SidingScreen',
  },
  {
    id: 374,
    title: 'Lighting',
    navComp: 'LightingScreen',
  },
  {
    id: 375,
    title: 'Hatch',
    navComp: 'HatchScreen',
  },
  {
    id: 376,
    title: 'Furniture',
    navComp: 'FurnitureScreen',
  },
  {
    id: 377,
    title: 'Frames',
    navComp: 'FramesScreen',
  },
  {
    id: 378,
    title: 'Fencing',
    navComp: 'FencingScreen',
  },
  {
    id: 379,
    title: 'Doors',
    navComp: 'DoorsScreen',
  },
  {
    id: 380,
    title: 'Containers',
    navComp: 'ContainersScreen',
  },
  {
    id: 381,
    title: 'Blocks',
    navComp: 'BlocksScreen',
  },
  {
    id: 382,
    title: 'Other Materials',
    navComp: 'OtherScreen',
  },
  {
    id: 383,
    title: 'Clubs',
    navComp: 'ClubsScreen',
  },
  {
    id: 384,
    title: 'Sledgehammers',
    navComp: 'SledgehammersScreen',
  },
  {
    id: 385,
    title: 'Spears',
    navComp: 'SpearsScreen',
  },
  {
    id: 386,
    title: 'Knuckles',
    navComp: 'KnucklesScreen',
  },
  {
    id: 387,
    title: 'Knives',
    navComp: 'KnivesScreen',
  },
  {
    id: 388,
    title: 'Batons',
    navComp: 'BatonsScreen',
  },
  {
    id: 389,
    title: 'Bows',
    navComp: 'BowsScreen',
  },
  {
    id: 390,
    title: 'Handguns and SMG',
    navComp: 'HandgunsSMGScreen',
  },
  {
    id: 391,
    title: 'Machine Guns',
    navComp: 'MachineGunsScreen',
  },
  {
    id: 392,
    title: 'Rifles',
    navComp: 'RiflesScreen',
  },
  {
    id: 393,
    title: 'Robotic Turrets',
    navComp: 'RoboticTurretsScreen',
  },
  {
    id: 394,
    title: 'Explosives',
    navComp: 'ExplosivesScreen',
  },
  {
    id: 395,
    title: 'Crafting Basics',
    navComp: 'CraftingScreen',
  },
  {
    id: 396,
    title: 'Ingredients',
    navComp: 'IngredientsScreen',
  },
  {
    id: 397,
    title: 'Canned Foods',
    navComp: 'CannedFoodsScreen',
  },
  {
    id: 398,
    title: 'Cooked Foods',
    navComp: 'CookedFoodsScreen',
  },
  {
    id: 399,
    title: 'Drinks',
    navComp: 'DrinksScreen',
  },

];






function SearchScreen({ navigation }) {
  const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const renderItem = ({ item }) => (
    <View style={styles.searchView}>
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate(item.navComp)}>
        <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
    </View>
  );

  const handleSearch = (text) => {
    const filtered = filter(DATA, (item) => {
      return contains(item.title, text);
    });
    setUserInput(text);
    setFilteredData(filtered);
  };
  
  const contains = (itemTitle, userInput) => {
    return itemTitle.toLowerCase().includes(userInput.toLowerCase());
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.searchView}>
        <Text style={styles.screenHeader}>Search</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={userInput}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Try to dispay the total number being displayed (Results Shown). perhaps need a function or variable that 
        looks at the item.id of the last item in the array?? */}
        {/*  <Text style={styles.text}>{}</Text>  */}

        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default SearchScreen;


