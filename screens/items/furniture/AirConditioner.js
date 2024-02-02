{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AirConditionerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Air Conditioner Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>An Air Conditioner is a furniture item which can be found most commonly on rooftops, in an attic or directly beside a house. The Air Conditioners is a good source of brass as you may find a Brass Radiator.</Text>

        <Text style={[styles.text]}>You can properly harvest parts from the Air Conditioner by using a Wrench. The higher the Quality of the Wrench the greater amount of parts that can be harvested.</Text>
        

        <Text style={[styles.list]}>Dismantling:</Text>
        <Text style={[styles.list]}>1-10 Iron</Text>
        <Text style={[styles.list]}>3-7 Electrical Parts</Text>
        <Text style={[styles.list]}>0-4 Mechanical Parts</Text>
        <Text style={[styles.list]}>1-5 Short Iron Pipe</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default AirConditionerItem;


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
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});