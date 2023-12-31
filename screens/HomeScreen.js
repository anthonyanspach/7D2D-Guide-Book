{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>7 Days to Die Survival HandBook</Text>
        <Text>7 Days to Die is a new survival horde crafting game from The Fun Pimps:</Text>
        <Text>7 Days to Die has defined the survival genre, with unrivaled crafting and world-building content. Set in a brutally unforgiving post-apocalyptic world overrun by the undead, 7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. It presents combat, crafting, looting, mining, exploration, and character growth, in a way that has seen a rapturous response from fans worldwide. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!</Text>
        <Button title="Starting Guide" onPress={() => navigation.navigate('StartingGuide')} />
        <Button title="Items" onPress={() => navigation.navigate('ItemsScreen')} />
        <Button title="Mechanics" onPress={() => navigation.navigate('MechanicsScreen')} />
      </View>
    );
  }

export default HomeScreen;