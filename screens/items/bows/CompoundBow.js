{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CompoundBowItem({ navigation }) {
    return (
      <View>
        <Text>Compound Bow Info</Text>

        <Text>Description:</Text>
        <Text>The Compound Bow is the strongest Bow in 7 Days to Die.</Text>
        <Text>It is a medium-range weapon that fires arrows as Ammunition. To equip a different type of arrow, press and hold R, then select the ammo type you want.</Text>

        <Text>Crafting:</Text>
        <Text>5 Bow / Crossbow Parts</Text>
        <Text>125 Scrap Polymers</Text>
        <Text>25 Leather</Text>
        <Text>25 Duct Tape</Text>
        <Text>50 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Bow Hunters</Text>
      </View>
    );
  }

export default CompoundBowItem;