{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodWindowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Window Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Wood Window is a craft-able item. Once placed it can be upgraded up to four times with an upgrading tool. The first three levels of upgrade require 10x Wood each. A Wood Window is now a part of the new Upgrade path since A13 and can be upgraded all the way to a steel window plug now with the correct materials. A Wood Window is currently the only upgradable window that can be crafted by the player; it makes an excellent armored skylight for a fortified garden.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Wood</Text>
        <Text style={[styles.list]}>1 Glass Block</Text>
      </ScrollView>
    );
  }

export default WoodWindowItem;