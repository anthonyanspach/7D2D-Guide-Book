{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WoodcuttingToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Construction Tools Screen</Text>
        <Button title="Stone Axe" onPress={() => navigation.navigate('StoneAxeItem')} />
        <Button title="Taza's Stone Axe" onPress={() => navigation.navigate('TazaStoneAxeItem')} />
        <Button title="Iron Fireaxe" onPress={() => navigation.navigate('IronFireaxeItem')} />
        <Button title="Steel Axe" onPress={() => navigation.navigate('SteelAxeItem')} />
        <Button title="Chainsaw" onPress={() => navigation.navigate('ChainsawItem')} />
      </View>
    );
  }

export default WoodcuttingToolsScreen;