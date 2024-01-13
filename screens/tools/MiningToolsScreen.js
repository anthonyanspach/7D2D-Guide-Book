{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MiningToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Mining Tools</Text>

        <Text>Decription:</Text>
        <Text>Mining Tools are a subset of all the tools used for obtaining basic resources from all objects through mining.</Text>
        
        <Button title="Stone Shovel" onPress={() => navigation.navigate('StoneShovelItem')} />
        <Button title="Iron Shovel" onPress={() => navigation.navigate('IronShovelItem')} />
        <Button title="Iron Pickaxe" onPress={() => navigation.navigate('IronPickaxeItem')} />
        <Button title="Steel Shovel" onPress={() => navigation.navigate('SteelShovelItem')} />
        <Button title="Steel Pickaxe" onPress={() => navigation.navigate('SteelPickaxeItem')} />
        <Button title="Auger" onPress={() => navigation.navigate('AugerItem')} />
      </View>
    );
  }

export default MiningToolsScreen;