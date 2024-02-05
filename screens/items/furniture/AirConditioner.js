{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function AirConditionerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Air Conditioner Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>An Air Conditioner is a furniture item which can be found most commonly on rooftops, in an attic or directly beside a house. The Air Conditioners is a good source of brass as you may find a Brass Radiator.</Text>

        <Text style={[styles.text]}>You can properly harvest parts from the Air Conditioner by using a Wrench. The higher the Quality of the Wrench the greater amount of parts that can be harvested.</Text>
        

        <Text style={[styles.buffListHeader]}>Dismantling:</Text>
        <Text style={[styles.buffList]}>1-10 Iron</Text>
        <Text style={[styles.buffList]}>3-7 Electrical Parts</Text>
        <Text style={[styles.buffList]}>0-4 Mechanical Parts</Text>
        <Text style={[styles.buffList]}>1-5 Short Iron Pipe</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default AirConditionerItem;