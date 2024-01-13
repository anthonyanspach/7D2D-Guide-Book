{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BowsScreen({ navigation }) {
    return (
      <View>
        <Text>Bows</Text>

        <Text>Description:</Text>
        <Text>Bows and crossbows are covered under the perk Archery. They offer a quiet and efficient way to deal with zombies and other enemies. They need to reload after every shot and have a slow attack speed, which is counterbalanced by having an innate boost to stealth damage.</Text>
        
        <Button title="Primitive Bow" onPress={() => navigation.navigate('PrimitiveBowItem')} />
        <Button title="Wooden Bow" onPress={() => navigation.navigate('WoodenBowItem')} />
        <Button title="Iron Crossbow" onPress={() => navigation.navigate('IronCrossbowItem')} />
        <Button title="Compound Bow" onPress={() => navigation.navigate('CompoundBowItem')} />
        <Button title="Compound Crossbow" onPress={() => navigation.navigate('CompoundCrossbowItem')} />
      </View>
    );
  }

export default BowsScreen;