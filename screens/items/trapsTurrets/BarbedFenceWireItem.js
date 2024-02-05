{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function BarbedFenceWireItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Barbed Fence Wire Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Barbed Fence Wire is a craftable item which is commonly used to fortify a perimeter or to block breaches in walls during the night. Its main use is slowing down Zombies.</Text>

        <Text style={[styles.text]}>A Barbed Fence Wire will reduce the speed of any player or Zombie walking through it and cause 1 point of damage to that entity. Each time the effect is triggered, the Barbed Fence Wire has its Durability reduced by 6. </Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Wood</Text>
        <Text style={[styles.list]}>8 Iron</Text>
      </ScrollView>
    );
  }

export default BarbedFenceWireItem;