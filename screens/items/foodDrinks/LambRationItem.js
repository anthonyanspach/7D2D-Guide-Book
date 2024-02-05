{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function LambRationItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Lamb Ration Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Lamb Rations is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all canned foods, a Lamb Rations has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Lamb Rations will have a positive effect on Fullness as well as on Health.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +15</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +7</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default LambRationItem;