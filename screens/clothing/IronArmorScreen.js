{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function IronArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Iron Armor Set Items</Text>
        <Button title="Iron Boots" onPress={() => navigation.navigate('IronBootsItem')} />
        <Button title="Iron Chest Armor" onPress={() => navigation.navigate('IronChestItem')} />
        <Button title="Iron Gloves" onPress={() => navigation.navigate('IronGlovesItem')} />
        <Button title="Iron Helmet" onPress={() => navigation.navigate('IronHelmetItem')} />
        <Button title="Iron Leg Armor" onPress={() => navigation.navigate('IronLegItem')} />
      </View>
    );
  }

export default IronArmorScreen;