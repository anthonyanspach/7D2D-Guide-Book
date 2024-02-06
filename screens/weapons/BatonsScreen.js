{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function BatonsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Batons</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Batons are covered under the perk Electrocutioner. While not offering too much damage, they make up for it with unique qualities. The Pipe Baton's regular attack causes zombies to stagger instantly and its power attack is an instant knockdown against all but the most tough zombies. It also attacks in an arc similar to the sledgehammer and can knock more than one zombie down. The Stun Baton goes further by electrocuting and shocking zombies, making them stunned for a while.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PipeBatonItem')} >

          <Text style={[styles.buttonText]}>Pipe Baton</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('StunBatonItem')} >

          <Text style={[styles.buttonText]}>Stun Baton</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BatonsScreen;