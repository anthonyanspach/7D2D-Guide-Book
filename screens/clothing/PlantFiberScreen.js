{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PlantFiberScreen({ navigation }) {
    return (
      <View>
        <Text>Plant Fiber Set Screen</Text>
        <Button title="Plant Fiber Boots" onPress={() => navigation.navigate('PlantFiberBootsItem')} />
        <Button title="Plant Fiber Gloves" onPress={() => navigation.navigate('PlantFiberGlovesItem')} />
        <Button title="Plant Fiber Hat" onPress={() => navigation.navigate('PlantFiberHatItem')} />
        <Button title="Plant Fiber Hood" onPress={() => navigation.navigate('PlantFiberHoodItem')} />
        <Button title="Plant Fiber Pants" onPress={() => navigation.navigate('PlantFiberPantsItem')} />
        <Button title="Plant Fiber Shirt" onPress={() => navigation.navigate('PlantFiberShirtItem')} />
      </View>
    );
  }

export default PlantFiberScreen;