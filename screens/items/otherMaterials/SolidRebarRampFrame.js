{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function SolidRebarRampFrameItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Solid Rebar Ramp Frame</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Solid Rebar Ramp Frame is non craft-able it is an intermediate Upgrading step between Rebar Ramp Frame and Concrete Ramp. When you Upgrading a Rebar Ramp Frame this item is what you have. It looks just like a Rebar Ramp Frame, but it has wood coverings.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Set in Concrete</Text>
      </ScrollView>
    );
  }

export default SolidRebarRampFrameItem;