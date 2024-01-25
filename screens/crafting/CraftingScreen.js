{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CraftingScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WorkstationsScreen')} >

          <Text style={[styles.buttonText]}>WorkStations</Text>

        </TouchableOpacity>
        <Text style={[styles.screenHeader]}>Crafting Screen</Text>


        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Crafting is the process of making an item from its constituent parts. It is an integral aspect of 7 Days to Die that is accomplished via the Crafting Menu. Almost all items and blocks found in-game can be crafted with a few exceptions. By utilizing crafting, the player can obtain access to items to aid in their survival without relying on their luck of finding items through looting. Crafting can be done in the player's inventory and in any of the workstations: a Campfire, a Forge, a Workbench, a Cement Mixer and a Chemistry Station. Most of these workstations have their own unique recipes that can only be crafted in the respective workstation.</Text>

        <Text style={[styles.text]}>Components used for crafting are obtained via looting, farming, mining, or harvesting. Some components need to be crafted from other base components. Once the player has obtained all the necessary components, found an appropriate crafting station and any possible crafting appliances needed and/or learned the required skill or recipe if needed, they can proceed to craft the item.</Text>


        <Text style={[styles.text]}>Crafting & Trouble Shooting: section</Text>
        <Text style={[styles.text]}>To craft an item, the player must select the specific item in their crafting menu and already have the needed resources used to craft the specific item in the inventory to finally click the button "craft". Optionally, the player can select how many items should be crafted by clicking the left and right arrows located at the top left on the right panel. This amount can also be changed simply by entering a number in the input panel located between the two arrows. Clicking on the item from the crafting menu while holding 'Shift' will automatically set the crafting amount to the max that can be made from the resources in the player's inventory.</Text>

        <Text style={[styles.text]}>If an item cannot be crafted (colored in light grey or craft button missing completely), it is because of one or more of the following reasons:</Text>
        <Text style={[styles.text]}>The player has insufficient resources in their inventory or in the forge. This is accompanied with a message "You don't have the necessary resources to craft this" when pressing the craft button.</Text>

        <Text style={[styles.text]}>The player does not know the crafting recipe. In this case there is either no craft button at all or it is replaced by a perk button. On the recipe list, next to the item, a grey lock can also be seen, indicating that the recipe is locked.</Text>

        <Text style={[styles.text]}>The player is using the wrong workstation (if any at all). In this case the icon next to the name is something other than a padlock and there is no craft button. The said icon indicates the correct one: a hammer and an anvil means the forge, a table means the workbench, a campfire means a campfire and a cement mixer means a cement mixer.</Text>

        <Text style={[styles.text]}>The workstation (a campfire, a forge or a chemistry station) doesn't have fuel. This is accompanied by a message "You don't have the required fuel to craft this" when pressing the craft button.</Text>

        <Text style={[styles.text]}>The workstation (a forge or a campfire) doesn't have correct appliances. This is accompanied by a message "You don't have the required tools to craft this" when pressing the craft button.</Text>


        <Text style={[styles.text]}>For more Info Check out the Crafting Mechanics Info</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CraftingSystemScreen')} >

          <Text style={[styles.buttonText]}>Crafting Mechanics</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default CraftingScreen;

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
    height: '4%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});