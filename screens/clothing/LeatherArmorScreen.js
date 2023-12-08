{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LeatherArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Leather Armor Set Screen</Text>
        <Button title="Leather Boots" onPress={() => navigation.navigate('LeatherBootsItem')} />
        <Button title="Leather Gloves" onPress={() => navigation.navigate('LeatherGlovesItem')} />
        <Button title="Leather Hood" onPress={() => navigation.navigate('LeatherHoodItem')} />
        <Button title="Leather Chest Armor" onPress={() => navigation.navigate('LeatherChestItem')} />
        <Button title="Leather Leg Armor" onPress={() => navigation.navigate('LeatherLegItem')} />
      </View>
    );
  }

export default LeatherArmorScreen;