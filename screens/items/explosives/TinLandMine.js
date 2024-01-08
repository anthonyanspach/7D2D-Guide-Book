{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TinLandMineItem({ navigation }) {
    return (
      <View>
        <Text>Tin Land Mine Info</Text>

        <Text>Description:</Text>
        <Text>The Tin Land Mine is a ground based Explosive, similar to the Hub Cap Land Mine or Air Filter Land Mine, which can be strategically placed on any flat surface except water. If anything steps on it, whether a Zombie, the player, or an animal, the mine will explode. Mines cannot be picked up once placed. The Tin Land Mine is one of the weaker Land Mines, but does not require a Workbench to craft.</Text>

        <Text>Crafting:</Text>
        <Text>4 Iron</Text>
        <Text>4 Gun Powder</Text>
        <Text>1 Nail</Text>
        <Text>1 Duct Tape</Text>
      </View>
    );
  }

export default TinLandMineItem;