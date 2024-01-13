{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanPeasItem({ navigation }) {
    return (
      <View>
        <Text>Can of Peas Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Peas is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Can of Peas has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Peas will have a positive effect on your Fullness.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: +5</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanPeasItem;