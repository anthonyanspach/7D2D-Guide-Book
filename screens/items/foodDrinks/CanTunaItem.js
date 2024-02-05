{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CanTunaItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Can of Tuna Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Can of Tuna is a Canned Food that can be scavenged from various houses and buildings across Navezgane and can also be purchased from vending machines. As with all canned foods, a Can of Tuna has the advantage of being ready to be consumed immediately without the need to be cooked first. Eating a Can of Tuna will have a positive effect on Fullness as well as on Health.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +5</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +2</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default CanTunaItem;