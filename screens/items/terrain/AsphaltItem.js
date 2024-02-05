{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function AsphaltItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Asphalt Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Asphalt is a craftable building material commonly found in roads & streets. It can be crafted using the Cement Mixer.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>8 Crushed Sand</Text>
        <Text style={[styles.list]}>17 Small Stone</Text>
        <Text style={[styles.list]}>5 Oil Shale</Text>
      </ScrollView>
    );
  }

export default AsphaltItem;