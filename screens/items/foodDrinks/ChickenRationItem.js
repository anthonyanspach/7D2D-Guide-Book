{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ChickenRationItem({ navigation }) {
    return (
      <View>
        <Text>Chicken Ration Info</Text>

        <Text>Description:</Text>
        <Text>Chicken Ration is a Canned Food that can be scavenged from various houses and buildings across Navezgane or the random generated world. It can also be obtained via an air drop. As with all canned food, the Chicken Ration has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Chicken Ration will have a positive effect on Fullness as well as on Health. The only use for a Chicken Ration is as a source of Food.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default ChickenRationItem;