{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ShotgunsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shotguns</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Shotguns are covered under the perk Boomstick. They offer the player a good source of damage in close-quarter combat. However, shotguns' power falls off quite fast when the range between the player and the target increases.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PipeShotgunItem')} >

          <Text style={[styles.buttonText]}>Pipe Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('DoubleBarrelShotgunItem')} >

          <Text style={[styles.buttonText]}>Double Barrel Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PumpShotgunItem')} >

          <Text style={[styles.buttonText]}>Pump Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('AutoShotgunItem')} >

          <Text style={[styles.buttonText]}>Auto Shotgun</Text>

      </TouchableOpacity>
    </ScrollView>
    );
  }

export default ShotgunsScreen;