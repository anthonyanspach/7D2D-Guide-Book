{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function DoubleBarrelShotgunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Double Barrel Shotgun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Double Barrel Shotgun is commonly found throughout Navezgane while Looting. Is a good source of Shotgun Parts for crafting better grade of Shotguns, however the scrapped Double Barrel Shotgun must be a Quality 3 or higher. Double Barrel Shotgun only has 2 shots making it a valuable weapon in an emergency but not entirely practical at higher game stage Blood Moon Horde nights.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Shotgun Parts</Text>
        <Text style={[styles.list]}>50 Forged Iron</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>10 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Shotgun Weekly</Text>
      </ScrollView>
    );
  }

export default DoubleBarrelShotgunItem;