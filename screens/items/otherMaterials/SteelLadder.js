{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelLadderItem({ navigation }) {
    return (
      <View>
        <Text>Steel Ladder Info</Text>

        <Text>Description:</Text>
        <Text>Steel Ladders are craft-able items. They are more sturdy than Iron Ladders. To use, simply walk or jump towards the Steel Ladder and continue walking forward to climb. While on the ladder, you can move forward or backward depending on the direction you're facing. For example, you can "climb" a ladder by looking up and pressing the forward-movement key, or by looking down and pressing the backward-movement key.</Text>

        <Text>Crafting:</Text>
        <Text>5 Forged Steel</Text>
      </View>
    );
  }

export default SteelLadderItem;