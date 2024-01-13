{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CraftinggSystemScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Crafting Mechanics</Text>

        <Text>Crafting:</Text>
        <Text>Once a player has gathered the necessary materials, many items can be crafted directly from a player's inventory.</Text>

        <Text>Some items must be crafted inside a forge, workbench, chemistry station, or cement mixer.</Text>

        <Text>Every craftable item takes time to craft. You can queue multiple items, including stacks of items, to craft many things in a row.</Text>

        <Text>Each crafting station (including your own inventory) has its own crafting queue, so it's possible to craft many things in parallel.</Text>

        <Text>The player cannot craft everything straight away. Some crafting recipes must be learnt through perks, and some must be found via rare schematics.</Text>


        <Text>Crafting Menu:</Text>
        <Text>The crafting menu allows the player to craft items.</Text>

        <Text>Opening the crafting menu does not pause time.</Text>

        <Text>The crafting menu shows the player the current items they can make, what they need to make an item, or if they have the required skill or recipe book.</Text>

        <Text>Players can only craft four stacks of items at a time.</Text>


        <Text>Chemistry:</Text>
        <Text>The only place a player can use chemistry is at a chemistry station.</Text>

        <Text>Chemistry is a cheaper way of producing some items the player can otherwise craft in their inventories. For example, gunpowder requires half the materials if crafted in a chemistry station.</Text>

        <Text>A chemistry station is essential for mass-producing items such as gunpowder, antibiotics, and oil.</Text>


        <Text>Cooking:</Text>
        <Text>The only place a player can cook at is a Campfire.</Text>

        <Text>Cooking is a requirement to be able to make unhealthy foods such as raw meat into healthier foods such as Meat Stew.</Text>

        <Text>Cooking is also required to make drinks such as turning Bottled Murky Water into Bottled Water.</Text>

        <Text>Some recipes require additional tools, like the Cooking Pot, to be installed in the campfire.</Text>


        <Text>Forging:</Text>
        <Text>The forge is used to make nearly every metal item in the game.</Text>

        <Text>To craft an item in the forge, the material needed to craft the selected item must be smelted, putting the material in the forge itself. The forge will not use materials from the player's inventory.</Text>

        <Text>There is no way to craft any item made from the forge inside the player's inventory like the chemistry station can.</Text>

        <Text>Instead of scrapping items, players can put the items intended for scrapping into the forge, getting more resources than if the item was scrapped.</Text>

        <Text>You can't craft certain items in the forge without the correct tool. For example, you can't make forged steel unless the forge has a crucible in it. Similarly, an anvil is needed to craft other items.</Text>
      </ScrollView>
    );
  }

export default CraftinggSystemScreen;