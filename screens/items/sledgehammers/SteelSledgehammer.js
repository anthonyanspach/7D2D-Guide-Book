{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelSledgehammerItem({ navigation }) {
    return (
      <View>
        <Text>Steel Sledgehammer Info</Text>

        <Text>Description:</Text>
        <Text>The Steel Sledgehammer is a tier 3 sledgehammer - a melee weapon used to flatten your enemies and an effective tool for destroying blocks.</Text>

        <Text>Uses:</Text>
        <Text>During combat, The Steel Sledgehammer is an extended range melee weapon and can strike multiple Zombies at close quarters. The Steel Sledgehammer does the most damage of any melee weapon in the game, and even more than many guns, but attacks are slow, with a short delay from when the attack is initiated to when the swing occurs. It can kill an average Zombie with one direct hit to the head or two hits or more to the body. It is able to do massive damage with the stealth bonus multiplier, despite only dealing 1.5x damage when sneak attacking, likely for balance purposes. There is a chance that the Steel Sledgehammer will cause the target to be dismembered. Power attacks tend to send zombies flying backwards if it kills or otherwise ragdolls them.</Text>
        <Text>As a tool, The Steel Sledgehammer has a reach of up to 3.5 blocks away and is very effective when used to destroy blocks. However, it is only slightly more effective than the Stone Axe for harvesting the materials from these blocks, since it has a 75% penalty to resources harvested. While it is not the appropriate tool for harvesting either stone-based or concrete blocks, it is an alternative due to its speed. If the player has a stamina boosting effect or skill points invested in offsetting the high stamina cost, it is one of the quickest ways to break into safes and through vault doors.</Text>

        <Text>Crafting:</Text>
        <Text>5 Steel Sledgehammer Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>50 Wood</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>
      </View>
    );
  }

export default SteelSledgehammerItem;