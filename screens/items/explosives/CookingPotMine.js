{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CookingPotMineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cooking Pot Mine Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Cooking Pot Mine is a ground based Explosive, similar to other Mines such as the Hub Cap Land Mine or Tin Land Mine. It can be strategically placed on any flat surface except water. If anything steps on it, whether it be a Zombie, a player, or an animal, the mine will explode. This is the only mine that is able to be picked up once placed.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Forged Iron</Text>
        <Text style={[styles.list]}>5 Gun Powder</Text>
        <Text style={[styles.list]}>1 Nail</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default CookingPotMineItem;