{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function YuccaFruitItem({ navigation }) {
    return (
      <View>
        <Text>Yucca Fruit Info</Text>

        <Text>Description:</Text>
        <Text>Yucca Fruit is a food item found after destroying a Saguaro and Prickly Pear or harvested directly from a Yucca Plant. Planted Yucca Plants remain after harvesting, while wild ones disappear. Eating Yucca Fruit will have a positive effect on Fullness.</Text>
      </View>
    );
  }

export default YuccaFruitItem;