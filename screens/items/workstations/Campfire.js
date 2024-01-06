{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CampfireItem({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>

        <Text>Description:</Text>
        <Text>The Campfire is used to cook food, boil water, create medications, and craft a few resources. It can be found in the many lodges and numerous camp sites scattered all over the map. It can be crafted using 5 Small Stones. To use it, place it down and open by pressing "E".</Text>

        <Text>The Campfire can be activated as long as it has fuel, regardless if it is being used to cook anything or not.</Text>
        <Text>Being with in 2 blocks of the Campfire will grant the Warming Fire buff, which grants +15 Cold Resistance. Campfires may set fire to a character or zombie if they walk through it while it is turned on.</Text>

        <Text>Crafting:</Text>
        <Text>5 Small Stones</Text>
      </View>
    );
  }

export default CampfireItem;