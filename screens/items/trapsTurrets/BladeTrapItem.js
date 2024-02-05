{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function BladeTrapItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Blade Trap Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Blade Trap has three spinning blades that chops players and zeds alike within a 3x3 'tile' area. It does not discriminate. It requires 20W of electricity to operate.</Text>

        <Text style={[styles.text]}>Depending on the positioning of the blade will result in different outcomes. Placing the blade on the ground will chop of zombie legs; thus the zombies will become crawlers. On a 2 block high ceiling, the blade will chop off heads, resulting in an instant kill. Placing on a wall vertically is not recommended since zombies can hit it without taking damage but it can kill zombies most of the time.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>15 Forged Iron</Text>
        <Text style={[styles.list]}>15 Forged Steel</Text>
        <Text style={[styles.list]}>12 Mechanical Parts</Text>
        <Text style={[styles.list]}>9 Electrical Parts</Text>
        <Text style={[styles.list]}>15 Oil</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default BladeTrapItem;