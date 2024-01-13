{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MegaCrushItem({ navigation }) {
    return (
      <View>
        <Text>Mega Crush Info</Text>

        <Text>Description:</Text>
        <Text>Mega Crush is a Non-craftable Beverage that can be found while Looting containers or random drops. Mega Crush can also be purchased from Traders and Vending Machines. The Mega Crush beverage gives the buff Mega Crush! when consumed, which will grant +15 Stamina Regeneration per second and increase run speed by 50% for 6 minutes.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +60</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>
        <Text>Run Speed: +50%</Text>
        <Text>Duration: 06:00</Text>
      </View>
    );
  }

export default MegaCrushItem;