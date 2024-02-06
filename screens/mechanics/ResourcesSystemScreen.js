{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ResourcesSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Resource Mechanics</Text>

        <Text style={[styles.textHeader]}>Looting:</Text>
        <Text style={[styles.text]}>Looting is done by searching furniture, chests, or garbage cans.</Text>

        <Text style={[styles.text]}>Looting takes time and the time it takes is dependent on the item being looted, and the current level of certain skills and perks the player has.</Text>

        <Text style={[styles.text]}>Every item has a drop table with drop chances for certain items.</Text>

        <Text style={[styles.text]}>Looting is not the same as harvesting because looting can be done by simply opening an item, while harvesting must be done with a certain tool, with no loot interface.</Text>


        <Text style={[styles.textHeader]}>Mining:</Text>
        <Text style={[styles.text]}>Mining can be done by hand, construction tools, or most effectively, by mining tools such as the Pickaxe or Auger.</Text>

        <Text style={[styles.text]}>The most common practice of mining is to find a stone node on the surface and use the appropriate tool to get Small Stones, raw iron, Coal, and nitrate powder.</Text>

        <Text style={[styles.text]}>Every biome has predominant ore spawns on the surfaces and underground. Both not always being the same.</Text>

        <Text style={[styles.text]}>Surfaces ores jut out from the ground and can be mined for a single type of mineral. For example, the Burnt Forest has nitrate deposits on the surface, and Coal Ore deposits underground.</Text>

        <Text style={[styles.text]}>Mining is also done with Shovels, but shovels are only used for certain block types like Dirt, Sand, or Gravel, and cannot be used on any type of stone or mineral.</Text>


        <Text style={[styles.textHeader]}>Farming:</Text>
        <Text style={[styles.text]}>Farming can be done with plants or trees, and unlike mining is indefinite as if done correctly you will always get more seeds back than you used in the first place.</Text>

        <Text style={[styles.text]}>Plants can be turned into seeds in the player's inventory to allow farming, trees, on the other hand, will always give some seeds once a tree is fully cut down.</Text>

        <Text style={[styles.text]}>Plants require natural sunlight to grow. Artificial light, such as from torches, cannot be used to grow plants that are not reached by sunlight. (Mushrooms are the only exception and do not require sunlight)</Text>


        <Text style={[styles.textHeader]}>Appropriate Tool:</Text>
        <Text style={[styles.text]}>There are many different types of blocks and each has its own appropriate tool which is best used to destroy them.</Text>

        <Text style={[styles.text]}>Not using the appropriate tool reduces the damage the block takes by 20%.</Text>


        <Text style={[styles.textHeader]}>Harvesting:</Text>
        <Text style={[styles.text]}>Harvesting is done by the player when a Tool is used on either an Animal's corpse or certain Furniture or Decor.</Text>

        <Text style={[styles.text]}>An Animal's body cannot be looted and must be harvested using an appropriate tool.</Text>

        <Text style={[styles.text]}>A Bone Knife, Hunting Knife, or Machete will always be the best tools to harvest with but any tool is usable.</Text>

        <Text style={[styles.text]}>To avoid harvesting a Zombie's Corpse use a weapon instead.</Text>

        <Text style={[styles.text]}>Wrenches can be used on certain furniture or decor, like an Air Conditioner, Fridge, or Sedan, all producing their own items. These items can only be harvested with a Wrench, other tools like a Claw Hammer will not work.</Text>

        <Text style={[styles.text]}>The Appropriate Tool should always be used while harvesting. Otherwise, the player will lose resources they otherwise could have been gained. Even though you can still harvest animals without the proper tool. Furniture or decor won't even give the player resources without the proper tool.</Text>
      </ScrollView>
    );
  }

export default ResourcesSystemScreen;