{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IngredientsScreen({ navigation }) {
    return (
      <View>
        <Text>Ingredients</Text>

        <Text>Description:</Text>
        <Text>While these food items can be eaten, it is usually better to use them in recipes to gain much more fullness and hydration. In addition to their low gains, some of them have also a chance of giving the player Dysentery.</Text>
        
        <Button title="Animal Fat" onPress={() => navigation.navigate('AnimalFatItem')} />
        <Button title="Blueberries" onPress={() => navigation.navigate('BlueberriesItem')} />
        <Button title="Ear of Corn" onPress={() => navigation.navigate('EarofCornItem')} />
        <Button title="Ear of Super Corn" onPress={() => navigation.navigate('EarofSuperCornItem')} />
        <Button title="Egg" onPress={() => navigation.navigate('EggItem')} />
        <Button title="Mushrooms" onPress={() => navigation.navigate('MushroomsItem')} />
        <Button title="Potato" onPress={() => navigation.navigate('PotatoItem')} />
        <Button title="Pumpkin" onPress={() => navigation.navigate('PumpkinItem')} />
        <Button title="Raw Meat" onPress={() => navigation.navigate('RawMeatItem')} />
        <Button title="Rotting Flesh" onPress={() => navigation.navigate('RottingFleshItem')} />
        <Button title="Yucca Fruit" onPress={() => navigation.navigate('YuccaFruitItem')} />
      </View>
    );
  }

export default IngredientsScreen;