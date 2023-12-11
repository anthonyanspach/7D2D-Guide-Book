{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HandgunsSMGScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Pipe Pistol" onPress={() => navigation.navigate('PipePistolItem')} />
        <Button title="Pistol" onPress={() => navigation.navigate('PistolItem')} />
        <Button title=".44 Magnum" onPress={() => navigation.navigate('A44MagnumItem')} />
        <Button title=".44 Desert Vulture" onPress={() => navigation.navigate('A44DesertVultureItem')} />
        <Button title="SMG-5" onPress={() => navigation.navigate('SMGItem')} />
      </View>
    );
  }

export default HandgunsSMGScreen;