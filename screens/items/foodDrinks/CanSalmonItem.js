{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanSalmonItem({ navigation }) {
    return (
      <View>
        <Text>Can of Salmon Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Salmon is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Food a Can of Salmon has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Salmon will have a positive effect on your Fullness.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanSalmonItem;