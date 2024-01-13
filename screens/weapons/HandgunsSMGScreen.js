{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HandgunsSMGScreen({ navigation }) {
    return (
      <View>
        <Text>Handguns and SMGs</Text>

        <Text>Description:</Text>
        <Text>Handguns and the SMG are covered under the perk Gunslinger. Pistols offer a decent attack speed and magazine size with quite high damage. The SMG does the same but automatically.</Text>
        
        <Button title="Pipe Pistol" onPress={() => navigation.navigate('PipePistolItem')} />
        <Button title="Pistol" onPress={() => navigation.navigate('PistolItem')} />
        <Button title=".44 Magnum" onPress={() => navigation.navigate('A44MagnumItem')} />
        <Button title=".44 Desert Vulture" onPress={() => navigation.navigate('A44DesertVultureItem')} />
        <Button title="SMG-5" onPress={() => navigation.navigate('SMGItem')} />
      </View>
    );
  }

export default HandgunsSMGScreen;