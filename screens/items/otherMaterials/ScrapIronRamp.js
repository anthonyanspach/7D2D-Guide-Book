{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function ScrapIronRampItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Scrap Iron Ramp Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Scrap Iron Ramp is a building material created by upgrading a Scrap Iron Frame Ramp block using Scrap Iron. It can be further upgraded into Reinforced Scrap Iron Ramp using Scrap Iron and an appropriate tool.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Scrap Iron Frame Ramp</Text>
        <Text style={[styles.list]}> 5 Scrap Iron</Text>
      </ScrollView>
    );
  }

export default ScrapIronRampItem;