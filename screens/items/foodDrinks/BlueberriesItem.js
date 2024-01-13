{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BlueberriesItem({ navigation }) {
    return (
      <View>
        <Text>Blueberries Info</Text>

        <Text>Description:</Text>
        <Text>Blueberries are a food item which can be harvested from the Blueberry Plant. Eating Blueberries will have a positive effect on Fullness. They can be used to create Blueberry Seeds which enable the Farming of Blueberry Plants. Blueberries can also be used as an ingredient in various recipes.</Text>
      </View>
    );
  }

export default BlueberriesItem;