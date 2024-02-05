{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CanShamItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Can of Sham Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Can of Sham (aka Canned Sham) is a Canned Food that can be looted from many of the various houses or large amounts in Shamway Grocery Store or Shamway Factory. As with all Canned Food, Can of Sham has the advantage of being ready to consume immediately without the need to be cooked first.</Text>
        <Text style={[styles.text]}>Can of Sham is the only Canned Food that can be crafted. However, it is better used to craft Sham Chowder than eaten directly.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +15</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +7</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default CanShamItem;