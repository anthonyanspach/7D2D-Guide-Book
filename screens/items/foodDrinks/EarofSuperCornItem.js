{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function EarofSuperCornItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ear of Super Corn Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>An Ear of Super Corn is a mutated form of corn genetically modified to be a superior food source. This can be first obtained from a Super Corn Plant found at a farm in a Navezgane map at 700N;300W</Text>
      </ScrollView>
    );
  }

export default EarofSuperCornItem;