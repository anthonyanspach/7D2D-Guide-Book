{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelStairsItem({ navigation }) {
    return (
      <View>
        <Text>Steel Stairs Info</Text>

        <Text>Description:</Text>
        <Text>Steel Stairs are the upgraded version of Reinforced Concrete Stairs. Due to their exceptional strength, they will take a long time to be destroyed by Zombies. They can not be crafted using other materials, the only ways to obtain Steel Stairs is through upgrading Concrete Stairs or placing them using the Creative Menu.</Text>

        <Text>Crafting:</Text>
        <Text>1 Reinforced Concrete Stairs</Text>
        <Text>10 Forged Steel</Text>
      </View>
    );
  }

export default SteelStairsItem;