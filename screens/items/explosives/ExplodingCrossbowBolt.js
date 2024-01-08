{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ExplodingCrossbowBoltItem({ navigation }) {
    return (
      <View>
        <Text>Exploding Crossbow Bolt Info</Text>

        <Text>Description:</Text>
        <Text>An Exploding Crossbow Bolt is a type of Explosive Ammunition for the Crossbow obtained through crafting. It inflicts high damage to all entities within range of the point of impact. The point of impact may also take damage from the arrow itself. The explosion will also damage blocks. The Exploding Crossbow Bolt can be crafted by reading the Ranger's Guide to Archery Vol.2.</Text>

        <Text>Crafting:</Text>
        <Text>1 Steel Arrowhead</Text>
        <Text>2 Scrap Polymers</Text>
        <Text>8 Gun Powder</Text>
        <Text>1 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Ranger's Guide to Archery Vol.2</Text>
      </View>
    );
  }

export default ExplodingCrossbowBoltItem;