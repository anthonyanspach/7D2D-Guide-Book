{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SteelArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Steel Armor Set Screen</Text>
        <Button title="Steel Boots" onPress={() => navigation.navigate('SteelBootsItem')} />
        <Button title="Steel Chest Armor" onPress={() => navigation.navigate('SteelChestItem')} />
        <Button title="Steel Gloves" onPress={() => navigation.navigate('SteelGlovesItem')} />
        <Button title="Steel Helmet" onPress={() => navigation.navigate('SteelHelmetItem')} />
        <Button title="Steel Leg Armor" onPress={() => navigation.navigate('SteelLegItem')} />
      </View>
    );
  }

export default SteelArmorScreen;