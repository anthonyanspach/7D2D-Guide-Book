{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanPastaItem({ navigation }) {
    return (
      <View>
        <Text>Can of Pasta Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Pasta is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Can of Pasta has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Pasta will have a positive effect on your Fullness.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanPastaItem;