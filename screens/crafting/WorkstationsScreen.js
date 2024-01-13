{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <View>
        <Text>Workstations</Text>

        <Text>Description:</Text>
        <Text>Workstations can be found across the world in several Points of Interest. Most of these workstations are broken but finding a working one isn't impossible. Settling near a working workstation, especially a forge or a cement mixer, can speed up the player's progression significantly. Every Trader in the world has one instance of each workstation, broken or working, inside their walls. Workstations can also be crafted, looted and bought from a trader if one gets lucky. Advanced Engineering unlocks the recipe for the forge, cement mixer and workbench whereas the Physician unlocks the crafting of a Chemistry Station. Schematics for each workstations can also be found while looting containers but relying on this can slow progression if no suitable schematic is found.</Text>
        
        <Button title="Campfire" onPress={() => navigation.navigate('CampfireItem')} />
        <Button title="Forge" onPress={() => navigation.navigate('ForgeItem')} />
        <Button title="Workbench" onPress={() => navigation.navigate('WorkbenchItem')} />
        <Button title="Cement Mixer" onPress={() => navigation.navigate('CementMixerItem')} />
        <Button title="Chemistry Station" onPress={() => navigation.navigate('ChemistryStationItem')} />
        <Button title="Dew Collector" onPress={() => navigation.navigate('DewCollectorItem')} />
      </View>
    );
  }

export default WorkstationsScreen;