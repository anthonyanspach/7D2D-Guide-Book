{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ItemsScreen({ navigation }) {
    return (
      <View>
        <Text>Items Categories</Text>
        <Button title="Clothing" onPress={() => navigation.navigate('ClothingScreen')} />
        <Button title="Tools" onPress={() => navigation.navigate('ToolsScreen')} />
        <Button title="Crafting" onPress={() => navigation.navigate('CraftingScreen')} />
        <Button title="Materials" onPress={() => navigation.navigate('MaterialsScreen')} />
        <Button title="Weapons" onPress={() => navigation.navigate('WeaponsScreen')} />
        <Button title="Traps & Turrets" onPress={() => navigation.navigate('TrapsTurretsScreen')} />
        <Button title="Resources" onPress={() => navigation.navigate('ResourcesScreen')} />
        <Button title="Food and Drink" onPress={() => navigation.navigate('FoodDrinksScreen')} />
      </View>
    );
  }

export default ItemsScreen;