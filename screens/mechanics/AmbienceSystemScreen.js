{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function AmbienceSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ambience Mechanics</Text>

        <Text style={[styles.textHeader]}>Dynamic Music:</Text>
        <Text style={[styles.text]}>The Dynamic Music System is a fully dynamic system, which allows for in-game music to be played while playing the game.</Text>

        <Text style={[styles.text]}>The system procedurally generates a complete musical arrangement from a set of interchangeable loops. There are over 750 unique combinations.</Text>

        <Text style={[styles.text]}>The system is designed to provide music while the player is exploring the world.</Text>
      </ScrollView>
    );
  }

export default AmbienceSystemScreen;