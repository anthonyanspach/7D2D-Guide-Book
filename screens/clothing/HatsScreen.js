{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HatsScreen({ navigation }) {
    return (
      <View>
        <Text>Hats Screen</Text>
        <Button title="Baseball Cap" onPress={() => navigation.navigate('BaseballCapItem')} />
        <Button title="Cowboy Hat" onPress={() => navigation.navigate('CowboyHatItem')} />
        <Button title="Press Boy Cap" onPress={() => navigation.navigate('PressboyCapItem')} />
        <Button title="Skull Cap" onPress={() => navigation.navigate('SkullCapItem')} />
      </View>
    );
  }

export default HatsScreen;