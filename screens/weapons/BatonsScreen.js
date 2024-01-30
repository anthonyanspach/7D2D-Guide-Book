{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BatonsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Batons</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Batons are covered under the perk Electrocutioner. While not offering too much damage, they make up for it with unique qualities. The Pipe Baton's regular attack causes zombies to stagger instantly and its power attack is an instant knockdown against all but the most tough zombies. It also attacks in an arc similar to the sledgehammer and can knock more than one zombie down. The Stun Baton goes further by electrocuting and shocking zombies, making them stunned for a while.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PipeBatonItem')} >

          <Text style={[styles.buttonText]}>Pipe Baton</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StunBatonItem')} >

          <Text style={[styles.buttonText]}>Stun Baton</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BatonsScreen;


const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  container: {
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
    
  },
  text: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  list: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    height: '14%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});