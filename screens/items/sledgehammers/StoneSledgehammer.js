{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StoneSledgehammerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stone Sledgehammer Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Stone Sledgehammer is a tier 1 sledgehammer - a two-handed melee weapon used to pummel your enemies and an effective tool for destroying blocks.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>During combat, The Stone Sledgehammer is an extended range melee weapon and can strike multiple Zombies at close quarters. It is one of the highest damage melee weapon types in the game, but attacks are slow, with a short delay from when the attack is initiated to when the swing occurs. It can kill an average Zombie with one direct hit to the head or two hits or more to the body. It is able to do massive damage with the stealth bonus multiplier. There is a chance that the Stone Sledgehammer will cause the target to be dismembered.</Text>
        <Text style={[styles.text]}>As a tool, The Stone Sledgehammer has a reach of up to 3.5 blocks away and is very effective when used to destroy blocks. However, it is only slightly more effective than the Stone Axe for harvesting the materials from these blocks, since it has a 75% penalty to resources harvested. While it is not the appropriate tool for harvesting either stone-based or concrete blocks, it is an alternative due to its speed at destroying those types of blocks. If you have a stamina boosting effect or skill points invested in offsetting the high stamina cost, it is one of the quickest ways to break into safes and through vault doors.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Small Stone</Text>
        <Text style={[styles.list]}>10 Plant Fibers</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default StoneSledgehammerItem;


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