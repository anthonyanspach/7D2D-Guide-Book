{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnucklesScreen({ navigation }) {
    return (
      <View>
        <Text>Knuckles</Text>

        <Text>Description:</Text>
        <Text>Knuckles are covered under the perk The Brawler. They have quite small range and damage per attack, but offer a fast attack speed and low stamina cost. They have a notable synergy with Beer, which temporarily gives them the highest damage output of any melee weapon.</Text>
        
        <Button title="Knuckle Wraps" onPress={() => navigation.navigate('KnuckleWrapsItem')} />
        <Button title="Iron Knuckles" onPress={() => navigation.navigate('IronKnucklesItem')} />
        <Button title="Steel Knuckles" onPress={() => navigation.navigate('SteelKnucklesItem')} />
      </View>
    );
  }

export default KnucklesScreen;