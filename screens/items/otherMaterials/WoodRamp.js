{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function WoodRampItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Ramp Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>As of Alpha 10.4 build 10, Wood Ramp was no longer available via the Creative Menu. A Wood Ramp is the upgraded version of a Wood Ramp Frame and can also be upgraded further into a Reinforced Wood Ramp. It can not be crafted using other materials, the only ways to obtain a Wood Ramp was through upgrading a Wood Ramp Frame or using the Creative Menu. It was not possible to use a Wood Ramp as a source of Combustible fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Wood Ramp Frame</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default WoodRampItem;