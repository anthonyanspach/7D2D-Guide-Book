{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function StunBatonItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stun Baton Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Stun Baton is a melee weapon affected by Intellect and the Electrocutioner perk.</Text>
        <Text style={[styles.text]}>The baton gains "charges" on each hit, 1 for normal attacks and 2 for power attacks. Upon reaching 4 or more charges the next hit will inflict a shock effect on enemies.</Text>
        <Text style={[styles.text]}>While the enemy is being shocked, they will be unable to move or attack and will take 3 damage every second.</Text>
        <Text style={[styles.text]}>Each rank of Electrocutioner increases the duration of the shock effect and the weapon's base damage. It will not increase the damage per tick of the shock effect, but a longer shock will result in it dealing more total damage. It may be repaired using Repair Kits.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Baton Parts</Text>
        <Text style={[styles.list]}>25 Forged Iron</Text>
        <Text style={[styles.list]}>10 Leather</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>
        <Text style={[styles.list]}>10 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tech Planet</Text>
      </ScrollView>
    );
  }

export default StunBatonItem;