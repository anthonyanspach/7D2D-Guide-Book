{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RawMeatItem({ navigation }) {
    return (
      <View>
        <Text>Raw Meat Info</Text>

        <Text>Description:</Text>
        <Text>Raw Meat is an edible food item; it is obtained by hunting wild animals. Eating Raw Meat will have a positive effect on Fullness but may also cause the player to get sick with Food Poisoning. It can be cooked for greater benefit using a Campfire and either a Cooking Grill or Cooking Pot to make various recipes. If neither of these cooking tools are available, one can cook the meat on the Campfire to created Charred Meat.</Text>
      </View>
    );
  }

export default RawMeatItem;