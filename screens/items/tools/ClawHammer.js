{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function ClawHammerItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Claw Hammer info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Claw Hammer is a multi-purpose Tool that can be used to repair damaged blocks and Upgrade them much like a Stone Axe and Nailgun. It is currently the second most efficient tool for upgrading blocks, requiring 2 swings per upgrade. The Claw Hammer also serves as a weak melee Weapon.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>*As a Tool* When using a Claw Hammer as a tool, the following actions are performed:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will swing the Taza's Stone Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to cut down trees, dig into the earth, mine a boulder, or mine down into the Stone found underground. Harvesting most items or blocks will provide Resources with each swing.</Text>
        <Text style={[styles.text]}>Repairing. Clicking the right mouse button while targeting the crosshairs on almost any damaged item or block within range will use the Claw Hammer to repair that item or block, provided that you have the appropriate repair material needed in your inventory.</Text>
        <Text style={[styles.text]}>Upgrading. You can also use a Claw Hammer as an upgrade tool by clicking the right mouse button while targeting a block that is upgradeable.</Text>
        <Text style={[styles.textHeader]}>*As a Weapon*</Text>
        <Text style={[styles.text]}>When used in combat, a Claw Hammer is a functional, but fairly weak, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>36 Forged Iron</Text>
        <Text style={[styles.list]}>18 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Handy Land</Text>
      </ScrollView>
    );
  }

export default ClawHammerItem;