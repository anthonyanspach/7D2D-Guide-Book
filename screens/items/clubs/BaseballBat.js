{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BaseballBatItem({ navigation }) {
    return (
      <View>
        <Text>Baseball Bat Info</Text>

        <Text>Description:</Text>
        <Text>The Baseball Bat is a tier 2 Club - a melee weapon used to pummel your enemies.</Text>

        <Text>Combat:</Text>
        <Text>During combat, the Baseball Bat is a short range melee weapon. Using the primary click (default left mouse button) will swing the Baseball Bat, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text>Crafting:</Text>
        <Text>60 Forged Iron</Text>
        <Text>30 Wood</Text>
        <Text>3 Leather</Text>
        <Text>3 Duct Tape</Text>
      </View>
    );
  }

export default BaseballBatItem;