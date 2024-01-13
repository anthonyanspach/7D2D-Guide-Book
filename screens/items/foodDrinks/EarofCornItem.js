{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function EarofCornItem({ navigation }) {
    return (
      <View>
        <Text>Ear of Corn Info</Text>

        <Text>Description:</Text>
        <Text>An Ear of Corn is an edible food item that can be gathered from the Corn Plants. Eating an Ear of Corn will have a positive effect on Fullness. An Ear of Corn can be used to create Corn Seeds which enables the Farming of Corn Plants.</Text>
      </View>
    );
  }

export default EarofCornItem;