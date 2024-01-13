{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnivesScreen({ navigation }) {
    return (
      <View>
        <Text>Knives</Text>

        <Text>Description:</Text>
        <Text>Knives are covered under the perk Deep Cuts. They offer a lower range and damage per attack, but higher attack speed and debuffs such as bleeding that deal damage. Knives also have boosted damage when hitting zombies that are unaware of the player.</Text>
        
        <Button title="Bone Knife" onPress={() => navigation.navigate('BoneKnifeItem')} />
        <Button title="Candy Cane Knife" onPress={() => navigation.navigate('CandyCaneKnifeItem')} />
        <Button title="Hunting Knife" onPress={() => navigation.navigate('HuntingKnifeItem')} />
        <Button title="Machete" onPress={() => navigation.navigate('MacheteItem')} />
      </View>
    );
  }

export default KnivesScreen;