{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function CementItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cement Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Cement is a craft-able ingredient that is used to craft Concrete Mix and Stone. It can also be harvested from Pallets that have blue cement bags on them. Shovels harvest these pallets quite quickly. Pallets in Point of Interest will respawn if a Quest resets that Point Of Interest. This can be used to gather fairly substantial quantities of cement from some warehouses, factories, and construction sites.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Small Stone</Text>
      </ScrollView>
    );
  }

export default CementItem;