{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ItemsScreen({ navigation }) {
    return (
      <View>
        <Text>Items Screen</Text>
        <Button title="Clothing" onPress={() => navigation.navigate('ClothingScreen')} />
        <Button title="Tools" onPress={() => navigation.navigate('ToolsScreen')} />
        <Button title="Crafting" onPress={() => navigation.navigate('CraftingScreen')} />
        <Button title="Materials" onPress={() => navigation.navigate('')} />
        <Button title="Weapons" onPress={() => navigation.navigate('')} />
        <Button title="Traps & Turrets" onPress={() => navigation.navigate('')} />
        <Button title="Resources" onPress={() => navigation.navigate('')} />
        <Button title="Food" onPress={() => navigation.navigate('')} />
      </View>
    );
  }

export default ItemsScreen;