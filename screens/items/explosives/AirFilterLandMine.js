{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AirFilterLandMineItem({ navigation }) {
    return (
      <View>
        <Text>Air Filter Land Mine Info</Text>

        <Text>Description:</Text>
        <Text>An Air Filter Land Mine is a ground based explosive, similar to other Mines such as the Hub Cap Land Mine or Tin Land Mine. It can be strategically placed on any flat surface except water. If anything steps on it, whether it be a Zombie, a player, or an animal, the mine will explode. Exploding mines will not trigger other mines that are placed on adjacent tiles.</Text>

        <Text>Crafting:</Text>
        <Text>1 Forged Iron</Text>
        <Text>12 Gun Powder</Text>
        <Text>1 Duct Tape</Text>
        <Text>1 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default AirFilterLandMineItem;