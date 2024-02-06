{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function OtherScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Other Items</Text>
        
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('AwningWedgeItem')} >

          <Text style={[styles.buttonText]}>Awning Wedge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BrassFaucetv2Item')} >

          <Text style={[styles.buttonText]}>Brass Faucet v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BrickPaverBlockItem')} >

          <Text style={[styles.buttonText]}>Brick Paver Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BulletproofGlassItem')} >

          <Text style={[styles.buttonText]}>Bulletproof Glass</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('CementItem')} >

          <Text style={[styles.buttonText]}>Cement</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('CobblestoneWedgeItem')} >

          <Text style={[styles.buttonText]}>Cobblestone Wedge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('FarmPlotItem')} >

          <Text style={[styles.buttonText]}>Farm Plot</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('FluorescentLightItem')} >

          <Text style={[styles.buttonText]}>Fluorescent Light</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('IndustrialLightItem')} >

          <Text style={[styles.buttonText]}>Industrial Light</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('IndustrialLightBlubItem')} >

          <Text style={[styles.buttonText]}>Industrial Light Bulb</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('IronBarsItem')} >

          <Text style={[styles.buttonText]}>Iron Bars</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('IronLadderItem')} >

          <Text style={[styles.buttonText]}>Iron Ladder</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('MetalCatwalkItem')} >

          <Text style={[styles.buttonText]}>Metal Catwalk</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('MetalReinforcedWoodRampItem')} >

          <Text style={[styles.buttonText]}>Metal Reinforced Wood Ramp</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ReinforcedWoodRampItem')} >

          <Text style={[styles.buttonText]}>Reinforced Wood Ramp</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ScrapIronRampItem')} >

          <Text style={[styles.buttonText]}>Scrap Iron Ramp</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ShowerGlassBlockItem')} >

          <Text style={[styles.buttonText]}>Shower Glass Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('SolidRebarRampFrameItem')} >

          <Text style={[styles.buttonText]}>Solid Rebar Ramp Frame</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('SteelLadderItem')} >

          <Text style={[styles.buttonText]}>Steel Ladder</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('VenetianBlindsItem')} >

          <Text style={[styles.buttonText]}>Venetian Blinds</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('WoodCatwalkItem')} >

          <Text style={[styles.buttonText]}>Wood Catwalk</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('WoodRampItem')} >

          <Text style={[styles.buttonText]}>Wood Ramp</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('WoodRampFrameItem')} >

          <Text style={[styles.buttonText]}>Wood Ramp Frame</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('WoodenLadderItem')} >

          <Text style={[styles.buttonText]}>Wooden Ladder</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default OtherScreen;