{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CraftingScreen({ navigation }) {
    return (
      <View>
        <Button title="WorkStations" onPress={() => navigation.navigate('WorkstationsScreen')} />
        <Text>Crafting Screen</Text>
        <Text>Description: section</Text>
        <Text>Crafting & Trouble Shooting: section</Text>
        <Text>Getting a Craftingstation: section</Text>
        <Text>Better Crafting: section</Text>
        <Button title="Craftable Items???" onPress={() => navigation.navigate('')} />
      </View>
    );
  }

export default CraftingScreen;