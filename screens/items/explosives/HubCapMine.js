{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function HubCapMineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hub Cap Mine Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Hub Cap Land Mine is a ground based Explosive, similar to other Mines such as the Air Filter Land Mine or Tin Land Mine, which can be strategically place on any flat surface except water. If anything steps on it, whether it be a Zombie, the player, or animal, the mine will explode. Mines cannot be picked up once placed.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Forged Iron</Text>
        <Text style={[styles.list]}>8 Gun Powder</Text>
        <Text style={[styles.list]}>1 Nail</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default HubCapMineItem;