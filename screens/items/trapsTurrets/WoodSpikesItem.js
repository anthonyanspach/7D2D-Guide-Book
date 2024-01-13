{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodSpikesItem({ navigation }) {
    return (
      <View>
        <Text>Wood Spikes Info</Text>

        <Text>Description:</Text>
        <Text>Wood Spikes are a trap used to defend structures by impaling zombies, humans, and animals. Wood Spikes are crafted using 20 Wood as shown below. They have 3 stages that each deal 33 damage and have 33 hit points, but anything that steps into the trap will break a stage regardless of how many hit points the trap has. Each stage looks more broken than the last, but has the same stats.</Text>

        <Text>Crafting:</Text>
        <Text>20 Wood</Text>
      </View>
    );
  }

export default WoodSpikesItem;