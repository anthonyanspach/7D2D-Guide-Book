{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AnimalFatItem({ navigation }) {
    return (
      <View>
        <Text>Animal Fat Info</Text>

        <Text>Description:</Text>
        <Text>Animal Fat is an ingredient that is acquired by Harvesting Animals with a Bone Knife, Hunting Knife, or Machete. Animal Fat is used to cook into different foods at a Campfire. Eating Animal Fat will have a positive effect on Fullness but a negative one on Health.</Text>
      </View>
    );
  }

export default AnimalFatItem;