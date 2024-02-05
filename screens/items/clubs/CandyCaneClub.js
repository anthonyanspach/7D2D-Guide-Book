{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CandyCaneClubItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Candy Cane Club Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Candy Cane Club is a tier 1 Club - a one-handed melee weapon used to pummel your enemies. The Candy Cane Club cannot be crafted and is a seasonal item only being available during the month of December in the actual calendar year. You can find these clubs when looting during the month of December.</Text>

        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, the Candy Cane Club is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Candy Cane Club, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default CandyCaneClubItem;