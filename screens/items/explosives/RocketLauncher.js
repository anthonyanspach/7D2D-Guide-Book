{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function RocketLauncherItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Rocket Launcher Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Rocket Launcher is a type of weapon in 7 Days to Die. It uses Rockets as ammunition (which are rare to find). It will reload automatically, but can also be manually reloaded by pressing the (R) key.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Rocket Launcher Parts</Text>
        <Text style={[styles.list]}>100 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>25 Electrical Parts</Text>
        <Text style={[styles.list]}>15 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default RocketLauncherItem;