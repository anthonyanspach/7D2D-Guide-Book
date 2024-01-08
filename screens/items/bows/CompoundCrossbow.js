{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CompoundCrossbowItem({ navigation }) {
    return (
      <View>
        <Text>Compound Crossbow Info</Text>

        <Text>Description:</Text>
        <Text>The Compound Crossbow is stronger version of Iron Crossbow, unlocked after reading the Compound Crossbow Schematic.</Text>

        <Text>The Compound Crossbow is a medium to long-range weapon that fires crossbow bolts as Ammunition. It will not reload automatically after each shot, unlike the bows.</Text>
        <Text>To equip a different type of ammo than the default Stone Crossbow Bolt, press and hold R, then select the ammo type you want.</Text>

        <Text>Crafting:</Text>
        <Text>5 Bow / Crossbow Parts</Text>
        <Text>75 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>15 Leather</Text>
        <Text>100 Scrap Polymers</Text>

        <Text>Unlock Options:</Text>
        <Text>Bow Hunters</Text>
      </View>
    );
  }

export default CompoundCrossbowItem;