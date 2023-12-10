{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function OtherScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Campfire Item</Text>
        <Button title="Awning Wedge" onPress={() => navigation.navigate('AwningWedgeItem')} />
        <Button title="Brass Faucet v2" onPress={() => navigation.navigate('BrassFaucetv2Item')} />
        <Button title="Brick Paver Block" onPress={() => navigation.navigate('BrickPaverBlockItem')} />
        <Button title="Bulletproof Glass" onPress={() => navigation.navigate('BulletproofGlassItem')} />
        <Button title="Cement" onPress={() => navigation.navigate('CementItem')} />
        <Button title="Cobblestone Wedge" onPress={() => navigation.navigate('CobblestoneWedgeItem')} />
        <Button title="Farm Plot" onPress={() => navigation.navigate('FarmPlotItem')} />
        <Button title="Fluorescent Light" onPress={() => navigation.navigate('FluorescentLightItem')} />
        <Button title="Industrial Light" onPress={() => navigation.navigate('IndustrialLightItem')} />
        <Button title="Industrial Light Bulb" onPress={() => navigation.navigate('IndustrialLightBlubItem')} />
        <Button title="Iron Bars" onPress={() => navigation.navigate('IronBarsItem')} />
        <Button title="Iron Ladder" onPress={() => navigation.navigate('IronLadderItem')} />
        <Button title="Metal Catwalk" onPress={() => navigation.navigate('MetalCatwalkItem')} />
        <Button title="Metal Reinforced Wood Ramp" onPress={() => navigation.navigate('MetalReinforcedWoodRampItem')} />
        <Button title="Reinforced Wood Ramp" onPress={() => navigation.navigate('ReinforcedWoodRampItem')} />
        <Button title="Scrap Iron Ramp" onPress={() => navigation.navigate('ScrapIronRampItem')} />
        <Button title="Shower Glass Block" onPress={() => navigation.navigate('ShowerGlassBlockItem')} />
        <Button title="Solid Rebar Ramp Frame" onPress={() => navigation.navigate('SolidRebarRampFrameItem')} />
        <Button title="Steel Ladder" onPress={() => navigation.navigate('SteelLadderItem')} />
        <Button title="Venetian Blinds" onPress={() => navigation.navigate('VenetianBlindsItem')} />
        <Button title="Wood Catwalk" onPress={() => navigation.navigate('WoodCatwalkItem')} />
        <Button title="Wood Ramp" onPress={() => navigation.navigate('WoodRampItem')} />
        <Button title="Wood Ramp Frame" onPress={() => navigation.navigate('WoodRampFrameItem')} />
        <Button title="Wooden Ladder" onPress={() => navigation.navigate('WoodenLadderItem')} />
      </ScrollView>
    );
  }

export default OtherScreen;