{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function StoneSpearItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stone Spear Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Stone Spear is a tier 1 Spear which can be used as a one-handed melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Small Stone</Text>
        <Text style={[styles.list]}>3 Plant Fibers</Text>
        <Text style={[styles.list]}>3 Wood</Text>
      </ScrollView>
    );
  }

export default StoneSpearItem;