{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CobblestoneStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cobblestone Stairs Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Cobblestone Stairs are a craftable building material that are easy to craft. Due to their reasonable strength they will take a while to be destroyed by Zombies. Cobblestone Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel.</Text>

        <Text style={[styles.text]}>Cobblestone Stairs can be upgraded in place from Cobblestone Frame Stairs.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        
        <Text style={[styles.list]}>1 Cobblestone Frame Stairs</Text>
        <Text style={[styles.list]}>10 Cobblestone Rocks</Text>
      </ScrollView>
    );
  }

export default CobblestoneStairsItem;