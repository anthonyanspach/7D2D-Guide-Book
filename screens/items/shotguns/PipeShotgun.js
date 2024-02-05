{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PipeShotgunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Shotgun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Pipe Shotgun is a single shot firearm that can be crafted from simple materials in 7 Days to Die. It is a simple weapon and easy to create relatively early in the game. This weapon requires shotgun shells and will hold one shot.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Short Iron Pipe</Text>
        <Text style={[styles.list]}>6 Glue</Text>
        <Text style={[styles.list]}>18 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Shotgun Weekly</Text>
      </ScrollView>
    );
  }

export default PipeShotgunItem;