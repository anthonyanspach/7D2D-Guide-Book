{/*   */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/*screen imports*/}

import HomeScreen from './screens/HomeScreen';
import StartingGuide from './screens/StartingGuide';
import ItemsScreen from './screens/items/ItemsScreen';
import ClothingScreen from './screens/clothing/ClothingScreen';
import HatsScreen from './screens/clothing/HatsScreen';
import GlassesScreen from './screens/clothing/GlassesScreen';
import FaceScreen from './screens/clothing/FaceScreen';
import OvercoatsScreen from './screens/clothing/OvercoatsScreen';
import ShirtsScreen from './screens/clothing/ShirtsScreen';
import PantsScreen from './screens/clothing/PantsScreen';
import BootsScreen from './screens/clothing/BootsScreen';
import LightHelmetsArmorScreen from './screens/clothing/LightHelmetsArmorScreen';
import HeavyHelmetsArmorScreen from './screens/clothing/HeavyHelmetsArmorScreen';
import PlantFiberScreen from './screens/clothing/PlantFiberScreen';
import PaddedArmorScreen from './screens/clothing/PaddedArmorScreen';
import LeatherArmorScreen from './screens/clothing/LeatherArmorScreen';
import ScrapArmorScreen from './screens/clothing/ScrapArmorScreen';
import IronArmorScreen from './screens/clothing/IronArmorScreen';
import SteelArmorScreen from './screens/clothing/SteelArmorScreen';
import HazmatSuitScreen from './screens/clothing/HazmatSuitScreen';
import GhillieSuitScreen from './screens/clothing/GhillieSuitScreen';
import MilitaryArmorScreen from './screens/clothing/MilitaryArmorScreen';
import ToolsScreen from './screens/tools/ToolsScreen';
import ConstructionToolsScreen from './screens/tools/ConstructionToolsScreen';
import ButcheringToolsScreen from './screens/tools/ButcheringToolsScreen';
import DisassemblyToolsScreen from './screens/tools/DisasseblyToolsScreen';
import MiningToolsScreen from './screens/tools/MiningToolsScreen';
import WoodcuttingToolsScreen from './screens/tools/WoodcuttingToolsScreen';
import SpecialToolsScreen from './screens/tools/SpecialToolsScreen';
import CraftingScreen from './screens/crafting/CraftingScreen';
import WorkstationsScreen from './screens/crafting/WorkstationsScreen';
import MaterialsScreen from './screens/materials/MaterialsScreen';
import WindowsScreen from './screens/materials/WindowsScreen';
import TerrainScreen from './screens/materials/TerrainScreen';
import StairsScreen from './screens/materials/StairsScreen';
import SidingScreen from './screens/materials/SidingScreen';
import LightingScreen from './screens/materials/LightingScreen';
import HatchScreen from './screens/materials/HatchScreen';
import FurnitureScreen from './screens/materials/FurnitureScreen';
import FramesScreen from './screens/materials/FramesScreen';
import FencingScreen from './screens/materials/FencingScreen';
import DoorsScreen from './screens/materials/DoorsScreen';
import ContainersScreen from './screens/materials/ContainersScreen';
import BlockItemsScreen from './screens/materials/BlockItemsScreen';
import OtherScreen from './screens/materials/OtherScreen';
import WeaponsScreen from './screens/weapons/WeaponsScreen';
import ClubsScreen from './screens/weapons/ClubsScreen';
import SledgehammersScreen from './screens/weapons/SledgehammersScreen';
import SpearsScreen from './screens/weapons/SpearsScreen';
import KnucklesScreen from './screens/weapons/KnucklesScreen';
import KnivesScreen from './screens/weapons/KnivesScreen';
import BatonsScreen from './screens/weapons/BatonsScreen';
import BowsScreen from './screens/weapons/BowsScreen';
import HandgunsSMGScreen from './screens/weapons/HandgunsSMGScreen';
import ShotgunsScreen from './screens/weapons/ShotgunsScreen';
import MachineGunsScreen from './screens/weapons/MachineGunsScreen';
import RiflesScreen from './screens/weapons/RiflesScreen';
import RoboticTurretsScreen from './screens/weapons/RoboticTurretsScreen';
import ExplosivesScreen from './screens/weapons/ExplosivesScreen';
import TrapsTurretsScreen from './screens/trapsTurrets/TrapsTurretsScreen';
import FoodDrinksScreen from './screens/foodDrinks/FoodDrinksScreen';
import IngredientsScreen from './screens/foodDrinks/IngredientsScreen';
import CannedFoodsScreen from './screens/foodDrinks/CannedFoodsScreen';
import CookedFoodsScreen from './screens/foodDrinks/CookedFoodsScreen';
import DrinksScreen from './screens/foodDrinks/DrinksScreen';
import ResourcesScreen from './screens/resources/ResourcesScreen';
import MechanicsScreen from './screens/mechanics/MechanicsScreen';
import SurvivalScreen from './screens/mechanics/SurvivalScreen';
import CombatDamageScreen from './screens/mechanics/CombatDamageScreen';
import LevelingSystemScreen from './screens/mechanics/LevelingSystemScreen';
import CraftingSystemScreen from './screens/mechanics/CraftingSystemScreen';
import RepairingItemScreen from './screens/mechanics/RepairingItemScreen';
import ItemSystemScreen from './screens/mechanics/ItemSystemScreen';
import MenuInterfaceScreen from './screens/mechanics/MenuInterfaceScreen';
import ResourcesSystemScreen from './screens/mechanics/ResourcesSystemScreen';
import ConstructingBuildingsScreen from './screens/mechanics/ConstructingBuildingsScreen';
import AmbienceSystemScreen from './screens/mechanics/AmbienceSystemScreen';
import ZombiesScreen from './screens/mechanics/ZombiesScreen';
import ElectricityScreen from './screens/mechanics/ElectricityScreen';
import HealthSystemScreen from './screens/mechanics/HealthSystemScreen';
import MiningSystemScreen from './screens/mechanics/MiningSystemScreen';
import SearchScreen from './screens/SearchScreen';

{/*Item screen imports*/}

