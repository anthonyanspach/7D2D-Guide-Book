{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodenBowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Bow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Wooden Bow is the second craftable bow in 7 Days to Die. It is a medium-range weapon that fires arrows as ammunition. Wooden Bow can be used with five different types of arrows: Stone Arrow, Iron Arrow, Steel Arrow, Flaming Arrow, and Exploding Arrow. To equip a different type of ammo than the default stone arrows, press and hold R, then select the ammo type you want. The damages given are based on values of the different types of arrows that the bow can use. The bow itself (without arrows) can not cause any damage.</Text>

        <Text style={[styles.text]}>Sneaking attack increases 100% extra damage in A21.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Bow / Crossbow Parts</Text>
        <Text style={[styles.list]}>100 Wood</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>10 Glue</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Bow Hunters</Text>
      </ScrollView>
    );
  }

export default WoodenBowItem;