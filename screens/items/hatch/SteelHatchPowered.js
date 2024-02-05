{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SteelHatchPoweredItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Hatch Powered Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Steel Hatch (Powered) is a craftable hatch which only closes when powered by Electricity. This Hatch has to be crafted separately and cannot be upgraded from a Steel Hatch. It is crafted using Forged Steel, Springs, Mechanical Parts, and Electrical Parts. The Steel Hatch (Powered) cannot be upgraded further.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>The Steel Hatch (Powered) has no 'E' key options seen on other Hatches, thus must be powered with Electricity to be opened and closed. The easiest setup is to run a wire from your power source, through a Switch, to the Hatch. The default 'off' position leaves the Hatch closed, while flipping the Switch 'on' will open the Hatch.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Forged Style</Text>
        <Text style={[styles.list]}>10 Springs</Text>
        <Text style={[styles.list]}>10 Mechanical Parts</Text>
        <Text style={[styles.list]}>10 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Wiring 101</Text>
      </ScrollView>
    );
  }

export default SteelHatchPoweredItem;