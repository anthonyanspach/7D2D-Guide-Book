{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HubCapMineItem({ navigation }) {
    return (
      <View>
        <Text>Hub Cap Mine Info</Text>

        <Text>Description:</Text>
        <Text>The Hub Cap Land Mine is a ground based Explosive, similar to other Mines such as the Air Filter Land Mine or Tin Land Mine, which can be strategically place on any flat surface except water. If anything steps on it, whether it be a Zombie, the player, or animal, the mine will explode. Mines cannot be picked up once placed.</Text>

        <Text>Crafting:</Text>
        <Text>1 Forged Iron</Text>
        <Text>8 Gun Powder</Text>
        <Text>1 Nail</Text>
        <Text>1 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default HubCapMineItem;