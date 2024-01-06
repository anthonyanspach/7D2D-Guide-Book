{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function StoneAxeItem() {
    return (
      <View>
        <Text>Stone Axe info</Text>

        <Text>Description:</Text>
        <Text>The Stone Axe is a primitive, multi-purpose tool that can be used to harvest resources, upgrade blocks, and repair damaged blocks. It can also serve as a basic melee weapon to attack enemies and destroy blocks. The Stone Axe is the staple tool of choice for any beginning player, requiring very few easily obtainable resources to craft and to repair.</Text>

        <Text>Uses:</Text>
        <Text>Harvesting. Using the primary click (default left mouse button) will swing the Stone Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow the player to cut down trees, mine a boulder, or mine down into the Stone found underground with decent speed. Harvesting most items or blocks will provide</Text>
        <Text>Butchering. When harvesting a recently slain animal corpse, a carcass or a body bag, the Stone Axe acts as a Butcher Tool, allowing the player to obtain resources from the corpse that wouldn't be acquired when using a tool that is not a designated Butcher Tool.</Text>
        <Text>Repairing Blocks. Using the secondary click (default right mouse button) while targeting the crosshairs on almost any damaged item or block within range will use the Stone Axe to repair that item or block, provided that the player has the appropriate repair material needed in their inventory.</Text>
        <Text>Upgrading Blocks. The player can also use a Stone Axe as an upgrade tool by using the secondary click while targeting a block that is upgradeable. The appropriate upgrade material must be in the player's inventory and the block to be upgraded must already be fully repaired before the upgrade process can be started.</Text>

        <Text>Crafting:</Text>
        <Text>2 Small Stone</Text>
        <Text>2 Plant Fibers</Text>
        <Text>2 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Tool Digest</Text>
      </View>
    );
  }

export default StoneAxeItem;