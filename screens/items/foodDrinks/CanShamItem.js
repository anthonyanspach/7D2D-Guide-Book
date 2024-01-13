{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanShamItem({ navigation }) {
    return (
      <View>
        <Text>Can of Sham Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Sham (aka Canned Sham) is a Canned Food that can be looted from many of the various houses or large amounts in Shamway Grocery Store or Shamway Factory. As with all Canned Food, Can of Sham has the advantage of being ready to consume immediately without the need to be cooked first.</Text>
        <Text>Can of Sham is the only Canned Food that can be crafted. However, it is better used to craft Sham Chowder than eaten directly.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanShamItem;