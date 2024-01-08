{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelClubItem({ navigation }) {
    return (
      <View>
        <Text>Steel Club Info</Text>

        <Text>Description:</Text>
        <Text>The Steel Club is a tier 3 Club - a melee weapon used to pummel your enemies and a fair tool for destroying blocks. It appears to be that a transmission gearbox assembly torn off a car.</Text>

        <Text>Uses:</Text>
        <Text>During combat, The Steel Club is a mid-range melee weapon. There is a chance that the Steel Club will cause the target to be dismembered. The Steel Club is one-handed and thus benefits from the Flurry of Blows perk. By combining the Batter Up! Perk Books, Weighted Head Mod, and Metal Chain Mod, the Steel Club can effectively stun and trip enemy indefinitely.</Text>
        <Text>As a tool, The Steel Club is reasonably effective when used to destroy blocks.</Text>

        <Text>Crafting:</Text>
        <Text>5 Steel Club Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>50 Wood</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>
      </View>
    );
  }

export default SteelClubItem;