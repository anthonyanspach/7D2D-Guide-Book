{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function DisassemblyToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Disassembly Tools</Text>

        <Text>Decription:</Text>
        <Text>Disassemble Tools are a subset of all the tools used for obtaining additional resources from various mechanical and electrical objects through salvaging.</Text>
        
        <Button title="Wrench" onPress={() => navigation.navigate('WrenchItem')} />
        <Button title="Ratchet" onPress={() => navigation.navigate('RatchetItem')} />
        <Button title="Impact Driver" onPress={() => navigation.navigate('ImpactDriverItem')} />
      </View>
    );
  }

export default DisassemblyToolsScreen;