{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function BrickStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Brick Stairs Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Brick Stairs are a craftable building material that are easy to craft although the recipe requires Brick Pavers which makes them more expensive on resources. Due to their reasonable strength they will take a while to be destroyed by Zombies. Brick Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Small Stones</Text>
        <Text style={[styles.list]}>60 Clay Soil</Text>
      </ScrollView>
    );
  }

export default BrickStairsItem;