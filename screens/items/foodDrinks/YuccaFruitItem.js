{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function YuccaFruitItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Yucca Fruit Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Yucca Fruit is a food item found after destroying a Saguaro and Prickly Pear or harvested directly from a Yucca Plant. Planted Yucca Plants remain after harvesting, while wild ones disappear. Eating Yucca Fruit will have a positive effect on Fullness.</Text>
      </ScrollView>
    );
  }

export default YuccaFruitItem;