{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanPastaItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Can of Pasta Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A Can of Pasta is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Can of Pasta has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Pasta will have a positive effect on your Fullness.</Text>

        <Text style={[styles.list]}>Fullness: +15</Text>
        <Text style={[styles.list]}>Hydration: 0</Text>
        <Text style={[styles.list]}>Stamina: 0</Text>
        <Text style={[styles.list]}>Health: +7</Text>
        <Text style={[styles.list]}>Dysentery Chance: 0%</Text>
      </ScrollView>
    );
  }

export default CanPastaItem;


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