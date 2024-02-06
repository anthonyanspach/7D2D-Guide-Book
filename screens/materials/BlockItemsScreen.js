{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function BlockItemsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Block Items</Text>
        
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('AwningRedBlocksItem')} >

          <Text style={[styles.buttonText]}>Awning Red Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('BrickBlocksItem')} >

          <Text style={[styles.buttonText]}>Brick Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ClayRoofBlocksItem')} >

          <Text style={[styles.buttonText]}>Clay Roof Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CobblestoneBlocksItem')} >

          <Text style={[styles.buttonText]}>Cobblestone Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ConcreteBlocksItem')} >

          <Text style={[styles.buttonText]}>Concrete Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ConcreteFormBlocksItem')} >

          <Text style={[styles.buttonText]}>Concrete Form Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('LandClaimBlocksItem')} >

          <Text style={[styles.buttonText]}>Land Claim Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('MetalReinforcedWoodBlocksItem')} >

          <Text style={[styles.buttonText]}>Metal Reinforced Wood Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('MetalTrussingItem')} >

          <Text style={[styles.buttonText]}>Metal Trussing</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('PouredReinforcedConcreteBlocksItem')} >

          <Text style={[styles.buttonText]}>Poured Reinforced Concrete Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ReinforcedIronBlocksItem')} >

          <Text style={[styles.buttonText]}>Reinforced Iron Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('StainlessSteelBlocksItem')} >

          <Text style={[styles.buttonText]}>Stainless Steel Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('SteelBlocksItem')} >

          <Text style={[styles.buttonText]}>Steel Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('WoodBlocksItem')} >

          <Text style={[styles.buttonText]}>Wood Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('WoodenShinglesBlocksItem')} >

          <Text style={[styles.buttonText]}>Wooden Shingles Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('HayBaleItem')} >

          <Text style={[styles.buttonText]}>Hay Bale</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BlockItemsScreen;