import BaseballCapItem from './screens/items/hats/BaseballCap';
import CowboyHatItem from './screens/items/hats/CowboyHat';
import PressboyCapItem from './screens/items/hats/PressboyCap';
import SkullCapItem from './screens/items/hats/SkullCap';
import LuckyGogglesItem from './screens/items/glasses/LuckyGoggles';
import SkiGogglesItem from './screens/items/glasses/SkiGoggles';
import NerdyGlassesItem from './screens/items/glasses/NerdyGlasses';
import NightVisionGogglesItem from './screens/items/glasses/NightVisionGoggles';
import ShadesItem from './screens/items/glasses/Shades';
import ToughGuySunglassesItem from './screens/items/glasses/ToughGuySunglasses'
import BandanaItem from './screens/items/face/Bandana';
import CigarItem from './screens/items/face/Cigar';
import LeatherPonchoItem from './screens/items/overcoats/LeatherPoncho';
import CollegeJacketItem from './screens/items/overcoats/CollegeJacket';
import JacketItem from './screens/items/overcoats/Jacket';
import LeatherDusterItem from './screens/items/overcoats/LeatherDuster';
import PufferCoatItem from './screens/items/overcoats/PufferCoat';
import SuitJacketItem from './screens/items/overcoats/SuitJacket';
import BDUTopItem from './screens/items/shirts/BDUTop';
import HoodedSweatshirtItem from './screens/items/shirts/HoodedSweatshirt';
import FlannelShirtItem from './screens/items/shirts/FlannelShirt';
import ShirtItem from './screens/items/shirts/Shirt';
import SweatshirtItem from './screens/items/shirts/Sweatshirt';
import TankTopItem from './screens/items/shirts/TankTop';
import TShirtItem from './screens/items/shirts/TShirt';
import BDUBottomsItem from './screens/items/pants/BDUBottoms';
import DenimPantsItem from './screens/items/pants/DenimPants';
import ShortsItem from './screens/items/pants/Shorts';
import OverallsItem from './screens/items/pants/Overalls';
import SkirtItem from './screens/items/pants/Skirt';
import SuitPantsItem from './screens/items/pants/SuitPants';
import HighPerfRunShoesItem from './screens/items/boots/HighPerfRunShoes';
import CowboyBootsItem from './screens/items/boots/CowboyBoots';
import DressShoesItem from './screens/items/boots/DressShoes';
import GothicBootsItem from './screens/items/boots/GothicBoots';
import RunningShoesItem from './screens/items/boots/RunningShoes';
import WornBootsItem from './screens/items/boots/WornBoots';
import PlantFiberBootsItem from './screens/items/plantFiberSet/PlantFiberBoots';
import PlantFiberGlovesItem from './screens/items/plantFiberSet/PlantFiberGloves';
import PlantFiberHatItem from './screens/items/plantFiberSet/PlantFiberHat';
import PlantFiberHoodItem from './screens/items/plantFiberSet/PlantFiberHood';
import PlantFiberPantsItem from './screens/items/plantFiberSet/PlantFiberPants';
import PlantFiberShirtItem from './screens/items/plantFiberSet/PlantFiberShirt';
import PaddedGlovesItem from './screens/items/paddedArmorSet/PaddedGloves';
import PaddedHoodItem from './screens/items/paddedArmorSet/PaddedHood';
import PaddedChestItem from './screens/items/paddedArmorSet/PaddedChest';
import PaddedLegItem from './screens/items/paddedArmorSet/PaddedLeg';
import PaddedBootsItem from './screens/items/paddedArmorSet/PaddedBoots';
import LeatherBootsItem from './screens/items/leatherArmorSet/LeatherBoots';
import LeatherGlovesItem from './screens/items/leatherArmorSet/LeatherGloves';
import LeatherHoodItem from './screens/items/leatherArmorSet/LeatherHood';
import LeatherChestItem from './screens/items/leatherArmorSet/LeatherChest';
import LeatherLegItem from './screens/items/leatherArmorSet/LeatherLeg';
import MilitaryBootsItem from './screens/items/militaryArmorSet/MilitaryBoots';
import MilitaryStealthBootsItem from './screens/items/militaryArmorSet/MilitaryStealthBoots';
import MilitaryGlovesItem from './screens/items/militaryArmorSet/MilitaryGloves';
import MilitaryHelmetItem from './screens/items/militaryArmorSet/MilitaryHelmet';
import MilitaryLegItem from './screens/items/militaryArmorSet/MilitaryLeg';
import MilitaryVestItem from './screens/items/militaryArmorSet/MilitaryVest';
import MiningHelmetItem from './screens/items/militaryArmorSet/MiningHelmet';
import ScrapBootsItem from './screens/items/scrapArmorSet/ScrapBoots';
import ScrapChestItem from './screens/items/scrapArmorSet/ScrapChest';
import ScrapGlovesItem from './screens/items/scrapArmorSet/ScrapGloves';
import ScrapHelmetItem from './screens/items/scrapArmorSet/ScrapHelmet';
import ScrapLegItem from './screens/items/scrapArmorSet/ScrapLeg';
import IronBootsItem from './screens/items/ironArmorSet/IronBoots';
import IronChestItem from './screens/items/ironArmorSet/IronChest';
import IronGlovesItem from './screens/items/ironArmorSet/IrontGloves';
import IronHelmetItem from './screens/items/ironArmorSet/IronHelmet';
import IronLegItem from './screens/items/ironArmorSet/IronLeg';
import SteelBootsItem from './screens/items/steelArmorSet/SteelBoots';
import SteelChestItem from './screens/items/steelArmorSet/SteelChest';
import SteelGlovesItem from './screens/items/steelArmorSet/SteelGloves';
import SteelHelmetItem from './screens/items/steelArmorSet/SteelHelmet';
import SteelLegItem from './screens/items/steelArmorSet/SteelLeg';
import HazmatBootsItem from './screens/items/hazmatSet/HazmatBoots';
import HazmatGlovesItem from './screens/items/hazmatSet/HazmatGloves';
import HazmatMaskItem from './screens/items/hazmatSet/HazmatMask';
import HazmatPantsItem from './screens/items/hazmatSet/HazmatPants';
import HazmatShirtItem from './screens/items/hazmatSet/HazmatShirt';
import GhillieHoodItem from './screens/items/ghillieSuitSet/GhillieHood';
import GhillieJacketItem from './screens/items/ghillieSuitSet/GhillieJacket';
import GhilliePantsItem from './screens/items/ghillieSuitSet/GhilliePants';
import StoneAxeItem from './screens/items/tools/StoneAxe';
import TazaStoneAxeItem from './screens/items/tools/TazaStoneAxe';
import ClawHammerItem from './screens/items/tools/ClawHammer';
import NailgunItem from './screens/items/tools/Nailgun';
import BoneKnifeItem from './screens/items/tools/BoneKnife';
import CandyCaneKnifeItem from './screens/items/tools/CandyCaneKnife';
import HuntingKnifeItem from './screens/items/tools/HuntingKnife';
import MacheteItem from './screens/items/tools/Machete';
import WrenchItem from './screens/items/tools/Wrench';
import RatchetItem from './screens/items/tools/Ratchet';
import ImpactDriverItem from './screens/items/tools/ImpactDriver';
import StoneShovelItem from './screens/items/tools/StoneShovel';
import IronShovelItem from './screens/items/tools/IronShovelItem';
import IronPickaxeItem from './screens/items/tools/IronPickaxe';
import SteelShovelItem from './screens/items/tools/SteelShovel';
import SteelPickaxeItem from './screens/items/tools/SteelPickaxe';
import AugerItem from './screens/items/tools/Auger';
import IronFireaxeItem from './screens/items/tools/IronFireaxe';
import SteelAxeItem from './screens/items/tools/SteelAxe';
import ChainsawItem from './screens/items/tools/Chainsaw';
import BucketItem from './screens/items/tools/Bucket';
import PaintBrushItem from './screens/items/tools/PaintBrush';
import LockpickItem from './screens/items/tools/Lockpick';
import WireToolItem from './screens/items/tools/WireTool';
import CampfireItem from './screens/items/workstations/Campfire';
import ForgeItem from './screens/items/workstations/Forge';
import WorkbenchItem from './screens/items/workstations/Workbench';
import CementMixerItem from './screens/items/workstations/CementMixer';
import ChemistryStationItem from './screens/items/workstations/ChemistryStation';
import DewCollectorItem from './screens/items/workstations/DewCollector';
import WoodWindowItem from './screens/items/windows/WoodWindowItem';
import AsphaltItem from './screens/items/terrain/AsphaltItem';
import BrickStairsItem from './screens/items/stairs/BrickStairs';
import CobblestoneStairsItem from './screens/items/stairs/CobblestoneStairs';
import ConcreteStairsItem from './screens/items/stairs/ConcreteStairs';
import FlagstoneStairsItem from './screens/items/stairs/FlagstoneStairs';
import ReinforcedScrapIronStairsItem from './screens/items/stairs/ReinforceScapIronStairs';
import SteelStairsItem from './screens/items/stairs/SteelStairs';
import WoodenStairsItem from './screens/items/stairs/WoodenStairs';
import PlywoodItem from './screens/items/siding/PlywoodItem';
import BasicLightBulbItem from './screens/items/lighting/BasicLightBulb';
import BurningBarrelItem from './screens/items/lighting/BurningBarrel';
import CandleItem from './screens/items/lighting/Candle';
import OldOutdoorLightItem from './screens/items/lighting/OldOutdoorLight';
import IronHatchItem from './screens/items/hatch/IronHatch';
import IronHatchv2Item from './screens/items/hatch/IronHatchv2';
import IronHatchv3Item from './screens/items/hatch/IronHatchv3';
import SteelHatchItem from './screens/items/hatch/SteelHatch';
import SteelHatchPoweredItem from './screens/items/hatch/SteelHatchPowered';
import VaultHatchv2Item from './screens/items/hatch/VaultHatchv2';
import VaultHatchv3Item from './screens/items/hatch/VaultHatchv3';
import WoodenHatchItem from './screens/items/hatch/WoodenHatch';
import WoodenHatchv2Item from './screens/items/hatch/WoodenHatchv2';
import WoodenHatchv3Item from './screens/items/hatch/WoodenHatchv3';
import AirConditionerItem from './screens/items/furniture/AirConditioner';
import BedrollItem from './screens/items/furniture/Bedroll';
import BrassFaucetItem from './screens/items/furniture/BrassFaucet';
import WashingMachineItem from './screens/items/furniture/WashingMachine';
import WoodFrameItem from './screens/items/frames/WoodFrame';
import WoodFenceItem from './screens/items/fencing/WoodFencing';
import GarageDoorMetalItem from './screens/items/doors/GarageDoorMetal';
import GarageDoorMetalv2Item from './screens/items/doors/GarageDoorMetalv2';
import GarageDoorMetalv3Item from './screens/items/doors/GarageDoorMetalv3';
import IronDoorItem from './screens/items/doors/IronDoor';
import IronDoorv2Item from './screens/items/doors/IronDoorv2';
import IronDoorv3Item from './screens/items/doors/IronDoorv3';
import JailDoorItem from './screens/items/doors/JailDoor';
import MetalReinforcedWoodenDoorItem from './screens/items/doors/MetalReinforcedWoodenDoor';
import ReinforcedDrawbridgeItem from './screens/items/doors/ReinforcedDrawbridge';
import ReinforcedDrawbridgePoweredItem from './screens/items/doors/ReinforcedDrawbridgePowered';
import ReinforcedSecureWoodenDoorItem from './screens/items/doors/ReinforcedSecureWoodenDoor';
import VaultDoorItem from './screens/items/doors/VaultDoor';
import VaultDoorv2Item from './screens/items/doors/VaultDoorv2';
import VaultDoorv3Item from './screens/items/doors/VaultDoorv3';
import WoodDoorItem from './screens/items/doors/WoodDoor';
import CupboardItem from './screens/items/containers/Cupboard';
import GreenDrawerItem from './screens/items/containers/GreenDrawer';
import GunSafeItem from './screens/items/containers/GunSafe';
import MailBoxItem from './screens/items/containers/MailBox';
import MailDropBox from './screens/items/containers/MailDropBox';
import MicrowaveItem from './screens/items/containers/Microwave';
import SecureStorageChestItem from './screens/items/containers/SecureStorageChest';
import StorageBoxItem from './screens/items/containers/StorageBox';
import TrashCanItem from './screens/items/containers/TrashCan';
import WoodenChestItem from './screens/items/containers/WoodenChest';
import AwningRedBlocksItem from './screens/items/blockItems/AwningRedBlocks';
import BrickBlocksItem from './screens/items/blockItems/BrickBlocks';
import ClayRoofBlocksItem from './screens/items/blockItems/ClayRoofBlocks';
import CobblestoneBlocksItem from './screens/items/blockItems/CobblestoneBlocks';
import ConcreteBlocksItem from './screens/items/blockItems/ConcreteBlocks';
import ConcreteFormBlocksItem from './screens/items/blockItems/ConcreteFormBlocks';
import LandClaimBlocksItem from './screens/items/blockItems/LandClaimBlocks';
import MetalReinforcedWoodBlocksItem from './screens/items/blockItems/MetalReinforcedWoodBlocks';
import MetalTrussingItem from './screens/items/blockItems/MetalTrussing';
import PouredReinforcedConcreteBlocksItem from './screens/items/blockItems/PouredReinforcedConcreteBlocks';
import ReinforcedIronBlocksItem from './screens/items/blockItems/ReinforcedIronBlocks';
import StainlessSteelBlocksItem from './screens/items/blockItems/StainlessSteelBlocks';
import SteelBlocksItem from './screens/items/blockItems/SteelBlocks';
import WoodBlocksItem from './screens/items/blockItems/WoodBlocks';
import WoodenShinglesBlocksItem from './screens/items/blockItems/WoodenShinglesBlocks';
import HayBaleItem from './screens/items/blockItems/HayBale';
import AwningWedgeItem from './screens/items/otherMaterials/AwningWedge';
import BrassFaucetv2Item from './screens/items/otherMaterials/BrassFaucetv2';
import BrickPaverBlockItem from './screens/items/otherMaterials/BrickPaverBlock';
import BulletproofGlassItem from './screens/items/otherMaterials/BulletproofGlass';
import CementItem from './screens/items/otherMaterials/Cement';
import CobblestoneWedgeItem from './screens/items/otherMaterials/CobblestoneWedge';
import FarmPlotItem from './screens/items/otherMaterials/FarmPlot';
import FluorescentLightItem from './screens/items/otherMaterials/FluorescentLight';
import IndustrialLightItem from './screens/items/otherMaterials/IndustrialLight';
import IndustrialLightBlubItem from './screens/items/otherMaterials/IndustrialLightBlub';
import IronBarsItem from './screens/items/otherMaterials/IronBars';
import IronLadderItem from './screens/items/otherMaterials/IronLadder';
import MetalCatwalkItem from './screens/items/otherMaterials/MetalCatwalk';
import MetalReinforcedWoodRampItem from './screens/items/otherMaterials/MetalReinforcedWoodRamp';
import ReinforcedWoodRampItem from './screens/items/otherMaterials/ReinforcedWoodRamp';
import ScrapIronRampItem from './screens/items/otherMaterials/ScrapIronRamp';
import ShowerGlassBlockItem from './screens/items/otherMaterials/ShowerGlassBlock';
import SolidRebarRampFrameItem from './screens/items/otherMaterials/SolidRebarRampFrame';
import SteelLadderItem from './screens/items/otherMaterials/SteelLadder';
import VenetianBlindsItem from './screens/items/otherMaterials/VenetianBlinds';
import WoodCatwalkItem from './screens/items/otherMaterials/WoodCatwalk';
import WoodRampItem from './screens/items/otherMaterials/WoodRamp';
import WoodRampFrameItem from './screens/items/otherMaterials/WoodRampFrame';
import WoodenLadderItem from './screens/items/otherMaterials/WoodenLadder';
import WoodenClubItem from './screens/items/clubs/WoodenClubItem';
import CandyCaneClubItem from './screens/items/clubs/CandyCaneClub';
import SteelClubItem from './screens/items/clubs/SteelClub';
import BaseballBatItem from './screens/items/clubs/BaseballBat';
import StoneSledgehammerItem from './screens/items/sledgehammers/StoneSledgehammer';
import IronSledgehammerItem from './screens/items/sledgehammers/IronSledgehammer';
import SteelSledgehammerItem from './screens/items/sledgehammers/SteelSledgehammer';
import StoneSpearItem from './screens/items/spears/StoneSpear';
import IronSpearItem from './screens/items/spears/IronSpear';
import SteelSpearItem from './screens/items/spears/SteelSpear';
import KnuckleWrapsItem from './screens/items/knuckles/KnuckleWrap';
import IronKnucklesItem from './screens/items/knuckles/IronKnuckles';
import SteelKnucklesItem from './screens/items/knuckles/SteelKnuckles';
import PipeBatonItem from './screens/items/batons/PipeBaton';
import StunBatonItem from './screens/items/batons/StunBaton';
import PipePistolItem from './screens/items/handgunsSMG/PipePistol';
import PistolItem from './screens/items/handgunsSMG/Pistol';
import A44MagnumItem from './screens/items/handgunsSMG/A44Magnum';
import A44DesertVultureItem from './screens/items/handgunsSMG/A44DesertVulture';
import SMGItem from './screens/items/handgunsSMG/SMG';
import PrimitiveBowItem from './screens/items/bows/PrimitiveBow';
import WoodenBowItem from './screens/items/bows/WoodenBow';
import IronCrossbowItem from './screens/items/bows/IronCrossbow';
import CompoundBowItem from './screens/items/bows/CompoundBow';
import CompoundCrossbowItem from './screens/items/bows/CompoundCrossbow';
import PipeShotgunItem from './screens/items/shotguns/PipeShotgun';
import DoubleBarrelShotgunItem from './screens/items/shotguns/DoubleBarrelShotgun';
import PumpShotgunItem from './screens/items/shotguns/PumpShotgun';
import AutoShotgunItem from './screens/items/shotguns/AutoShotgun';
import PipeMachineGunItem from './screens/items/machineGuns/PipeMachineGun';
import AK47MachineGunItem from './screens/items/machineGuns/AK47MachineGun';
import TacticalAssaultRifleItem from './screens/items/machineGuns/TacticalAssaultRifle';
import M60MachineGunItem from './screens/items/machineGuns/M60MachineGun';
import PipeRifleItem from './screens/items/rifles/PipeRifle';
import HuntingRifleItem from './screens/items/rifles/HuntingRifle';
import LeverActionRifleItem from './screens/items/rifles/LeverActionRifle';
import SniperRifleItem from './screens/items/rifles/SniperRifle';
import RoboticSledgeItem from './screens/items/roboticTurrets/RoboticSledge';
import RoboticTurretItem from './screens/items/roboticTurrets/RoboticTurret';
import RocketLauncherItem from './screens/items/explosives/RocketLauncher';
import ExplodingArrowItem from './screens/items/explosives/ExplodingArrow';
import ExplodingCrossbowBoltItem from './screens/items/explosives/ExplodingCrossbowBolt';
import RustyBarrelItem from './screens/items/explosives/RustyBarrel';
import TinLandMineItem from './screens/items/explosives/TinLandMine';
import CookingPotMineItem from './screens/items/explosives/CookingPotMine';
import HubCapMineItem from './screens/items/explosives/HubCapMine';
import AirFilterLandMineItem from './screens/items/explosives/AirFilterLandMine';
import TimedChargeItem from './screens/items/explosives/TimedCharge';
import MolotovCocktailItem from './screens/items/explosives/MolotovCocktail';
import PipeBombItem from './screens/items/explosives/PipeBomb';
import ContactGrenadeItem from './screens/items/explosives/ContactGrenade';
import GrenadeItem from './screens/items/explosives/Grenade';
import StickofDynamiteItem from './screens/items/explosives/StickofDynamite';
import BarbedFenceWireItem from './screens/items/trapsTurrets/BarbedFenceWireItem';
import BladeTrapItem from './screens/items/trapsTurrets/BladeTrapItem';
import DartTrapItem from './screens/items/trapsTurrets/DartTrapItem';
import ElectricFencePostItem from './screens/items/trapsTurrets/ElecctricFencePostItem';
import IronSpikesItem from './screens/items/trapsTurrets/IronSpikesItem';
import ShotgunAutoTurretItem from './screens/items/trapsTurrets/ShotgunAutoTurretItem';
import SMGAutoTurretItem from './screens/items/trapsTurrets/SMGAutoTurretItem';
import WoodSpikesItem from './screens/items/trapsTurrets/WoodSpikesItem';
import AnimalFatItem from './screens/items/foodDrinks/AnimalFatItem';
import BlueberriesItem from './screens/items/foodDrinks/BlueberriesItem';
import EarofCornItem from './screens/items/foodDrinks/EarofCornItem';
import EarofSuperCornItem from './screens/items/foodDrinks/EarofSuperCornItem';
import EggItem from './screens/items/foodDrinks/EggItem';
import MushroomsItem from './screens/items/foodDrinks/MushroomsItem';
import PotatoItem from './screens/items/foodDrinks/PotatoItem';
import PumpkinItem from './screens/items/foodDrinks/PumpkinItem';
import RawMeatItem from './screens/items/foodDrinks/RawMeatItem';
import RottingFleshItem from './screens/items/foodDrinks/RottingFleshItem';
import YuccaFruitItem from './screens/items/foodDrinks/YuccaFruitItem';
import CanCatFoodItem from './screens/items/foodDrinks/CanCatFoodItem';
import CanChiliItem from './screens/items/foodDrinks/CanChiliItem';
import CanDogFoodItem from './screens/items/foodDrinks/CanDogFoodItem';
import CanMisoItem from './screens/items/foodDrinks/CanMisoItem';
import CanPastaItem from './screens/items/foodDrinks/CanPastaItem';
import CanPearsItem from './screens/items/foodDrinks/CanPearsItem';
import CanPeasItem from './screens/items/foodDrinks/CanPeasItem';
import CanSalmonItem from './screens/items/foodDrinks/CanSalmonItem';
import CanShamItem from './screens/items/foodDrinks/CanShamItem';
import CanStockItem from './screens/items/foodDrinks/CanStockItem';
import CanTunaItem from './screens/items/foodDrinks/CanTunaItem';
import ChickenRationItem from './screens/items/foodDrinks/ChickenRationItem';
import ChickenSoupItem from './screens/items/foodDrinks/ChickenSoupItem';
import LambRationItem from './screens/items/foodDrinks/LambRationItem';
import LargeBeefRationItem from './screens/items/foodDrinks/LargeBeefRationItem';
import BoiledEggItem from './screens/items/foodDrinks/BoiledEggItem';
import BoiledMeatItem from './screens/items/foodDrinks/BoiledEggItem';
import CharredMeatItem from './screens/items/foodDrinks/CharredMeatItem';
import CornBreadItem from './screens/items/foodDrinks/CornBreadItem';
import GrilledCornItem from './screens/items/foodDrinks/GrilledCornItem';
import GrilledMeatItem from './screens/items/foodDrinks/GrilledMeatItem';
import BlueberryPieItem from './screens/items/foodDrinks/BlueberryPieItem';
import MeatStewItem from './screens/items/foodDrinks/MeatStewItem';
import PumpkinBreadItem from './screens/items/foodDrinks/PumpkinBreadItem';
import PumpkinCheeseCakeItem from './screens/items/foodDrinks/PumpkinCheeseCakeItem';
import PumpkinPieItem from './screens/items/foodDrinks/PumpkinPieItem';
import SteakPotatoMealItem from './screens/items/foodDrinks/SteakPotatoMealItem';
import VegetableStewItem from './screens/items/foodDrinks/VegetableStewItem';
import ChiliDogItem from './screens/items/foodDrinks/ChiliDogItem';
import FishTacosItem from './screens/items/foodDrinks/FishTacosItem';
import GumboStewItem from './screens/items/foodDrinks/GumboStewItem';
import HoboStewItem from './screens/items/foodDrinks/HoboStewItem';
import ShamChowderItem from './screens/items/foodDrinks/ShamChowderItem';
import ShepardsPieItem from './screens/items/foodDrinks/ShepardsPieItem';
import SpaghettiItem from './screens/items/foodDrinks/SpaghettiItem';
import TunaFishGravyToastItem from './screens/items/foodDrinks/TunaFishGravyToastItem';
import CoffeeItem from './screens/items/foodDrinks/CoffeeItem';
import GoldenrodTeaItem from './screens/items/foodDrinks/GoldenrodTeaItem';
import MurkyWaterItem from './screens/items/foodDrinks/MurkyWaterItem';
import RedTeaItem from './screens/items/foodDrinks/RedTeaItem';
import WaterItem from './screens/items/foodDrinks/WaterItem';
import YuccaJuiceItem from './screens/items/foodDrinks/YuccaJuiceItem';
import BeerItem from './screens/items/foodDrinks/BeerItem';
import BlackstrapCoffeeItem from './screens/items/foodDrinks/BlackStrapCoffeeItem';
import MegaCrushItem from './screens/items/foodDrinks/MegaCrushItem';
import PureMineralWaterItem from './screens/items/foodDrinks/PureMineralWaterItem';
import YuccaJuiceSmoothieItem from './screens/items/foodDrinks/YuccaJuiceSmoothieItem';
import GrandpaAwesomeSauceItem from './screens/items/foodDrinks/GrandpaAwesomeSauceItem';
import GrandpaFergitElixirItem from './screens/items/foodDrinks/GrandpaFergitElixirItem';
import GrandpaLearnElixirItem from './screens/items/foodDrinks/GrandpaLearnElixirItem';
import GrandpaMoonshineItem from './screens/items/foodDrinks/GrandpaMoonshineItem';


