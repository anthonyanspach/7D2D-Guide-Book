{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function SteelAxeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Axe info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Steel Axe is a Tool that can be used to chop down trees and other items made from Wood, harvesting resources in the process. It can also serve as an effective melee Weapon.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will swing the Steel Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to cut down trees or destroy blocks for resources. Harvesting most items or blocks will provide Resources with each swing. Fireaxes are the most effective tools for chopping down Trees and for damaging wood-based items and blocks such as Wood Blocks.</Text>
        <Text style={[styles.text]}>When used in combat, the Steel Axe is an effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>
        <Text style={[styles.text]}>Butchering. When harvesting a recently slain animal corpse, a gore block, or bones, the Steel Axe acts as a Butcher Tool (similarly as Stone Axe and Iron Fireaxe), allowing you to obtain resources from the corpse that you would not get when using a tool that is not a designated Butcher Tool.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Steel Tool Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>50 Wood</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tools Digest</Text>
      </ScrollView>
    );
  }

export default SteelAxeItem;