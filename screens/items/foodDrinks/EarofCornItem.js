{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function EarofCornItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ear of Corn Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>An Ear of Corn is an edible food item that can be gathered from the Corn Plants. Eating an Ear of Corn will have a positive effect on Fullness. An Ear of Corn can be used to create Corn Seeds which enables the Farming of Corn Plants.</Text>
      </ScrollView>
    );
  }

export default EarofCornItem;