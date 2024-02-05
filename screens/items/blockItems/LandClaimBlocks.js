{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function LandClaimBlockItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Land Claim Blocks Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Land Claim Block (LCB) provides extra protection for a 41x41 (adjustable in map/server settings) horizontally-based region. In both Single and Multi-player modes, it enables picking up your work stations and electric devices within the governed area. The player who placed the land claim block can hold "E" while facing the object they wish to pick up and will be presented with an option to take it. If you destroy the land claim block, the area it owned with extra border zone is then forbidden for claiming again. (This could be for a period of time, still testing.)</Text>

        <Text style={[styles.text]}>While there is no limit on the number of LCBs a player can place in the world, only three LCBs may be active at a time. Placing a new LCB will cause an old LCB to go inactive and be reduced to 1 durability. The protection provided by the old LCB will disappear.</Text>

        <Text style={[styles.text]}>A Land Claim Block is active as long as the player who placed it is in the game. Once a player leaves the game there is a configurable delay to when the LCB considers them offline. This defaults to the instant they leave, but may be increased in map/server settings. Once a player is offline then the LCB uses the offline protection multiplier. By default this is the same as the online protection multiplier, 4x less damage. This can also be adjusted in settings. The land claim duration setting controls how long a LCB will continue to provide offline protection for before going inactive, by default this is 7 days.</Text>

        <Text style={[styles.text]}>The Land Claim Block should prevent all Point of Interest Zombies from respawning within its area. Furthermore, if its protected area includes a Point of Interest then it should prevent Trader jobs from selecting that POI as an quest location. This allows players to take over POI structures.</Text>

        <Text style={[styles.text]}>This does not prevent open world or horde zombie spawns, only POI zombie spawns are suppressed. For example if a player were to go into the Forest, place an LCB, surround the area in a 1-block wide by 3-block high wall, and leave the area for a bit, they might see a zombie or two within the undamaged wall the next time they return. In order to suppress open world zombie spawns in the area the player must replace or cover the Forest Ground or any surface block not placed by a player, with player obtained blocks such as Wood Frames or Concrete Blocks. However, there may be special rules for certain entities such as vultures that will still allow them to spawn. More testing is required.</Text>

        <Text style={[styles.textHeader]}>Protection Zone:</Text>
        <Text style={[styles.text]}>As stated, the LCB creates a protection zone. The size of the zone can be changed via server settings. The default setting is a 41 x 41 area that extends infinitely in both directions above and below the LCB, creating a column that extends the full height of the map. All blocks inside the protection zone receive the durability multiplier, which can be changed via server settings. By default, the damage multiplier is 4.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Small Stone</Text>
      </ScrollView>
    );
  }

export default LandClaimBlockItem;