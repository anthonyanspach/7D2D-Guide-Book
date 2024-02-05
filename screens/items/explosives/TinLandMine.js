{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function TinLandMineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Tin Land Mine Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Tin Land Mine is a ground based Explosive, similar to the Hub Cap Land Mine or Air Filter Land Mine, which can be strategically placed on any flat surface except water. If anything steps on it, whether a Zombie, the player, or an animal, the mine will explode. Mines cannot be picked up once placed. The Tin Land Mine is one of the weaker Land Mines, but does not require a Workbench to craft.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Iron</Text>
        <Text style={[styles.list]}>4 Gun Powder</Text>
        <Text style={[styles.list]}>1 Nail</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>
      </ScrollView>
    );
  }

export default TinLandMineItem;