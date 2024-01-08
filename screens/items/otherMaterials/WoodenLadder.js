{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenLadderItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Ladder Info</Text>

        <Text>Description:</Text>
        <Text>A Wooden Ladder is a craftable item. It can also be "looted" by hitting an existing Wooden Ladder with a Fireaxe until it disappears and a Wooden Ladder is added to your inventory.</Text>

        <Text>To use, simply walk or jump towards the Wooden Ladder and continue walking forward to climb. While on the ladder, you can move forward or backward depending on the direction you're facing. For example, you can "climb" a ladder by looking up and pressing the forward-movement key, or by looking down and pressing the backward-movement key.</Text>

        <Text>Crafting:</Text>
        <Text>3 Wood</Text>
      </View>
    );
  }

export default WoodenLadderItem;