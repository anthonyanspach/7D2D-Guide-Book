{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function TazaStoneAxeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Taza's Stone Axe info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Taza's Stone Axe is an artifact version of the Stone Axe that can be used to harvest resources, upgrade blocks, and repair damaged blocks. The Taza's Stone Axe cannot be crafted, only looted from an Apache Artifact Chest in the Desert biome or in natural Caves found in other biomes.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>*As a Tool* When using the Taza's Stone Axe as a tool, the following actions can be performed:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will swing the Taza's Stone Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to cut down trees, dig into the earth, mine a boulder, or mine down into the Stone found underground. Harvesting most items or blocks will provide Resources with each swing.</Text>
        <Text style={[styles.text]}>Butchering. When harvesting a recently slain animal corpse, a carcass or a body bag, the Stone Axe acts as a Butcher Tool, allowing the player to obtain resources from the corpse that wouldn't be acquired when using a tool that is not a designated Butcher Tool.</Text>
        <Text style={[styles.text]}>Repairing Blocks. Using the secondary click (default right mouse button) while targeting the crosshairs on almost any damaged item or block within range will use the Stone Axe to repair that item or block, provided that the player has the appropriate repair material needed in their inventory.</Text>
        <Text style={[styles.text]}>Upgrading Blocks. The player can also use a Stone Axe as an upgrade tool by using the secondary click while targeting a block that is upgradeable. The appropriate upgrade material must be in the player's inventory and the block to be upgraded must already be fully repaired before the upgrade process can be started.</Text>
        <Text style={[styles.text]}>*As a Weapon*</Text>
        <Text style={[styles.text]}>When used in combat, a Taza's Stone Axe is a functional, if not very effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.text]}>Repair:</Text>
        <Text style={[styles.text]}>The Durability of the Taza's Stone Axe deteriorates with each use. When its Durability reaches zero, it becomes unusable until repaired. Repairing the Taza's Stone Axe requires 1 Small Stone. Repairing restores its Durability back to Max Durability.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>Uncraftable</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>None/Only Found</Text>
      </ScrollView>
    );
  }

export default TazaStoneAxeItem;


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