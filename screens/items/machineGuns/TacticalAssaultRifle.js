{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TacticalAssaultRifleItem({ navigation }) {
    return (
      <View>
        <Text>Tactical Assalt Rifle Info</Text>

        <Text>Description:</Text>
        <Text>The Tactical Assault Rifle is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the Tactical Assault Rifle uses 7.62mm Rounds as Ammunition.</Text>
        <Text>It is heavily based on the real-life M4 Carbine, although the M4 fires smaller 5.56×45mm NATO rounds. The rifle would be impossible to fire because of the absence of a rear buffer tube, which is replaced with what appears to be a handsaw.</Text>

        <Text>Crafting:</Text>
        <Text>5 Machine Fun Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>25 Scrap Polymers</Text>
        <Text>15 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Tactical Warfare</Text>
      </View>
    );
  }

export default TacticalAssaultRifleItem;