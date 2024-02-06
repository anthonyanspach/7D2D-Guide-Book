{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function RatchetItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ratchet info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Ratchet is a tier 2 Disassemble Tool used to disassemble various mechanical and electrical blocks. For more information, see Wrench</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>
        <Text style={[styles.text]}>When used as a weapon, the Ratchet is a short range melee weapon that is slightly weaker than the wrench, as well as having a rather poor hitbox, so it should only be used as a weapon for specific challenges or as a last resort.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>25 Steel Tool Parts</Text>
        <Text style={[styles.list]}>40 Forged Steel</Text>
        <Text style={[styles.list]}>25 Mechanical Parts</Text>
        <Text style={[styles.list]}>10 Springs</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Scrap 4 Fun</Text>
      </ScrollView>
    );
  }

export default RatchetItem;