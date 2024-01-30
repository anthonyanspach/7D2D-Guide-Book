{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function StoneAxeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stone Axe info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Stone Axe is a primitive, multi-purpose tool that can be used to harvest resources, upgrade blocks, and repair damaged blocks. It can also serve as a basic melee weapon to attack enemies and destroy blocks. The Stone Axe is the staple tool of choice for any beginning player, requiring very few easily obtainable resources to craft and to repair.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will swing the Stone Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow the player to cut down trees, mine a boulder, or mine down into the Stone found underground with decent speed. Harvesting most items or blocks will provide</Text>
        <Text style={[styles.text]}>Butchering. When harvesting a recently slain animal corpse, a carcass or a body bag, the Stone Axe acts as a Butcher Tool, allowing the player to obtain resources from the corpse that wouldn't be acquired when using a tool that is not a designated Butcher Tool.</Text>
        <Text style={[styles.text]}>Repairing Blocks. Using the secondary click (default right mouse button) while targeting the crosshairs on almost any damaged item or block within range will use the Stone Axe to repair that item or block, provided that the player has the appropriate repair material needed in their inventory.</Text>
        <Text style={[styles.text]}>Upgrading Blocks. The player can also use a Stone Axe as an upgrade tool by using the secondary click while targeting a block that is upgradeable. The appropriate upgrade material must be in the player's inventory and the block to be upgraded must already be fully repaired before the upgrade process can be started.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Small Stone</Text>
        <Text style={[styles.list]}>2 Plant Fibers</Text>
        <Text style={[styles.list]}>2 Wood</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Tool Digest</Text>
      </ScrollView>
    );
  }

export default StoneAxeItem;


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