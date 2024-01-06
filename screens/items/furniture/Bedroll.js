{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BedrollItem({ navigation }) {
    return (
      <View>
        <Text>Bedroll Info</Text>

        <Text>Description:</Text>
        <Text>The Bedroll is an item that may be crafted using Plant Fibers as shown below or found around the map. A Bedroll makes a single spawn point at the location it was placed at; it will be your only spawn point.</Text>
        <Text>After the placement, its location will be highlighted on the map, marked as an icon of a bed.</Text>
        <Text>It is recommended to place a Secure Storage Chest with some basic loot nearby in case you die and lose all the items in your tool bar and backpack</Text>
        <Text>Additionally, a placed Bedroll will block zombie spawns in a rectangular area of 31x31 meters from bedrock to sky.</Text>

        <Text>Crafting:</Text>
        <Text>10 Plant Fibers</Text>
      </View>
    );
  }

export default BedrollItem;