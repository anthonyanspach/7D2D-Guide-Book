{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function IronPickaxeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Pickaxe info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Pickaxe is a Tool that can be used to mine stone and ore, harvesting resources in the process. It can also serve as a mediocre Weapon if needed.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will swing the Iron Pickaxe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to mine blocks, harvesting Resources with each use. Pickaxes are the most effective tools for stone and metal based objects. They are good for Mining hard earth-based blocks such as Stone and resource veins, as well as breaking brick and metal based blocks such as Flagstone Blocks, Metal Doors and Iron Bars. Pickaxes are also the most effective tools for harvesting Small Stone from the brick Pallets found in various POIs. Additionally, pickaxes are good for mining Gravel to get Crushed Sand and Small Stone.</Text>
        <Text style={[styles.text]}>When used in combat, the Iron Pickaxe is a mildly effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>60 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tools Digest</Text>
      </ScrollView>
    );
  }

export default IronPickaxeItem;