{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PureMineralWaterItem({ navigation }) {
    return (
      <View>
        <Text>Pure Mineral Water Info</Text>

        <Text>Description:</Text>
        <Text>Pure Mineral Water is a beverage that can be scavenged from many various locations and can often be found inside Water Cooler Bottles. It can also be obtained by crafting it after reading Wasteland Treasures Vol. 4. Drinking Pure Mineral Water will have a positive effect on your Stamina and Hydration. Pure Mineral Water gives 60 water and 15% stamina regen. Benefits of drinking this water over Bottled Water, is that it gives you a 15% Efficient Digestion boost for 5 minutes. Also cures Dysentery at 20%.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +60</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>
        <Text>Water and Food Loss: -15%</Text>
        <Text>Duration: 06:00</Text>

        <Text>Cures:</Text>
        <Text>Dysentery</Text>

        <Text>Crafting:</Text>
        <Text>1 Coal</Text>
        <Text>1 Water</Text>
        <Text>1 Goldenrod Flower</Text>
        <Text>1 Chrsanthemum Flower</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Wasteland Treasures Vol.4</Text>
      </View>
    );
  }

export default PureMineralWaterItem;