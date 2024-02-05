{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CementMixerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cement Mixer Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Cement Mixer is a multi-use tool that can mix not only materials for the production of Concrete Mix, but also Sand, Crushed Sand, Gravel, and Stones.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>Once placed, the Cement Mixer is ready for use. It needs no fuel source and has no input slots. However, it does have a queue, which allows one to craft multiple different items in a series.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>25 Forged Iron</Text>
        <Text style={[styles.list]}>4 Springs</Text>
        <Text style={[styles.list]}>1 Engine</Text>
        <Text style={[styles.list]}>10 Machanical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default CementMixerItem;