{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ConcreteFormBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Concrete Form Blocks Info</Text>

        <Text>Description:</Text>
        <Text>It is upgraded, with a tool, using Concrete Mix to Poured Concrete. After some time the initially wet concrete dries, the wooden mold pops out and Reinforced Concrete Blocks is obtained. Reinforced Concrete is also stronger than its wet form.</Text>

        <Text>Crafting:</Text>
        <Text>1 Rebar Frame</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default ConcreteFormBlocksItem;