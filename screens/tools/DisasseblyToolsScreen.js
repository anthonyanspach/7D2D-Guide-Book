{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function DisassemblyToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Construction Tools Screen</Text>
        <Button title="Wrench" onPress={() => navigation.navigate('WrenchItem')} />
        <Button title="Ratchet" onPress={() => navigation.navigate('RatchetItem')} />
        <Button title="Impact Driver" onPress={() => navigation.navigate('ImpactDriverItem')} />
      </View>
    );
  }

export default DisassemblyToolsScreen;