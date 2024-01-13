{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PotatoItem({ navigation }) {
    return (
      <View>
        <Text>Potato Info</Text>

        <Text>Description:</Text>
        <Text>A Potato is a food item which can be harvested from the Potato Plant. Eating a Potato will have a positive effect on Fullness. They can be used to create Potato Seeds which will enable the player to Farm their own Potato Plants. A Potato can also be used as an ingredient in various recipes.</Text>
      </View>
    );
  }

export default PotatoItem;