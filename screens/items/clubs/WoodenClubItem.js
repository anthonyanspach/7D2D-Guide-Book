{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenClubItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Club Info</Text>

        <Text>Description:</Text>
        <Text>The Wooden Club is a tier 1 Club - a one-handed melee weapon used to pummel your enemies.</Text>

        <Text>Combat:</Text>
        <Text>During combat, the Wooden Club is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Wooden Club, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text>Crafting:</Text>
        <Text>5 Wood</Text>
      </View>
    );
  }

export default WoodenClubItem;