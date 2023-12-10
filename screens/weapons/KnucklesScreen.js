{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnucklesScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Knuckle Wraps" onPress={() => navigation.navigate('KnuckleWrapsItem')} />
        <Button title="Iron Knuckles" onPress={() => navigation.navigate('IronKnucklesItem')} />
        <Button title="Steel Knuckles" onPress={() => navigation.navigate('SteelKnucklesItem')} />
      </View>
    );
  }

export default KnucklesScreen;