{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ConstructionToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Construction Tools Screen</Text>
        <Button title="Stone Axe" onPress={() => navigation.navigate('StoneAxeItem')} />
        <Button title="Taza's Stone Axe" onPress={() => navigation.navigate('TazaStoneAxeItem')} />
        <Button title="Claw Hammer" onPress={() => navigation.navigate('ClawHammerItem')} />
        <Button title="NailGun" onPress={() => navigation.navigate('NailgunItem')} />
      </View>
    );
  }

export default ConstructionToolsScreen;