{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MechanicsScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Mechanics</Text>
        <Text>There are a lot of different game mechanics which are briefly summarized here. This is not intended as a tutorial or guide, but an overview of information about game mechanics with links to pages on each subject.</Text>
        <Button title=" Survival" onPress={() => navigation.navigate('SurvivalScreen')} />
        <Button title=" Combat and Damage" onPress={() => navigation.navigate('CombatDamageScreen')} />
        <Button title=" Leveling System" onPress={() => navigation.navigate('LevelingSystemScreen')} />
        <Button title=" Crafting System" onPress={() => navigation.navigate('CraftingSystemScreen')} />
        <Button title=" Repairing Items" onPress={() => navigation.navigate('RepairingItemScreen')} />
        <Button title=" Item System" onPress={() => navigation.navigate('ItemSystemScreen')} />
        <Button title=" Menu Interface" onPress={() => navigation.navigate('MenuInterfaceScreen')} />
        <Button title=" Resources System" onPress={() => navigation.navigate('ResourcesSystemScreen')} />
        <Button title=" Constructing Buildings" onPress={() => navigation.navigate('ConstructingBuildingsScreen')} />
        <Button title=" Ambience System" onPress={() => navigation.navigate('AmbienceSystemScreen')} />
        <Button title="Zombies" onPress={() => navigation.navigate('ZombiesScreen')} />
        <Button title="Electricity" onPress={() => navigation.navigate('ElectricityScreen')} />
        <Button title="Health System" onPress={() => navigation.navigate('HealthSystemScreen')} />
        <Button title="Mining System" onPress={() => navigation.navigate('MiningSystemScreen')} />
      </ScrollView>
    );
  }

export default MechanicsScreen;