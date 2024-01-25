{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CraftinggSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Crafting Mechanics</Text>

        <Text style={[styles.text]}>Crafting:</Text>
        <Text style={[styles.text]}>Once a player has gathered the necessary materials, many items can be crafted directly from a player's inventory.</Text>

        <Text style={[styles.text]}>Some items must be crafted inside a forge, workbench, chemistry station, or cement mixer.</Text>

        <Text style={[styles.text]}>Every craftable item takes time to craft. You can queue multiple items, including stacks of items, to craft many things in a row.</Text>

        <Text style={[styles.text]}>Each crafting station (including your own inventory) has its own crafting queue, so it's possible to craft many things in parallel.</Text>

        <Text style={[styles.text]}>The player cannot craft everything straight away. Some crafting recipes must be learnt through perks, and some must be found via rare schematics.</Text>


        <Text style={[styles.text]}>Crafting Menu:</Text>
        <Text style={[styles.text]}>The crafting menu allows the player to craft items.</Text>

        <Text style={[styles.text]}>Opening the crafting menu does not pause time.</Text>

        <Text style={[styles.text]}>The crafting menu shows the player the current items they can make, what they need to make an item, or if they have the required skill or recipe book.</Text>

        <Text style={[styles.text]}>Players can only craft four stacks of items at a time.</Text>


        <Text style={[styles.text]}>Chemistry:</Text>
        <Text style={[styles.text]}>The only place a player can use chemistry is at a chemistry station.</Text>

        <Text style={[styles.text]}>Chemistry is a cheaper way of producing some items the player can otherwise craft in their inventories. For example, gunpowder requires half the materials if crafted in a chemistry station.</Text>

        <Text style={[styles.text]}>A chemistry station is essential for mass-producing items such as gunpowder, antibiotics, and oil.</Text>


        <Text style={[styles.text]}>Cooking:</Text>
        <Text style={[styles.text]}>The only place a player can cook at is a Campfire.</Text>

        <Text style={[styles.text]}>Cooking is a requirement to be able to make unhealthy foods such as raw meat into healthier foods such as Meat Stew.</Text>

        <Text style={[styles.text]}>Cooking is also required to make drinks such as turning Bottled Murky Water into Bottled Water.</Text>

        <Text style={[styles.text]}>Some recipes require additional tools, like the Cooking Pot, to be installed in the campfire.</Text>


        <Text style={[styles.text]}>Forging:</Text>
        <Text style={[styles.text]}>The forge is used to make nearly every metal item in the game.</Text>

        <Text style={[styles.text]}>To craft an item in the forge, the material needed to craft the selected item must be smelted, putting the material in the forge itself. The forge will not use materials from the player's inventory.</Text>

        <Text style={[styles.text]}>There is no way to craft any item made from the forge inside the player's inventory like the chemistry station can.</Text>

        <Text style={[styles.text]}>Instead of scrapping items, players can put the items intended for scrapping into the forge, getting more resources than if the item was scrapped.</Text>

        <Text style={[styles.text]}>You can't craft certain items in the forge without the correct tool. For example, you can't make forged steel unless the forge has a crucible in it. Similarly, an anvil is needed to craft other items.</Text>
      </ScrollView>
    );
  }

export default CraftinggSystemScreen;

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
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});