{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StoneSledgehammerItem({ navigation }) {
    return (
      <View>
        <Text>Stone Sledgehammer Info</Text>

        <Text>Description:</Text>
        <Text>The Stone Sledgehammer is a tier 1 sledgehammer - a two-handed melee weapon used to pummel your enemies and an effective tool for destroying blocks.</Text>

        <Text>Uses:</Text>
        <Text>During combat, The Stone Sledgehammer is an extended range melee weapon and can strike multiple Zombies at close quarters. It is one of the highest damage melee weapon types in the game, but attacks are slow, with a short delay from when the attack is initiated to when the swing occurs. It can kill an average Zombie with one direct hit to the head or two hits or more to the body. It is able to do massive damage with the stealth bonus multiplier. There is a chance that the Stone Sledgehammer will cause the target to be dismembered.</Text>
        <Text>As a tool, The Stone Sledgehammer has a reach of up to 3.5 blocks away and is very effective when used to destroy blocks. However, it is only slightly more effective than the Stone Axe for harvesting the materials from these blocks, since it has a 75% penalty to resources harvested. While it is not the appropriate tool for harvesting either stone-based or concrete blocks, it is an alternative due to its speed at destroying those types of blocks. If you have a stamina boosting effect or skill points invested in offsetting the high stamina cost, it is one of the quickest ways to break into safes and through vault doors.</Text>

        <Text>Crafting:</Text>
        <Text>10 Small Stone</Text>
        <Text>10 Plant Fibers</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default StoneSledgehammerItem;