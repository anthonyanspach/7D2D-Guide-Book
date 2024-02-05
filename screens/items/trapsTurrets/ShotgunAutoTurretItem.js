{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ShotgunAutoTurretItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shotgun Auto Turret Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Shotgun Auto Turret senses targets in its view and fires shotgun shells at them.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>62 Forged Steel</Text>
        <Text style={[styles.list]}>15 Scrap Polymers</Text>
        <Text style={[styles.list]}>15 Oil</Text>
        <Text style={[styles.list]}>1 Motion Sensor</Text>
        <Text style={[styles.list]}>4 Shotgun Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default ShotgunAutoTurretItem;