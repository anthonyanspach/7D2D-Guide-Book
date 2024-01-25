{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MiningSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Mining Mechanics</Text>

        <Text style={[styles.text]}>Overview:</Text>
        <Text style={[styles.text]}>Mining refers to the activity of Harvesting earth-based and metal-based blocks in order to obtain basic resources such as Clay Soil, Small Stone, Iron, Coal, and so on. As in all types of Harvesting, materials are extracted from blocks as they are damaged and/or destroyed by your efforts.</Text>


        <Text style={[styles.text]}>Mining Tools:</Text>
        <Text style={[styles.text]}>While Mining can be done using Fists, doing so would be tedious and painful. Equipping an Appropriate Tool will greatly speed up the mining process. For softer terrain, such as dirt, sand and gravel, a Shovel or an Auger will work best. For hard blocks including Stone, Iron Ore, Coal Ore, Potassium Nitrate, Lead Ore, and Oil Shale, Stone Axe can be used in the early game with Iron Pickaxe, Steel Pickaxe and Auger being progressively more efficient. These tools can be viewed and compared here.</Text>


        <Text style={[styles.text]}>Finding Common Materials:</Text>
        <Text style={[styles.text]}>Common materials such as Clay Soil, Stone, and Sand can be found almost anywhere. Normal forest terrain will produce Clay Soil, Desert terrain will produce Clay Soil and Sand in equal measure, and Gravel (on gravel roads) will produce a mix of Sand and Small Stone. Surface boulders can be mined directly for Small Stone.</Text>

        <Text style={[styles.text]}>Finding and Extracting Ores:</Text>
        <Text style={[styles.text]}>Ores are distributed widely underground. There are two ways to find them - surface nodes and random mining. In both cases, mining underground gravel will lead you to more ore. See Following Gravel for more.</Text>

        <Text style={[styles.text]}>Any ore can be found in any biome except for Oil Shale which is found only in the desert and replaces Coal. Surface nodes of all other ore types can be found scattered around everywhere and regardless of the surface node type, underground there will likely be a mix of several ores.</Text>

        <Text style={[styles.text]}>The easiest way to find ore is to look for surface nodes of each ore type and start digging there.</Text>

        <Text style={[styles.text]}>Each node is itself a full ore block, and directly beneath it will be 2-3 additional ore blocks. If you continue to dig deeper and wider, you will likely uncover a vast deposit of whatever ore was at the surface potentially along with other ores mixed in. The image to the right shows a large underground ore field marked by a surface node (lead, in this case, but you can see different types of ores mixed in).</Text>

        <Text style={[styles.text]}>Although surface nodes are a sure-fire way to find big underground deposits, there is ore all over the place underground and you can have great luck just digging where you are and exploring. The image to the right shows a very large ore deposit underground with no surface node attached.</Text>

        <Text style={[styles.text]}>Ore blocks are always bordered by either another ore block or a gravel block, you will almost never find an ore block completely surrounded by stone. By "following the gravel" you will increase your chances of finding more ore blocks. The image on the right shows some Coal and Lead ore blocks surrounded by gravel.</Text>


        <Text style={[styles.text]}>Mining Related Perks:</Text>
        <Text style={[styles.text]}>Miner 69er will allow the crafting of better tools, increases their block damage and reduces stamina use.</Text>

        <Text style={[styles.text]}>Mother Lode will allow the harvesting of more resources from each node (including Wood from trees).</Text>

        <Text style={[styles.text]}>Advanced Engineering will allow forging iron and steel to create better tools.</Text>


        <Text style={[styles.text]}>Mining Related Books:</Text>
        <Text style={[styles.text]}>There is a series of Perk Books which give special bonuses for mining: The Art of Mining. These books give chances to find silver/gold/gems, allow compacting ores into easier-to-carry stacks and, if all of them are read, the player has a chance to one-shot any ore block.</Text>


        <Text style={[styles.text]}>Digging and Structural Intgrity:</Text>
        <Text style={[styles.text]}>Structural Integrity should be kept in mind while mining underground. Tunnels beneath the surface can compromise the integrity of buildings on the surface and carving out large caves can result in a collapse (and damage to you!). It is a good idea to keep a stack of Wood Frames to use as support pillars. The Art of Mining book series has a book which reduces damage taken from cave-ins.</Text>
      </ScrollView>
    );
  }

export default MiningSystemScreen;

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