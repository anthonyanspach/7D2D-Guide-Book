{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ItemSystemScreen({ navigation }) {
    return (
      <View>
        <Text>Item Mechanics</Text>

        <Text>Quality:</Text>
        <Text>The Quality of an item can be found by looking at the current number and color of the Durability bar at the bottom of certain item icons.</Text>

        <Text>Not all items have Quality levels, but most armor, weapons, and tools do have a Quality level.</Text>

        <Text>The level of Quality determines its Max Durability and the number of Mods (if applicable) that can be used on it.</Text>

        <Text>Repairing does not affect the Quality. In previous game versions, repairing would lower the item's Quality level.</Text>


        <Text>Durability:</Text>
        <Text>Durability represents the current health or hit points of an item or block.</Text>

        <Text>The durability of an item can be estimated by looking at the colored bar at the bottom of certain item icons. The more depleted the bar, the less durability it has, as the bar represents the percentage of Max Durability the item has remaining.</Text>

        <Text>Not all items have durability, but most armor, weapons, and tools do have durability.</Text>

        <Text>Armor, weapons, and tools function at full capacity until Durability reaches zero.</Text>

        <Text>When an item reaches zero durability, it must be repaired and is unusable otherwise. Items can be repaired with any amount of durability lost. Repairing an item restores its Durability back to Max Durability.</Text>


        <Text>Max Stack:</Text>
        <Text>Every item has a max stack of how many of that item can be carried in a single slot.</Text>

        <Text>There is no way to raise the max stack of an item.</Text>

        <Text>Not every item has the same max stack. Equipment like Stone Axes have a max stack of 1, while resources like Small Stone can go as high as 6000.</Text>
      </View>
    );
  }

export default ItemSystemScreen;