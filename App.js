{/*   */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
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





export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StartingGuide" component={StartingGuide} />
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
        

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

          {/* Mechanics / descriptions / break downs -for- crafting, farming, food system, Zombies, electricity, game modes, heath, physics, stealth, Skill and Perks */}


          {/* Nav map _and other?_ Locations */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
