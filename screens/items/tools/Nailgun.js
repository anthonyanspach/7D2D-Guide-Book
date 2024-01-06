{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function NailgunItem() {
    return (
      <View>
        <Text>Nailgun info</Text>

        <Text>Description:</Text>
        <Text>The Nailgun is the best construction tool with the highest repair value for brick, metal, concrete, and steel blocks, as well as traps and devices. It shoots Nails (10 in a single magazine) and reloads automatically with the correct Ammunition, or manually using the reload key (default key R). Nails can be found or produced in a Forge.</Text>

        <Text>Uses:</Text>
        <Text>Repairing Blocks. Using the secondary click (default right mouse button) while targeting the crosshairs on almost any damaged item or block within range will use the Nailgun to repair that item or block, provided that the player has the appropriate repair material needed in their inventory.</Text>
        <Text>Upgrading Blocks. The player can also use a Stone Axe as an upgrade tool by using the secondary click while targeting a block that is upgradeable. The appropriate upgrade material must be in the player's inventory and the block to be upgraded must already be fully repaired before the upgrade process can be started.</Text>

        <Text>Crafting:</Text>
        <Text>5 Motor Tool Parts</Text>
        <Text>80 Forged Steel</Text>
        <Text>30 Mechanical Parts</Text>
        <Text>3 Springs</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Handy Land</Text>
      </View>
    );
  }

export default NailgunItem;