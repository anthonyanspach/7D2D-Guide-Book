{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function BlueberriesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Blueberries Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Blueberries are a food item which can be harvested from the Blueberry Plant. Eating Blueberries will have a positive effect on Fullness. They can be used to create Blueberry Seeds which enable the Farming of Blueberry Plants. Blueberries can also be used as an ingredient in various recipes.</Text>
      </ScrollView>
    );
  }

export default BlueberriesItem;