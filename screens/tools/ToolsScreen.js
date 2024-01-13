{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Tool Categories</Text>

        <Text>Description:</Text>
        <Text>Tools are items whose function is to make destroying different blocks easier for the player. Different items are better for different tasks such as mining stone, digging clay and chopping wood. Many items can have multiple purposes, as most tools can be used as weapons in a pinch and vice-versa. However, an emphasis has been made to make tools less effective when attacking entities. This can also be seen in some mods for the tools (for example, the Fireman's Axe mod increases block damage, but decreases entity damage). Items also vary on how effective they are for each task. Using the wrong tool will take much longer and, in the case of butchering, might not give as many resources as with the proper tool.</Text>

        
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