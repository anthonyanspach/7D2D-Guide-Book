{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MurkyWaterItem({ navigation }) {
    return (
      <View>
        <Text>Murky Water Info</Text>

        <Text>Description:</Text>
        <Text>Murky Water is a contaminated drink, although it will have a positive effect on your Hydration and Stamina, it can also have a 12% chance of contracting Dysentery. It is possible to purify Murky Water by boiling it, which will produce Water and is safe to drink with a 0% chance of Dysentery.</Text>

        <Text>Purification:</Text>
        <Text>In order to purify Murky Water, you will need to use a Cooking Pot on a Campfire, with a source of Combustible fuel, and time at approximately 40 seconds or less. Boiling the Murky Water will purify it from 12% Dysentery to 0% changing it into Water.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +10</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: -5</Text>
        <Text>Dysentery Chance: 12%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>
      </View>
    );
  }

export default MurkyWaterItem;