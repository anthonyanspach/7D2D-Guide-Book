{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function RatchetItem() {
    return (
      <View>
        <Text>Ratchet info</Text>

        <Text>Description:</Text>
        <Text>Ratchet is a tier 2 Disassemble Tool used to disassemble various mechanical and electrical blocks. For more information, see Wrench</Text>

        <Text>Uses:</Text>
        <Text>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>
        <Text>When used as a weapon, the Ratchet is a short range melee weapon that is slightly weaker than the wrench, as well as having a rather poor hitbox, so it should only be used as a weapon for specific challenges or as a last resort.</Text>

        <Text>Crafting:</Text>
        <Text>25 Steel Tool Parts</Text>
        <Text>40 Forged Steel</Text>
        <Text>25 Mechanical Parts</Text>
        <Text>10 Springs</Text>
        <Text>10 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Scrap 4 Fun</Text>
      </View>
    );
  }

export default RatchetItem;