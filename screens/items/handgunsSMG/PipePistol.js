{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PipePistolItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Pistol Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Pipe Pistols were added to the game in Alpha 20 Experimental. They are intended to be an early-game weapon, much like their precursor the Blunderbuss.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Short Iron Pipe</Text>
        <Text style={[styles.list]}>6 Glue</Text>
        <Text style={[styles.list]}>18 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Handgun Magazine</Text>
      </ScrollView>
    );
  }

export default PipePistolItem;