const MyTheme = {
  dark: true,
  colors: {
    primary: 'red',
    background: 'rgb(20, 20, 20)',
    card: 'black',
    text: 'red',
    border: 'red',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StartingGuide" component={StartingGuide} />
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
        <Stack.Screen name="TrapsTurretsScreen" component={TrapsTurretsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        

          {/* Tools screens */}

        <Stack.Screen name='ToolsScreen' component={ToolsScreen} />
        <Stack.Screen name='ConstructionToolsScreen' component={ConstructionToolsScreen} />
        <Stack.Screen name='ButcheringToolsScreen' component={ButcheringToolsScreen} />
        <Stack.Screen name='DisassemblyToolsScreen' component={DisassemblyToolsScreen} />
        <Stack.Screen name='MiningToolsScreen' component={MiningToolsScreen} />
        <Stack.Screen name='WoodcuttingToolsScreen' component={WoodcuttingToolsScreen} />
        <Stack.Screen name='SpecialToolsScreen' component={SpecialToolsScreen} />

          {/* Clothing screens */}

        <Stack.Screen name='ClothingScreen' component={ClothingScreen} />
        <Stack.Screen name='HatsScreen' component={HatsScreen} />
        <Stack.Screen name='GlassesScreen' component={GlassesScreen} />
        <Stack.Screen name='FaceScreen' component={FaceScreen} />
        <Stack.Screen name='OvercoatsScreen' component={OvercoatsScreen} />
        <Stack.Screen name='ShirtsScreen' component={ShirtsScreen} />
        <Stack.Screen name='PantsScreen' component={PantsScreen} />
        <Stack.Screen name='BootsScreen' component={BootsScreen} />
        <Stack.Screen name='LightHelmetsArmorScreen' component={LightHelmetsArmorScreen} />
        <Stack.Screen name='HeavyHelmetsArmorScreen' component={HeavyHelmetsArmorScreen} />
        <Stack.Screen name='PlantFiberScreen' component={PlantFiberScreen} />
        <Stack.Screen name='PaddedArmorScreen' component={PaddedArmorScreen} />
        <Stack.Screen name='LeatherArmorScreen' component={LeatherArmorScreen} />
        <Stack.Screen name='MilitaryArmorScreen' component={MilitaryArmorScreen} />
        <Stack.Screen name='ScrapArmorScreen' component={ScrapArmorScreen} />
        <Stack.Screen name='IronArmorScreen' component={IronArmorScreen} />
        <Stack.Screen name='SteelArmorScreen' component={SteelArmorScreen} />
        <Stack.Screen name='HazmatSuitScreen' component={HazmatSuitScreen} />
        <Stack.Screen name='GhillieSuitScreen' component={GhillieSuitScreen} />

          {/* Crafting screens */}

        <Stack.Screen name='CraftingScreen' component={CraftingScreen} />
        <Stack.Screen name='WorkstationsScreen' component={WorkstationsScreen} />

          {/* Materials screens */}

        <Stack.Screen name='MaterialsScreen' component={MaterialsScreen} />
        <Stack.Screen name='WindowsScreen' component={WindowsScreen} />
        <Stack.Screen name='TerrainScreen' component={TerrainScreen} />
        <Stack.Screen name='StairsScreen' component={StairsScreen} />
        <Stack.Screen name='SidingScreen' component={SidingScreen} />
        <Stack.Screen name='LightingScreen' component={LightingScreen} />
        <Stack.Screen name='HatchScreen' component={HatchScreen} />
        <Stack.Screen name='FurnitureScreen' component={FurnitureScreen} />
        <Stack.Screen name='FramesScreen' component={FramesScreen} />
        <Stack.Screen name='FencingScreen' component={FencingScreen} />
        <Stack.Screen name='DoorsScreen' component={DoorsScreen} />
        <Stack.Screen name='ContainersScreen' component={ContainersScreen} />
        <Stack.Screen name='BlockItemsScreen' component={BlockItemsScreen} />
        <Stack.Screen name='OtherScreen' component={OtherScreen} />

          {/* Weapons screens */}

        <Stack.Screen name='WeaponsScreen' component={WeaponsScreen} />
        <Stack.Screen name='ClubsScreen' component={ClubsScreen} />
        <Stack.Screen name='SledgehammersScreen' component={SledgehammersScreen} />
        <Stack.Screen name='SpearsScreen' component={SpearsScreen} />
        <Stack.Screen name='KnucklesScreen' component={KnucklesScreen} />
        <Stack.Screen name='KnivesScreen' component={KnivesScreen} />
        <Stack.Screen name='BatonsScreen' component={BatonsScreen} />
        <Stack.Screen name='BowsScreen' component={BowsScreen} />
        <Stack.Screen name='HandgunsSMGScreen' component={HandgunsSMGScreen} />
        <Stack.Screen name='ShotgunsScreen' component={ShotgunsScreen} />
        <Stack.Screen name='MachineGunsScreen' component={MachineGunsScreen} />
        <Stack.Screen name='RiflesScreen' component={RiflesScreen} />
        <Stack.Screen name='RoboticTurretsScreen' component={RoboticTurretsScreen} />
        <Stack.Screen name='ExplosivesScreen' component={ExplosivesScreen} />

        {/* Resources screens */}

        <Stack.Screen name='ResourcesScreen' component={ResourcesScreen} />

          {/* Item/FoodDrinks screens */}

        <Stack.Screen name='FoodDrinksScreen' component={FoodDrinksScreen} />
        <Stack.Screen name='IngredientsScreen' component={IngredientsScreen} />
        <Stack.Screen name='CannedFoodsScreen' component={CannedFoodsScreen} />
        <Stack.Screen name='CookedFoodsScreen' component={CookedFoodsScreen} />
        <Stack.Screen name='DrinksScreen' component={DrinksScreen} />
        

          {/* Item/Hats screens */}

        <Stack.Screen name='BaseballCapItem' component={BaseballCapItem} />
        <Stack.Screen name='CowboyHatItem' component={CowboyHatItem} />
        <Stack.Screen name='PressboyCapItem' component={PressboyCapItem} />
        <Stack.Screen name='SkullCapItem' component={SkullCapItem} />

          {/* Item/Glasses screens */}

        <Stack.Screen name='LuckyGogglesItem' component={LuckyGogglesItem} />
        <Stack.Screen name='SkiGogglesItem' component={SkiGogglesItem} />
        <Stack.Screen name='NerdyGlassesItem' component={NerdyGlassesItem} />
        <Stack.Screen name='NightVisionGogglesItem' component={NightVisionGogglesItem} />
        <Stack.Screen name='ShadesItem' component={ShadesItem} />
        <Stack.Screen name='ToughGuySunglassesItem' component={ToughGuySunglassesItem} />

          {/* Item/face screens */}

        <Stack.Screen name='BandanaItem' component={BandanaItem} />
        <Stack.Screen name='CigarItem' component={CigarItem} />

          {/* Item/Overcoats screens */}

        <Stack.Screen name='LeatherPonchoItem' component={LeatherPonchoItem} />
        <Stack.Screen name='CollegeJacketItem' component={CollegeJacketItem} />
        <Stack.Screen name='JacketItem' component={JacketItem} />
        <Stack.Screen name='LeatherDusterItem' component={LeatherDusterItem} />
        <Stack.Screen name='PufferCoatItem' component={PufferCoatItem} />
        <Stack.Screen name='SuitJacketItem' component={SuitJacketItem} />

          {/* Item/Shirts screens */}

        <Stack.Screen name='BDUTopItem' component={BDUTopItem} />
        <Stack.Screen name='HoodedSweatshirtItem' component={HoodedSweatshirtItem} />
        <Stack.Screen name='FlannelShirtItem' component={FlannelShirtItem} />
        <Stack.Screen name='ShirtItem' component={ShirtItem} />
        <Stack.Screen name='SweatshirtItem' component={SweatshirtItem} />
        <Stack.Screen name='TankTopItem' component={TankTopItem} />
        <Stack.Screen name='TShirtItem' component={TShirtItem} />

          {/* Item/Pants screens */}

        <Stack.Screen name='BDUBottomsItem' component={BDUBottomsItem} />
        <Stack.Screen name='DenimPantsItem' component={DenimPantsItem} />
        <Stack.Screen name='ShortsItem' component={ShortsItem} />
        <Stack.Screen name='OverallsItem' component={OverallsItem} />
        <Stack.Screen name='SkirtItem' component={SkirtItem} />
        <Stack.Screen name='SuitPantsItem' component={SuitPantsItem} />

          {/* Item/boots screens */}

        <Stack.Screen name='HighPerfRunShoesItem' component={HighPerfRunShoesItem} />
        <Stack.Screen name='CowboyBootsItem' component={CowboyBootsItem} />
        <Stack.Screen name='DressShoesItem' component={DressShoesItem} />
        <Stack.Screen name='GothicBootsItem' component={GothicBootsItem} />
        <Stack.Screen name='RunningShoesItem' component={RunningShoesItem} />
        <Stack.Screen name='WornBootsItem' component={WornBootsItem} />

          {/* Item/Light Armor Helmets screens //// Complete these after the 'sets' */}


          {/* Item/Heavy Armor Helmets screens //// Complete these after the 'sets' */}


              {/* may beable to use the already existing screen stacks. i think only the general 'set' screen will be needed???*/}
          {/* Item/ Plant Fiber Set screens */}

        <Stack.Screen name='PlantFiberBootsItem' component={PlantFiberBootsItem} />
        <Stack.Screen name='PlantFiberGlovesItem' component={PlantFiberGlovesItem} />
        <Stack.Screen name='PlantFiberHatItem' component={PlantFiberHatItem} />
        <Stack.Screen name='PlantFiberHoodItem' component={PlantFiberHoodItem} />
        <Stack.Screen name='PlantFiberPantsItem' component={PlantFiberPantsItem} />
        <Stack.Screen name='PlantFiberShirtItem' component={PlantFiberShirtItem} />

          {/* Item/Hazmat Set screens */}


          {/* Item/Ghillie Suit Set screens */}


          {/* Item/Padded Armor Set screens */}

        <Stack.Screen name='PaddedGlovesItem' component={PaddedGlovesItem} />
        <Stack.Screen name='PaddedHoodItem' component={PaddedHoodItem} />
        <Stack.Screen name='PaddedChestItem' component={PaddedChestItem} />
        <Stack.Screen name='PaddedLegItem' component={PaddedLegItem} />
        <Stack.Screen name='PaddedBootsItem' component={PaddedBootsItem} />

          {/* Item/Leather Armor Set screens */}

        <Stack.Screen name='LeatherBootsItem' component={LeatherBootsItem} />
        <Stack.Screen name='LeatherGlovesItem' component={LeatherGlovesItem} />
        <Stack.Screen name='LeatherHoodItem' component={LeatherHoodItem} />
        <Stack.Screen name='LeatherChestItem' component={LeatherChestItem} />
        <Stack.Screen name='LeatherLegItem' component={LeatherLegItem} />

          {/* Item/Military Armor Set screens */}

        <Stack.Screen name='MilitaryBootsItem' component={MilitaryBootsItem} />
        <Stack.Screen name='MilitaryStealthBootsItem' component={MilitaryStealthBootsItem} />
        <Stack.Screen name='MilitaryGlovesItem' component={MilitaryGlovesItem} />
        <Stack.Screen name='MilitaryHelmetItem' component={MilitaryHelmetItem} />
        <Stack.Screen name='MilitaryLegItem' component={MilitaryLegItem} />
        <Stack.Screen name='MilitaryVestItem' component={MilitaryVestItem} />
        <Stack.Screen name='MiningHelmetItem' component={MiningHelmetItem} />

          {/* Item/Scrap Armor Set screens */}

        <Stack.Screen name='ScrapBootsItem' component={ScrapBootsItem} />
        <Stack.Screen name='ScrapChestItem' component={ScrapChestItem} />
        <Stack.Screen name='ScrapGlovesItem' component={ScrapGlovesItem} />
        <Stack.Screen name='ScrapHelmetItem' component={ScrapHelmetItem} />
        <Stack.Screen name='ScrapLegItem' component={ScrapLegItem} />

          {/* Item/Iron Armor Set screens */}

        <Stack.Screen name='IronBootsItem' component={IronBootsItem} />
        <Stack.Screen name='IronChestItem' component={IronChestItem} />
        <Stack.Screen name='IronGlovesItem' component={IronGlovesItem} />
        <Stack.Screen name='IronHelmetItem' component={IronHelmetItem} />
        <Stack.Screen name='IronLegItem' component={IronLegItem} />

          {/* Item/Steel Armor Set screens */}

        <Stack.Screen name='SteelBootsItem' component={SteelBootsItem} />
        <Stack.Screen name='SteelChestItem' component={SteelChestItem} />
        <Stack.Screen name='SteelGlovesItem' component={SteelGlovesItem} />
        <Stack.Screen name='SteelHelmetItem' component={SteelHelmetItem} />
        <Stack.Screen name='SteelLegItem' component={SteelLegItem} />

          {/* Item/Hazmat Set screens */}

        <Stack.Screen name='HazmatBootsItem' component={HazmatBootsItem} />
        <Stack.Screen name='HazmatGlovesItem' component={HazmatGlovesItem} />
        <Stack.Screen name='HazmatMaskItem' component={HazmatMaskItem} />
        <Stack.Screen name='HazmatPantsItem' component={HazmatPantsItem} />
        <Stack.Screen name='HazmatShirtItem' component={HazmatShirtItem} />

          {/* Item/Ghillie Suit Set screens */}

        <Stack.Screen name='GhillieHoodItem' component={GhillieHoodItem} />
        <Stack.Screen name='GhillieJacketItem' component={GhillieJacketItem} />
        <Stack.Screen name='GhilliePantsItem' component={GhilliePantsItem} />

          {/* Item/tools/Construction tools screens */}

        <Stack.Screen name='StoneAxeItem' component={StoneAxeItem} />
        <Stack.Screen name='TazaStoneAxeItem' component={TazaStoneAxeItem} />
        <Stack.Screen name='ClawHammerItem' component={ClawHammerItem} />
        <Stack.Screen name='NailgunItem' component={NailgunItem} />

          {/* Item/tools/Butchering tools screens */}

        <Stack.Screen name='BoneKnifeItem' component={BoneKnifeItem} />
        <Stack.Screen name='CandyCaneKnifeItem' component={CandyCaneKnifeItem} />
        <Stack.Screen name='HuntingKnifeItem' component={HuntingKnifeItem} />
        <Stack.Screen name='MacheteItem' component={MacheteItem} />

          {/* Item/tools/Desassembaly tools screens */}

        <Stack.Screen name='WrenchItem' component={WrenchItem} />
        <Stack.Screen name='RatchetItem' component={RatchetItem} />
        <Stack.Screen name='ImpactDriverItem' component={ImpactDriverItem} />

          {/* Item/tools/Mining tools screens */}

        <Stack.Screen name='StoneShovelItem' component={StoneShovelItem} />
        <Stack.Screen name='IronShovelItem' component={IronShovelItem} />
        <Stack.Screen name='IronPickaxeItem' component={IronPickaxeItem} />
        <Stack.Screen name='SteelShovelItem' component={SteelShovelItem} />
        <Stack.Screen name='SteelPickaxeItem' component={SteelPickaxeItem} />
        <Stack.Screen name='AugerItem' component={AugerItem} />

          {/* Item/tools/Woodcutting tools screens */}

        <Stack.Screen name='IronFireaxeItem' component={IronFireaxeItem} />
        <Stack.Screen name='SteelAxeItem' component={SteelAxeItem} />
        <Stack.Screen name='ChainsawItem' component={ChainsawItem} />

          {/* Item/tools/Special tools screens */}

        <Stack.Screen name='BucketItem' component={BucketItem} />
        <Stack.Screen name='PaintBrushItem' component={PaintBrushItem} />
        <Stack.Screen name='LockpickItem' component={LockpickItem} />
        <Stack.Screen name='WireToolItem' component={WireToolItem} />

          {/* Item/tools/Special tools screens */}

        <Stack.Screen name='CampfireItem' component={CampfireItem} />
        <Stack.Screen name='ForgeItem' component={ForgeItem} />
        <Stack.Screen name='WorkbenchItem' component={WorkbenchItem} />
        <Stack.Screen name='CementMixerItem' component={CementMixerItem} />
        <Stack.Screen name='ChemistryStationItem' component={ChemistryStationItem} />
        <Stack.Screen name='DewCollectorItem' component={DewCollectorItem} />

          {/* Item/Materials/Windows screens */}

        <Stack.Screen name='WoodWindowItem' component={WoodWindowItem} />

          {/* Item/Materials/Terrain screens */}

        <Stack.Screen name='AsphaltItem' component={AsphaltItem} />

          {/* Item/Materials/Stairs screens */}

        <Stack.Screen name='BrickStairsItem' component={BrickStairsItem} />
        <Stack.Screen name='CobblestoneStairsItem' component={CobblestoneStairsItem} />
        <Stack.Screen name='ConcreteStairsItem' component={ConcreteStairsItem} />
        <Stack.Screen name='FlagstoneStairsItem' component={FlagstoneStairsItem} />
        <Stack.Screen name='ReinforcedScrapIronStairsItem' component={ReinforcedScrapIronStairsItem} />
        <Stack.Screen name='SteelStairsItem' component={SteelStairsItem} />
        <Stack.Screen name='WoodenStairsItem' component={WoodenStairsItem} />

          {/* Item/Materials/Siding screens */}

        <Stack.Screen name='PlywoodItem' component={PlywoodItem} />

          {/* Item/Materials/Lighting screens */}

        <Stack.Screen name='BasicLightBulbItem' component={BasicLightBulbItem} />
        <Stack.Screen name='BurningBarrelItem' component={BurningBarrelItem} />
        <Stack.Screen name='CandleItem' component={CandleItem} />
        <Stack.Screen name='OldOutdoorLightItem' component={OldOutdoorLightItem} />

          {/* Item/Materials/Lighting screens */}

        <Stack.Screen name='IronHatchItem' component={IronHatchItem} />
        <Stack.Screen name='IronHatchv2Item' component={IronHatchv2Item} />
        <Stack.Screen name='IronHatchv3Item' component={IronHatchv3Item} />
        <Stack.Screen name='SteelHatchItem' component={SteelHatchItem} />
        <Stack.Screen name='SteelHatchPoweredItem' component={SteelHatchPoweredItem} />
        <Stack.Screen name='VaultHatchv2Item' component={VaultHatchv2Item} />
        <Stack.Screen name='VaultHatchv3Item' component={VaultHatchv3Item} />
        <Stack.Screen name='WoodenHatchItem' component={WoodenHatchItem} />
        <Stack.Screen name='WoodenHatchv2Item' component={WoodenHatchv2Item} />
        <Stack.Screen name='WoodenHatchv3Item' component={WoodenHatchv3Item} />

          {/* Item/Materials/Furniture screens */}

        <Stack.Screen name='AirConditionerItem' component={AirConditionerItem} />
        <Stack.Screen name='BedrollItem' component={BedrollItem} />
        <Stack.Screen name='BrassFaucetItem' component={BrassFaucetItem} />
        <Stack.Screen name='WashingMachineItem' component={WashingMachineItem} />

          {/* Item/Materials/Frames screens */}

        <Stack.Screen name='WoodFrameItem' component={WoodFrameItem} />

          {/* Item/Materials/Fencing screens */}

        <Stack.Screen name='WoodFenceItem' component={WoodFenceItem} />

          {/* Item/Materials/Doors screens */}

        <Stack.Screen name='GarageDoorMetalItem' component={GarageDoorMetalItem} />
        <Stack.Screen name='GarageDoorMetalv2Item' component={GarageDoorMetalv2Item} />
        <Stack.Screen name='GarageDoorMetalv3Item' component={GarageDoorMetalv3Item} />
        <Stack.Screen name='IronDoorItem' component={IronDoorItem} />
        <Stack.Screen name='IronDoorv2Item' component={IronDoorv2Item} />
        <Stack.Screen name='IronDoorv3Item' component={IronDoorv3Item} />
        <Stack.Screen name='JailDoorItem' component={JailDoorItem} />
        <Stack.Screen name='MetalReinforcedWoodenDoorItem' component={MetalReinforcedWoodenDoorItem} />
        <Stack.Screen name='ReinforcedDrawbridgeItem' component={ReinforcedDrawbridgeItem} />
        <Stack.Screen name='ReinforcedDrawbridgePoweredItem' component={ReinforcedDrawbridgePoweredItem} />
        <Stack.Screen name='ReinforcedSecureWoodenDoorItem' component={ReinforcedSecureWoodenDoorItem} />
        <Stack.Screen name='VaultDoorItem' component={VaultDoorItem} />
        <Stack.Screen name='VaultDoorv2Item' component={VaultDoorv2Item} />
        <Stack.Screen name='VaultDoorv3Item' component={VaultDoorv3Item} />
        <Stack.Screen name='WoodDoorItem' component={WoodDoorItem} />

          {/* Item/Materials/Containers screens */}

        <Stack.Screen name='CupboardItem' component={CupboardItem} />
        <Stack.Screen name='GreenDrawerItem' component={GreenDrawerItem} />
        <Stack.Screen name='GunSafeItem' component={GunSafeItem} />
        <Stack.Screen name='MailBoxItem' component={MailBoxItem} />
        <Stack.Screen name='MailDropBox' component={MailDropBox} />
        <Stack.Screen name='MicrowaveItem' component={MicrowaveItem} />
        <Stack.Screen name='SecureStorageChestItem' component={SecureStorageChestItem} />
        <Stack.Screen name='StorageBoxItem' component={StorageBoxItem} />
        <Stack.Screen name='TrashCanItem' component={TrashCanItem} />
        <Stack.Screen name='WoodenChestItem' component={WoodenChestItem} />

          {/* Item/Materials/Blocks screens */}

        <Stack.Screen name='AwningRedBlocksItem' component={AwningRedBlocksItem} />
        <Stack.Screen name='BrickBlocksItem' component={BrickBlocksItem} />
        <Stack.Screen name='ClayRoofBlocksItem' component={ClayRoofBlocksItem} />
        <Stack.Screen name='CobblestoneBlocksItem' component={CobblestoneBlocksItem} />
        <Stack.Screen name='ConcreteBlocksItem' component={ConcreteBlocksItem} />
        <Stack.Screen name='ConcreteFormBlocksItem' component={ConcreteFormBlocksItem} />
        <Stack.Screen name='LandClaimBlocksItem' component={LandClaimBlocksItem} />
        <Stack.Screen name='MetalReinforcedWoodBlocksItem' component={MetalReinforcedWoodBlocksItem} />
        <Stack.Screen name='MetalTrussingItem' component={MetalTrussingItem} />
        <Stack.Screen name='PouredReinforcedConcreteBlocksItem' component={PouredReinforcedConcreteBlocksItem} />
        <Stack.Screen name='ReinforcedIronBlocksItem' component={ReinforcedIronBlocksItem} />
        <Stack.Screen name='StainlessSteelBlocksItem' component={StainlessSteelBlocksItem} />
        <Stack.Screen name='SteelBlocksItem' component={SteelBlocksItem} />
        <Stack.Screen name='WoodBlocksItem' component={WoodBlocksItem} />
        <Stack.Screen name='WoodenShinglesBlocksItem' component={WoodenShinglesBlocksItem} />
        <Stack.Screen name='HayBaleItem' component={HayBaleItem} />

          {/* Item/Materials/Other Materials screens */}

        <Stack.Screen name='AwningWedgeItem' component={AwningWedgeItem} />
        <Stack.Screen name='BrassFaucetv2Item' component={BrassFaucetv2Item} />
        <Stack.Screen name='BrickPaverBlockItem' component={BrickPaverBlockItem} />
        <Stack.Screen name='BulletproofGlassItem' component={BulletproofGlassItem} />
        <Stack.Screen name='CementItem' component={CementItem} />
        <Stack.Screen name='CobblestoneWedgeItem' component={CobblestoneWedgeItem} />
        <Stack.Screen name='FarmPlotItem' component={FarmPlotItem} />
        <Stack.Screen name='FluorescentLightItem' component={FluorescentLightItem} />
        <Stack.Screen name='IndustrialLightItem' component={IndustrialLightItem} />
        <Stack.Screen name='IndustrialLightBlubItem' component={IndustrialLightBlubItem} />
        <Stack.Screen name='IronBarsItem' component={IronBarsItem} />
        <Stack.Screen name='IronLadderItem' component={IronLadderItem} />
        <Stack.Screen name='MetalCatwalkItem' component={MetalCatwalkItem} />
        <Stack.Screen name='MetalReinforcedWoodRampItem' component={MetalReinforcedWoodRampItem} />
        <Stack.Screen name='ReinforcedWoodRampItem' component={ReinforcedWoodRampItem} />
        <Stack.Screen name='ScrapIronRampItem' component={ScrapIronRampItem} />
        <Stack.Screen name='ShowerGlassBlockItem' component={ShowerGlassBlockItem} />
        <Stack.Screen name='SolidRebarRampFrameItem' component={SolidRebarRampFrameItem} />
        <Stack.Screen name='SteelLadderItem' component={SteelLadderItem} />
        <Stack.Screen name='VenetianBlindsItem' component={VenetianBlindsItem} />
        <Stack.Screen name='WoodCatwalkItem' component={WoodCatwalkItem} />
        <Stack.Screen name='WoodRampItem' component={WoodRampItem} />
        <Stack.Screen name='WoodRampFrameItem' component={WoodRampFrameItem} />
        <Stack.Screen name='WoodenLadderItem' component={WoodenLadderItem} />

          {/* Item/Weapons/Clubs screens */}

        <Stack.Screen name='WoodenClubItem' component={WoodenClubItem} />
        <Stack.Screen name='CandyCaneClubItem' component={CandyCaneClubItem} />
        <Stack.Screen name='SteelClubItem' component={SteelClubItem} />
        <Stack.Screen name='BaseballBatItem' component={BaseballBatItem} />

          {/* Item/Weapons/Sledgehammers screens */}

        <Stack.Screen name='StoneSledgehammerItem' component={StoneSledgehammerItem} />
        <Stack.Screen name='IronSledgehammerItem' component={IronSledgehammerItem} />
        <Stack.Screen name='SteelSledgehammerItem' component={SteelSledgehammerItem} />

          {/* Item/Weapons/Spears screens */}

        <Stack.Screen name='StoneSpearItem' component={StoneSpearItem} />
        <Stack.Screen name='IronSpearItem' component={IronSpearItem} />
        <Stack.Screen name='SteelSpearItem' component={SteelSpearItem} />

          {/* Item/Weapons/Knickles screens */}

        <Stack.Screen name='KnuckleWrapsItem' component={KnuckleWrapsItem} />
        <Stack.Screen name='IronKnucklesItem' component={IronKnucklesItem} />
        <Stack.Screen name='SteelKnucklesItem' component={SteelKnucklesItem} />

          {/* Item/Weapons/Batons screens */}

        <Stack.Screen name='PipeBatonItem' component={PipeBatonItem} />
        <Stack.Screen name='StunBatonItem' component={StunBatonItem} />

          {/* Item/Weapons/Bows screens */}

        <Stack.Screen name='PrimitiveBowItem' component={PrimitiveBowItem} />
        <Stack.Screen name='WoodenBowItem' component={WoodenBowItem} />
        <Stack.Screen name='IronCrossbowItem' component={IronCrossbowItem} />
        <Stack.Screen name='CompoundBowItem' component={CompoundBowItem} />
        <Stack.Screen name='CompoundCrossbowItem' component={CompoundCrossbowItem} />

          {/* Item/Weapons/Handguns & SMG screens */}

        <Stack.Screen name='PipePistolItem' component={PipePistolItem} />
        <Stack.Screen name='PistolItem' component={PistolItem} />
        <Stack.Screen name='A44MagnumItem' component={A44MagnumItem} />
        <Stack.Screen name='A44DesertVultureItem' component={A44DesertVultureItem} />
        <Stack.Screen name='SMGItem' component={SMGItem} />

          {/* Item/Weapons/Shotguns screens */}

        <Stack.Screen name='PipeShotgunItem' component={PipeShotgunItem} />
        <Stack.Screen name='DoubleBarrelShotgunItem' component={DoubleBarrelShotgunItem} />
        <Stack.Screen name='PumpShotgunItem' component={PumpShotgunItem} />
        <Stack.Screen name='AutoShotgunItem' component={AutoShotgunItem} />

          {/* Item/Weapons/Machine Guns screens */}

        <Stack.Screen name='PipeMachineGunItem' component={PipeMachineGunItem} />
        <Stack.Screen name='AK47MachineGunItem' component={AK47MachineGunItem} />
        <Stack.Screen name='TacticalAssaultRifleItem' component={TacticalAssaultRifleItem} />
        <Stack.Screen name='M60MachineGunItem' component={M60MachineGunItem} />

          {/* Item/Weapons/Rifles screens */}

        <Stack.Screen name='PipeRifleItem' component={PipeRifleItem} />
        <Stack.Screen name='HuntingRifleItem' component={HuntingRifleItem} />
        <Stack.Screen name='LeverActionRifleItem' component={LeverActionRifleItem} />
        <Stack.Screen name='SniperRifleItem' component={SniperRifleItem} />

          {/* Item/Weapons/Robotic Turrets screens */}

        <Stack.Screen name='RoboticSledgeItem' component={RoboticSledgeItem} />
        <Stack.Screen name='RoboticTurretItem' component={RoboticTurretItem} />

          {/* Item/Weapons/Explosives screens */}

        <Stack.Screen name='RocketLauncherItem' component={RocketLauncherItem} />
        <Stack.Screen name='ExplodingArrowItem' component={ExplodingArrowItem} />
        <Stack.Screen name='ExplodingCrossbowBoltItem' component={ExplodingCrossbowBoltItem} />
        <Stack.Screen name='RustyBarrelItem' component={RustyBarrelItem} />
        <Stack.Screen name='TinLandMineItem' component={TinLandMineItem} />
        <Stack.Screen name='CookingPotMineItem' component={CookingPotMineItem} />
        <Stack.Screen name='HubCapMineItem' component={HubCapMineItem} />
        <Stack.Screen name='AirFilterLandMineItem' component={AirFilterLandMineItem} />
        <Stack.Screen name='TimedChargeItem' component={TimedChargeItem} />
        <Stack.Screen name='MolotovCocktailItem' component={MolotovCocktailItem} />
        <Stack.Screen name='PipeBombItem' component={PipeBombItem} />
        <Stack.Screen name='ContactGrenadeItem' component={ContactGrenadeItem} />
        <Stack.Screen name='GrenadeItem' component={GrenadeItem} />
        <Stack.Screen name='StickofDynamiteItem' component={StickofDynamiteItem} />

          {/* Item/TrapsTurrets Item screens */}

        <Stack.Screen name='BarbedFenceWireItem' component={BarbedFenceWireItem} />
        <Stack.Screen name='BladeTrapItem' component={BladeTrapItem} />
        <Stack.Screen name='DartTrapItem' component={DartTrapItem} />
        <Stack.Screen name='ElectricFencePostItem' component={ElectricFencePostItem} />
        <Stack.Screen name='IronSpikesItem' component={IronSpikesItem} />
        <Stack.Screen name='ShotgunAutoTurretItem' component={ShotgunAutoTurretItem} />
        <Stack.Screen name='SMGAutoTurretItem' component={SMGAutoTurretItem} />
        <Stack.Screen name='WoodSpikesItem' component={WoodSpikesItem} />

          {/* Item/FoodDrinks/ Ingridients Item screens */}

        <Stack.Screen name='AnimalFatItem' component={AnimalFatItem} />
        <Stack.Screen name='BlueberriesItem' component={BlueberriesItem} />
        <Stack.Screen name='EarofCornItem' component={EarofCornItem} />
        <Stack.Screen name='EarofSuperCornItem' component={EarofSuperCornItem} />
        <Stack.Screen name='EggItem' component={EggItem} />
        <Stack.Screen name='MushroomsItem' component={MushroomsItem} />
        <Stack.Screen name='PotatoItem' component={PotatoItem} />
        <Stack.Screen name='PumpkinItem' component={PumpkinItem} />
        <Stack.Screen name='RawMeatItem' component={RawMeatItem} />
        <Stack.Screen name='RottingFleshItem' component={RottingFleshItem} />
        <Stack.Screen name='YuccaFruitItem' component={YuccaFruitItem} />

          {/* Item/FoodDrinks/ Canned foods Item screens */}

        <Stack.Screen name='CanCatFoodItem' component={CanCatFoodItem} />
        <Stack.Screen name='CanChiliItem' component={CanChiliItem} />
        <Stack.Screen name='CanDogFoodItem' component={CanDogFoodItem} />
        <Stack.Screen name='CanMisoItem' component={CanMisoItem} />
        <Stack.Screen name='CanPastaItem' component={CanPastaItem} />
        <Stack.Screen name='CanPearsItem' component={CanPearsItem} />
        <Stack.Screen name='CanPeasItem' component={CanPeasItem} />
        <Stack.Screen name='CanSalmonItem' component={CanSalmonItem} />
        <Stack.Screen name='CanShamItem' component={CanShamItem} />
        <Stack.Screen name='CanStockItem' component={CanStockItem} />
        <Stack.Screen name='CanTunaItem' component={CanTunaItem} />
        <Stack.Screen name='ChickenRationItem' component={ChickenRationItem} />
        <Stack.Screen name='ChickenSoupItem' component={ChickenSoupItem} />
        <Stack.Screen name='LambRationItem' component={LambRationItem} />
        <Stack.Screen name='LargeBeefRationItem' component={LargeBeefRationItem} />

          {/* Item/FoodDrinks/ Cooked foods Item screens */}

            {/* Early Game */}

        <Stack.Screen name='BoiledEggItem' component={BoiledEggItem} />
        <Stack.Screen name='BoiledMeatItem' component={BoiledMeatItem} />
        <Stack.Screen name='CharredMeatItem' component={CharredMeatItem} />
        <Stack.Screen name='CornBreadItem' component={CornBreadItem} />
        <Stack.Screen name='GrilledCornItem' component={GrilledCornItem} />
        <Stack.Screen name='GrilledMeatItem' component={GrilledMeatItem} />

            {/* Mid Game */}

        <Stack.Screen name='BlueberryPieItem' component={BlueberryPieItem} />
        <Stack.Screen name='MeatStewItem' component={MeatStewItem} />
        <Stack.Screen name='PumpkinBreadItem' component={PumpkinBreadItem} />
        <Stack.Screen name='PumpkinCheeseCakeItem' component={PumpkinCheeseCakeItem} />
        <Stack.Screen name='PumpkinPieItem' component={PumpkinPieItem} />
        <Stack.Screen name='SteakPotatoMealItem' component={SteakPotatoMealItem} />
        <Stack.Screen name='VegetableStewItem' component={VegetableStewItem} />

            {/* Late Game */}

        <Stack.Screen name='ChiliDogItem' component={ChiliDogItem} />
        <Stack.Screen name='FishTacosItem' component={FishTacosItem} />
        <Stack.Screen name='GumboStewItem' component={GumboStewItem} />
        <Stack.Screen name='HoboStewItem' component={HoboStewItem} />
        <Stack.Screen name='ShamChowderItem' component={ShamChowderItem} />
        <Stack.Screen name='ShepardsPieItem' component={ShepardsPieItem} />
        <Stack.Screen name='SpaghettiItem' component={SpaghettiItem} />
        <Stack.Screen name='TunaFishGravyToastItem' component={TunaFishGravyToastItem} />

          {/* Item/FoodDrinks/ Drinks Item screens */}

            {/* Early Game */}

        <Stack.Screen name='CoffeeItem' component={CoffeeItem} />
        <Stack.Screen name='GoldenrodTeaItem' component={GoldenrodTeaItem} />
        <Stack.Screen name='MurkyWaterItem' component={MurkyWaterItem} />
        <Stack.Screen name='RedTeaItem' component={RedTeaItem} />
        <Stack.Screen name='WaterItem' component={WaterItem} />
        <Stack.Screen name='YuccaJuiceItem' component={YuccaJuiceItem} />
            {/* Mid Game */}

        <Stack.Screen name='BeerItem' component={BeerItem} />
        <Stack.Screen name='BlackstrapCoffeeItem' component={BlackstrapCoffeeItem} />
        <Stack.Screen name='MegaCrushItem' component={MegaCrushItem} />
        <Stack.Screen name='PureMineralWaterItem' component={PureMineralWaterItem} />
        <Stack.Screen name='YuccaJuiceSmoothieItem' component={YuccaJuiceSmoothieItem} />

            {/* Late Game */}

        <Stack.Screen name='GrandpaAwesomeSauceItem' component={GrandpaAwesomeSauceItem} />
        <Stack.Screen name='GrandpaFergitElixirItem' component={GrandpaFergitElixirItem} />
        <Stack.Screen name='GrandpaLearnElixirItem' component={GrandpaLearnElixirItem} />
        <Stack.Screen name='GrandpaMoonshineItem' component={GrandpaMoonshineItem} />

          {/* Mechanics Screen */}

        <Stack.Screen name='MechanicsScreen' component={MechanicsScreen} />
        <Stack.Screen name='SurvivalScreen' component={SurvivalScreen} />
        <Stack.Screen name='CombatDamageScreen' component={CombatDamageScreen} />
        <Stack.Screen name='LevelingSystemScreen' component={LevelingSystemScreen} />
        <Stack.Screen name='CraftingSystemScreen' component={CraftingSystemScreen} />
        <Stack.Screen name='RepairingItemScreen' component={RepairingItemScreen} />
        <Stack.Screen name='ItemSystemScreen' component={ItemSystemScreen} />
        <Stack.Screen name='MenuInterfaceScreen' component={MenuInterfaceScreen} />
        <Stack.Screen name='ResourcesSystemScreen' component={ResourcesSystemScreen} />
        <Stack.Screen name='ConstructingBuildingsScreen' component={ConstructingBuildingsScreen} />
        <Stack.Screen name='AmbienceSystemScreen' component={AmbienceSystemScreen} />
        <Stack.Screen name='ZombiesScreen' component={ZombiesScreen} />
        <Stack.Screen name='ElectricityScreen' component={ElectricityScreen} />
        <Stack.Screen name='HealthSystemScreen' component={HealthSystemScreen} />
        <Stack.Screen name='MiningSystemScreen' component={MiningSystemScreen} />


          {/* 
            ### All the Screen and Items Info and descriptions
            
            ### More Screens?
              Durability
              Structual Integrity (may already be apart of another mechanic)
              Skills and Perks List (with Button on mechanics page)
              Stealth?
              Navs Locations
              
                */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    marginBottom: 5,
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  }
});
