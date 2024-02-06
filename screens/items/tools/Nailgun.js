{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function NailgunItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Nailgun info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Nailgun is the best construction tool with the highest repair value for brick, metal, concrete, and steel blocks, as well as traps and devices. It shoots Nails (10 in a single magazine) and reloads automatically with the correct Ammunition, or manually using the reload key (default key R). Nails can be found or produced in a Forge.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Repairing Blocks. Using the secondary click (default right mouse button) while targeting the crosshairs on almost any damaged item or block within range will use the Nailgun to repair that item or block, provided that the player has the appropriate repair material needed in their inventory.</Text>
        <Text style={[styles.text]}>Upgrading Blocks. The player can also use a Stone Axe as an upgrade tool by using the secondary click while targeting a block that is upgradeable. The appropriate upgrade material must be in the player's inventory and the block to be upgraded must already be fully repaired before the upgrade process can be started.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Motor Tool Parts</Text>
        <Text style={[styles.list]}>80 Forged Steel</Text>
        <Text style={[styles.list]}>30 Mechanical Parts</Text>
        <Text style={[styles.list]}>3 Springs</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Handy Land</Text>
      </ScrollView>
    );
  }

export default NailgunItem;