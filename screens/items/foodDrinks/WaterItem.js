{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WaterItem({ navigation }) {
    return (
      <View>
        <Text>Water Info</Text>

        <Text>Description:</Text>
        <Text>Water is a beverage that can be obtained by boiling Murky Water or collecting it from Dew Collectors. Drinking Water will have a positive effect on your Stamina at 15% Stamina Regen.</Text>

        <Text>Sources:</Text>
        <Text>Water is produced by Dew Collectors, at a rate of one per 6-10 in-game hours (approximately three per 24 hours). It cannot be collected by snow, water, or anything else as of Alpha 21. The second way to obtain it is to loot Murky Water and boil it in a Campfire:</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +20</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>

        <Text>Crafting:</Text>
        <Text>1 Murky Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>
      </View>
    );
  }

export default WaterItem;