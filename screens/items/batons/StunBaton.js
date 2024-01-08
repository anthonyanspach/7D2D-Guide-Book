{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StunBatonItem({ navigation }) {
    return (
      <View>
        <Text>Stun Baton Info</Text>

        <Text>Description:</Text>
        <Text>The Stun Baton is a melee weapon affected by Intellect and the Electrocutioner perk.</Text>
        <Text>The baton gains "charges" on each hit, 1 for normal attacks and 2 for power attacks. Upon reaching 4 or more charges the next hit will inflict a shock effect on enemies.</Text>
        <Text>While the enemy is being shocked, they will be unable to move or attack and will take 3 damage every second.</Text>
        <Text>Each rank of Electrocutioner increases the duration of the shock effect and the weapon's base damage. It will not increase the damage per tick of the shock effect, but a longer shock will result in it dealing more total damage. It may be repaired using Repair Kits.</Text>

        <Text>Crafting:</Text>
        <Text>5 Baton Parts</Text>
        <Text>25 Forged Iron</Text>
        <Text>10 Leather</Text>
        <Text>10 Duct Tape</Text>
        <Text>10 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Tech Planet</Text>
      </View>
    );
  }

export default StunBatonItem;