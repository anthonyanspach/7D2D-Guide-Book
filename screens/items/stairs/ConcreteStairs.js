{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ConcreteStairsItem({ navigation }) {
    return (
      <View>
        <Text>Concrete Stairs Info</Text>

        <Text>Description:</Text>
        <Text>Concrete Stairs are a craft-able building material that are easy to craft although the recipe requires Concrete, making Concrete Stairs more expensive on resources. Due to their reasonable strength, they will take a while to be destroyed by Zombies. Concrete Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel. Concrete Stairs can be upgraded into Steel Stairs</Text>

        <Text>Crafting:</Text>
        <Text>10 Concrete Mix</Text>
      </View>
    );
  }

export default ConcreteStairsItem;