{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CanDogFoodItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Can of Dog Food Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Can of Dog Food is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Foods, a Can of Dog Food has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Dog Food will have a positive effect on Fullness as well as on Health.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +10</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +5</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default CanDogFoodItem;