{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <View>
        <Text>Clubs</Text>

        <Text>Description:</Text>
        <Text>Clubs and bats are covered under the perk Pummel Pete. They offer a balance between attack speed and damage. Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>
        
        <Button title="Wooden Club" onPress={() => navigation.navigate('WoodenClubItem')} />
        <Button title="Candy Cane Club" onPress={() => navigation.navigate('CandyCaneClubItem')} />
        <Button title="Steel Club" onPress={() => navigation.navigate('SteelClubItem')} />
        <Button title="Baseball Bat" onPress={() => navigation.navigate('BaseballBatItem')} />
      </View>
    );
  }

export default WorkstationsScreen;