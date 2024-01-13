{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ResourcesSystemScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Resource Mechanics</Text>

        <Text>Looting:</Text>
        <Text>Looting is done by searching furniture, chests, or garbage cans.</Text>

        <Text>Looting takes time and the time it takes is dependent on the item being looted, and the current level of certain skills and perks the player has.</Text>

        <Text>Every item has a drop table with drop chances for certain items.</Text>

        <Text>Looting is not the same as harvesting because looting can be done by simply opening an item, while harvesting must be done with a certain tool, with no loot interface.</Text>


        <Text>Mining:</Text>
        <Text>Mining can be done by hand, construction tools, or most effectively, by mining tools such as the Pickaxe or Auger.</Text>

        <Text>The most common practice of mining is to find a stone node on the surface and use the appropriate tool to get Small Stones, raw iron, Coal, and nitrate powder.</Text>

        <Text>Every biome has predominant ore spawns on the surfaces and underground. Both not always being the same.</Text>

        <Text>Surfaces ores jut out from the ground and can be mined for a single type of mineral. For example, the Burnt Forest has nitrate deposits on the surface, and Coal Ore deposits underground.</Text>

        <Text>Mining is also done with Shovels, but shovels are only used for certain block types like Dirt, Sand, or Gravel, and cannot be used on any type of stone or mineral.</Text>


        <Text>Farming:</Text>
        <Text>Farming can be done with plants or trees, and unlike mining is indefinite as if done correctly you will always get more seeds back than you used in the first place.</Text>

        <Text>Plants can be turned into seeds in the player's inventory to allow farming, trees, on the other hand, will always give some seeds once a tree is fully cut down.</Text>

        <Text>Plants require natural sunlight to grow. Artificial light, such as from torches, cannot be used to grow plants that are not reached by sunlight. (Mushrooms are the only exception and do not require sunlight)</Text>


        <Text>Appropriate Tool:</Text>
        <Text>There are many different types of blocks and each has its own appropriate tool which is best used to destroy them.</Text>

        <Text>Not using the appropriate tool reduces the damage the block takes by 20%.</Text>


        <Text>Harvesting:</Text>
        <Text>Harvesting is done by the player when a Tool is used on either an Animal's corpse or certain Furniture or Decor.</Text>

        <Text>An Animal's body cannot be looted and must be harvested using an appropriate tool.</Text>

        <Text>A Bone Knife, Hunting Knife, or Machete will always be the best tools to harvest with but any tool is usable.</Text>

        <Text>To avoid harvesting a Zombie's Corpse use a weapon instead.</Text>

        <Text>Wrenches can be used on certain furniture or decor, like an Air Conditioner, Fridge, or Sedan, all producing their own items. These items can only be harvested with a Wrench, other tools like a Claw Hammer will not work.</Text>

        <Text>The Appropriate Tool should always be used while harvesting. Otherwise, the player will lose resources they otherwise could have been gained. Even though you can still harvest animals without the proper tool. Furniture or decor won't even give the player resources without the proper tool.</Text>
      </ScrollView>
    );
  }

export default ResourcesSystemScreen;