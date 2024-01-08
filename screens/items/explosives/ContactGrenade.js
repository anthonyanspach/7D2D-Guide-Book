{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ContactGrenadeItem({ navigation }) {
    return (
      <View>
        <Text>Contact Grenade Info</Text>

        <Text>Description:</Text>
        <Text>A Contact Grenade is a throwable Explosive weapon good for damaging groups of Zombies. 1They detonate on contact with blocks, AFTER pulling the pin.</Text>

        <Text>Crafting:</Text>
        <Text>2 Mechanical Parts</Text>
        <Text>14 Gun Powder</Text>
        <Text>4 Forged Iron</Text>
        <Text>1 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default ContactGrenadeItem;