{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AmbienceSystemScreen({ navigation }) {
    return (
      <View>
        <Text>Ambience Mechanics</Text>

        <Text>Dynamic Music:</Text>
        <Text>The Dynamic Music System is a fully dynamic system, which allows for in-game music to be played while playing the game.</Text>

        <Text>The system procedurally generates a complete musical arrangement from a set of interchangeable loops. There are over 750 unique combinations.</Text>

        <Text>The system is designed to provide music while the player is exploring the world.</Text>
      </View>
    );
  }

export default AmbienceSystemScreen;