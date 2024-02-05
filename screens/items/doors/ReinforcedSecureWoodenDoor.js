{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ReinforcedSecureWoodenDoorItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Reinforced Secure Wooden Door Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Reinforced Secure Wooden Door is a door that can be locked and unlocked by the player. It is the upgraded version of a Secure Wooden Door and can also be upgraded further into a Metal Reinforced Wooden Door.</Text>
        <Text style={[styles.text]}>To craft an Reinforced Secure Wooden Door, upgrade a previously placed Secure Wooden Door.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Secure Wooden Door</Text>
        <Text style={[styles.list]}>4 Wood</Text>
      </ScrollView>
    );
  }

export default ReinforcedSecureWoodenDoorItem;