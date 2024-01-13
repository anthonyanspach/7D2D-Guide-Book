{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RottingFleshItem({ navigation }) {
    return (
      <View>
        <Text>Rotting Flech Info</Text>

        <Text>Description:</Text>
        <Text>Rotting Flesh is an item obtained by harvesting the corpses of Zombie Dogs, Zombie Bears, and Zombie Vultures. It can also be found by harvesting carcasses and rotting corpses found on the ground throughout the world, and from body bags.</Text>

        <Text>Consumption:</Text>
        <Text>Consuming Rotting Flesh is always a bad idea, unless one absolutely must. It is generally perceived to be a terrible food source, harming the players health to eat and providing a pitiful amount of fullness. On top of that it, like other low tier foods, has a 12% chance to cause Dysentery.</Text>
      </View>
    );
  }

export default RottingFleshItem;