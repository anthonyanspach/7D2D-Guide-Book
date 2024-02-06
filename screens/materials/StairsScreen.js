{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function StairsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stairs</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('BrickStairsItem')} >

          <Text style={[styles.buttonText]}>Brick Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CobblestoneStairsItem')} >

          <Text style={[styles.buttonText]}>Cobblestone Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ConcreteStairsItem')} >

          <Text style={[styles.buttonText]}>Concrete Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('FlagstoneStairsItem')} >

          <Text style={[styles.buttonText]}>Flagstone Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ReinforcedScrapIronStairsItem')} >

          <Text style={[styles.buttonText]}>Reinforced Scrap Iron Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SteelStairsItem')} >

          <Text style={[styles.buttonText]}>Steel Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('WoodenStairsItem')} >

          <Text style={[styles.buttonText]}>Wooden Stairs</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default StairsScreen;