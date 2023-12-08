{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Clothing Screen</Text>
        <Button title="Construction Tools" onPress={() => navigation.navigate('ConstructionToolsScreen')} />
        <Button title="Butchering Tools" onPress={() => navigation.navigate('ButcheringToolsScreen')} />
        <Button title="Disassembly Tools" onPress={() => navigation.navigate('DisassemblyToolsScreen')} />
        <Button title="Mining Tools" onPress={() => navigation.navigate('MiningToolsScreen')} />
        <Button title="Woodcuttingg Tools" onPress={() => navigation.navigate('WoodcuttingToolsScreen')} />
        <Button title="Special Tools" onPress={() => navigation.navigate('SpecialToolsScreen')} />
      </View>
    );
  }

export default ToolsScreen;