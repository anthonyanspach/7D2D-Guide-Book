{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SMGAutoTurretItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>SMG Auto Turret Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The SMG Auto Turret senses targets in its view and fires 9mm Ammo at them.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Motion Sensor</Text>
        <Text style={[styles.list]}>46 Forged Steel</Text>
        <Text style={[styles.list]}>4 Handgun Parts</Text>
        <Text style={[styles.list]}>15 Oil</Text>
        <Text style={[styles.list]}>7 Scrap Polymers</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default SMGAutoTurretItem;