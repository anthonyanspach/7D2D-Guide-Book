{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodenClubItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Club Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Wooden Club is a tier 1 Club - a one-handed melee weapon used to pummel your enemies.</Text>

        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, the Wooden Club is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Wooden Club, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Wood</Text>
      </ScrollView>
    );
  }

export default WoodenClubItem;