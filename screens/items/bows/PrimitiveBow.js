{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PrimitiveBowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Primitive Bow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Primitive Bow is a craftable weapon in 7 Days to Die.</Text>
        <Text style={[styles.text]}>It is a medium-range weapon that fires arrows as Ammunition. A Primitive Bow can be used with five different types of arrows: Stone Arrow, Iron Arrow, Steel Arrow, Flaming Arrow, and Exploding Arrow.</Text>
        <Text style={[styles.text]}>It is considered as a starter weapon, because the player can craft it right at the beginning of his game and because of its low cost to craft.</Text>
        <Text style={[styles.text]}>To equip a different type of ammo than the default stone arrows, press and hold R, then select the ammo type you want.</Text>
        <Text style={[styles.text]}>Sneaking attack increases 100% extra damage in A21.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>3 Plant Fibers</Text>
        <Text style={[styles.list]}>8 Wood</Text>
      </ScrollView>
    );
  }

export default PrimitiveBowItem;