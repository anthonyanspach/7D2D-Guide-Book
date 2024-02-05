{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BulletproofGlassItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bulletproof Glass Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Bulletproof Glass is a very strong semi-transparent block introduced in Alpha 16 which can be found in various buildings.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>110 Crushed Sand</Text>
        <Text style={[styles.list]}>10 Small Stone</Text>
        <Text style={[styles.list]}>40 Lead</Text>
        <Text style={[styles.list]}>20 Iron</Text>
        <Text style={[styles.list]}>20 Clay Soil</Text>
      </ScrollView>
    );
  }

export default BulletproofGlassItem;