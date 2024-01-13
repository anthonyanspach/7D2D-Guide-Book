{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanMisoItem({ navigation }) {
    return (
      <View>
        <Text>Can of Miso Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Miso is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Can of Miso has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Miso will have a positive effect on your Fullness and Hydration.</Text>

        <Text>Fullness: +5</Text>
        <Text>Hydration: +10</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +1</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanMisoItem;