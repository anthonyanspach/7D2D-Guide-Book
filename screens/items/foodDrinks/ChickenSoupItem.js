{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ChickenSoupItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Chicken Soup Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Chicken Soup is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Chicken Soup has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Chicken Soup will have a positive effect on your Fullness and Hydration.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +5</Text>
        <Text style={[styles.attList]}>Hydration: +10</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +1</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default ChickenSoupItem;